

export const signIn = async (email, password) => {
  console.log("Loggin in . . .");
  const url = "https://eira-api.herokuapp.com/auth/login";
  
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: 'include'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const res = await fetch(url, options);
  const parsed = await res.json();
  return parsed.data;
    
};

export const refreshToken = () => {
  console.log("Refreshing token . . .");
  const url = "https://eira-api.herokuapp.com/auth/refresh";
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((parsed) => {
      saveToken(parsed.data.accessToken);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}