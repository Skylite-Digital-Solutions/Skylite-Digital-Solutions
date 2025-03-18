// AuthContext.js
export const AuthContext = React.createContext({
    isLoggedIn: false,
    userInfo: null,
    login: () => {},
    logout: () => {}
  });