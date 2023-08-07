export const BASE_URL = "https://norma.nomoreparties.space/api";
export const AUTH_URL = "https://norma.nomoreparties.space/api/auth";
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const accessTokenFromStorage = `Bearer ${localStorage.getItem(
  ACCESS_TOKEN
)}`;
export const refreshTokenFromStorage = localStorage.getItem(REFRESH_TOKEN);

export const checkRes = (data) => {
  return data.ok ? data.json() : data.json().then((err) => Promise.reject(err));
};

export const refreshToken = async () => {
  return fetch(`${AUTH_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem(REFRESH_TOKEN),
    }),
  }).then((res) => console.log(res));
};

export const fetchWithRefresh = async (url, options) => {
  try {
    return fetch(url, options).then((data) => {
      return checkRes(data);
    });
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.ok) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem(ACCESS_TOKEN, refreshData.accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshData.refreshToken);
      options.headers.authorization = refreshData.refreshToken;
      const res = await fetch(url, options);
      res.then((data) => {
        return checkRes(data);
      });
    } else {
      return Promise.reject(err);
    }
  }
};
