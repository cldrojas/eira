export const getEntries = async (accessToken) => {
    console.log("Fetching");
    const url = "https://eira-api.herokuapp.com/entries";
    
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`
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