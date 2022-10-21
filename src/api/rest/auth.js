import { makeRequest } from '../requests'
import env from '../../../env'

export const getTokenByCode = (code, clientId = env.clientId, clientSecret = env.clientSecret) => makeRequest({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'post',
  data: {
    code,
    clientId,
    clientSecret
  }
})

export const sendUserToAuthPage = () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'
  const githubAuthUrl = `${githubAuthApi}?client_id=${env.clientId}&scope=repo%20user`

  window.location.href = githubAuthUrl
}
