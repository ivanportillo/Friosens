const TOKEN_IDENTIFIER = /friosens_token/;
export const getToken = () => localStorage.getItem(TOKEN_IDENTIFIER);
export const setToken = token => localStorage.setItem(TOKEN_IDENTIFIER, token);
export const clearToken = () => localStorage.removeItem(TOKEN_IDENTIFIER);
