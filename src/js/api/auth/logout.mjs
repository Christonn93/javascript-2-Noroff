/**
 *
 * This is a simple logout function with a event listener.
 * when button is clicked the user gets redirected to the login page and all items in localstorage is removed
 *
 */
export function logOut() {
  document.querySelector("#logout").addEventListener("click", (e) => {
    // Storing response in local storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");

    window.location.href = "../../index.html";
  });
}
