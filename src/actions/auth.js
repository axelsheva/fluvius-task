export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const logout = () => {
  localStorage.removeItem('isAuthenticated');

  return { type: LOGOUT };
};

export const login = () => {
  localStorage.setItem('isAuthenticated', true);

  return { type: LOGIN };
};
