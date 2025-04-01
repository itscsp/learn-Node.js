const axios = require("axios");

// axios.get("https://jsonplaceholder.typicode.com/users")
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

//Exercise: Modify it to fetch only user names instead of full objects.

const fetchUserNames = async () => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");

    // Extract only user names
    const userNames = users.data.map((user) => {
      return user.name;
    });
  } catch (error) {
    console.log("Error:".error);
  }
  console.log("User Names:", userNames);
};

fetchUserNames();
