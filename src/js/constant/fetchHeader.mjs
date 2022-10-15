export function headers(isJson = true) {
  const headers = {};
  const token = localStorage.getItem("token");

  if (isJson) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}
