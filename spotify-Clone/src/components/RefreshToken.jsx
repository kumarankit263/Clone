import axios from 'axios';

const refreshToken = async (refreshToken) => {
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
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  };

  try {
    const response = await axios(authOptions);
    if (response.status === 200) {
      const { access_token, refresh_token } = response.data;
      // Store the new tokens (this can be done in localStorage, context, or state)
      console.log('New access token:', access_token);
      console.log('New refresh token:', refresh_token);
      return { access_token, refresh_token };
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
};

export default refreshToken;
