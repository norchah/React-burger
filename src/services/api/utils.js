export const BASE_URL = "https://norma.nomoreparties.space/api";
export const AUTH_URL = "https://norma.nomoreparties.space/api/auth";
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const accessTokenFromStorage = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
export const refreshTokenFromStorage = localStorage.getItem(REFRESH_TOKEN);


export const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = async () => {
  console.log(refreshTokenFromStorage);
  return fetch(`${AUTH_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshTokenFromStorage,
    }),
  }).then(checkRes);
};