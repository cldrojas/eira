import { signIn, AccessToken} from "./store";

export const logIn = (email, password) => {
    console.log("Logging in . . .");
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

    fetch(url, options)
      .then((response) => response.json())
      .then((parsed) => {                
          signIn(parsed.data.accessToken);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  export const refreshToken = () => {
    console.log("Refreshing token . . .");
    const url = "https://eira-api.herokuapp.com/auth/refresh";
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${AccessToken}`
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((parsed) => {
        signIn(parsed.data.accessToken);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }