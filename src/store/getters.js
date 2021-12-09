const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  username: (state) => state.user.username,
  userId: (state) => state.user.userId,
  role: (state) => state.user.role,
  userInfo: (state) => state.userInfo,
  status: (state) => state.user.status,
  activeCateList: (state) => state.common.activeCateList
}
export default getters
