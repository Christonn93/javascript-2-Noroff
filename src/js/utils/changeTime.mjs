/**
 *
 * This function will change the time stamp output from a API and turn it into the way you want it to be displayed.
 *
 * @param {*} date
 * @returns Returns the time format you set inside the function
 */
export function changeTimeFormat(date) {
  const apiDate = new Date(date);
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return apiDate.toLocaleDateString("en-us", option);
}
