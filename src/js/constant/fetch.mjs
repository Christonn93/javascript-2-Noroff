/**
 *
 * Fetch data from the API.
 *
 * @param {*} url Pass in the url and endpoint you want to fetch
 * @param {*} method Pass in the method you want to use for the fetch. "GET", "PUT", "POST", "DELETE"
 * @param {*} token  This one will be loaded from localstorage. You can save it as a variable and use that variable to call or just add "localStorage.getItem("name-of-the-key")" to retrieve the value.
 * @param {*} data Here you will add the information to pass to stringify in the body of the call. Create a variable, make a object and pass in the object name.
 */

export async function fetchApi(url, method, token, data) {
  try {
    const fetchOptions = {
      method,
      headers: {},
    };

    // Adding this to header if the method is set to POST
    if (method === "POST") {
      fetchOptions.body = JSON.stringify(data);
      fetchOptions.headers["Content-Type"] = "application/json";
    }

    // Adding this to header if the method is set to GET
    if (method === "GET") {
      fetchOptions.headers["Content-Type"] = "application/json";
    }

    // Adding this to header if the method is set to DELETE
    if (method === "DELETE") {
      fetchOptions.headers["Content-Type"] = "application/json";
    }

    // Adding this to header if the method is set to PUT
    if (method === "PUT") {
      fetchOptions.body = JSON.stringify(data);
      fetchOptions.headers["Content-Type"] = "application/json; charset=UTF-8";
    }

    // Adding this to the header if the token is asked for
    if (token) {
      fetchOptions.headers["Authorization"] = `Bearer ${token}`;
    }

    // Sending the request to the API
    const request = await fetch(url, fetchOptions);
    const response = await request.json();
    // Doing this if the response comes back with a with a Access token

    if (response.accessToken) {
      // Creating a shorter const for saving in local storage
      const i = response;

      // Storing response in local storage
      localStorage.setItem("token", i.accessToken);
      localStorage.setItem("username", i.name);
      localStorage.setItem("email", i.email);
      localStorage.setItem("avatar", i.avatar);
    }

    // Returning the response
    return response;
  } catch (error) {
    // If there is some issue with the request this message will display for the user
    console.log("Oh no!!", error.message);
  }
}
