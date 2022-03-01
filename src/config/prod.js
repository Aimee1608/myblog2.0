const GITHUB_OAUTH = {
  url: 'https://github.com/login/oauth/authorize?client_id=7a79cb87ff58020bc1ff&state=blog',
  clientid: '7a79cb87ff58020bc1ff'
}
const WEIBO_OAUTH = {
  url: 'https://api.weibo.com/oauth2/authorize?client_id=1075586328&redirect_uri=https://mangoya.cn/v1/user/login&response_type=code&state=weibo_blog',
  clientid: '1075586328'
}
export default {
  GITHUB_OAUTH,
  WEIBO_OAUTH
}
