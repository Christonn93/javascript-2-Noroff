import { API_SOCIAL_URL } from "../../constant/variables.mjs";
import { message } from "../../constant/message.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  console.log(action);
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);
  console.log(registerURL);

  const response = await fetch(registerURL, {
    headers: {
      "content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  message("success");

  console.log(result);
  return result;
}
