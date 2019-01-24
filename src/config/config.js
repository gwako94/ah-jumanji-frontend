const baseUrl = process.env.BASE_URL;

const config = {
  api: {
    loginUrl: baseUrl + '/api/users/login',
    emailReset: baseUrl + '/api/users/reset_password',
    emailResetConfirm: baseUrl + '/api/users/reset_password_confirm/',
    registerUrl: '/api/users/register',
    getArticlesUrl: baseUrl + '/api/articles/?page=1',
    endpointArticleLikes: baseUrl + '/api/articles/reactions/',
    articleCommentsUrl: baseUrl + '/api/articles/'
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY || 'random',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN
  }
};

export default config;
