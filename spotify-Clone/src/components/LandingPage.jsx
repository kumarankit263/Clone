import queryString from 'query-string'
import Layout from './Layout'
import BeforeLogin from '../pages/BeforeLogin';

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

const handleLogin = () => {
  const state = generateRandomString(16);
  const queryParams = queryString.stringify({
    response_type: 'code',
    client_id: import.meta.env.VITE_CLIENT_ID,
    scope: 'user-read-private user-read-email',
    redirect_uri: 'http://localhost:5173/callback',
    state: state,
    show_dialog: true,
  })

  window.location.href = `https://accounts.spotify.com/authorize?${queryParams}`
  console.log(`https://accounts.spotify.com/authorize?${queryParams}`)
}

const LandingPage = () => {
  return (
    <div>
      <Layout handleLogin={handleLogin} />
      <BeforeLogin />
    </div>
  )
}

export default LandingPage
