import PropTypes from 'prop-types'
import { useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import refreshToken from './RefreshToken'
import Layout from './Layout'

const Callback = ({handleLogin}) => {
  useEffect(() => {
    const { code, state } = queryString.parse(window.location.search);

    if (!state) {
      window.location.href = '/#' + queryString.stringify({ error: 'state_mismatch' });
    } else {
      const redirect_uri = 'http://localhost:5173';
      const client_id = import.meta.env.VITE_CLIENT_ID;
      const client_secret = import.meta.env.VITE_CLIENT_SECRET;

      const authOptions = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
        },
        data: new URLSearchParams({
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code',
        }),
      };

      axios(authOptions)
        .then((response) => {
          if (response.status === 200) {
            const { access_token, refresh_token } = response.data;
            // Handle the response data, e.g., save tokens to local storage
            console.log('Access token:', access_token);
            console.log('Refresh token:', refresh_token);

            // Example: Save tokens in localStorage
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            // Optionally, set a timeout to refresh the token before it expires
            setTimeout(() => {
              refreshToken(refresh_token).then(({ access_token, refresh_token }) => {
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
              });
            }, (response.data.expires_in - 60) * 1000); // Refresh 60 seconds before expiry
          }
        })
        .catch((error) => {
          console.error('Error fetching the token', error);
        });
    }
  }, []);

  return (
    <div>
      <Layout handleLogin={handleLogin} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  )
}

Callback.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default Callback
