import { createPostFeed } from "../postFeed.mjs";
import { retrievingPostData } from "../feed.mjs";

// Setting const for data to use in the filter
const postArray = await retrievingPostData();

export function filterButtonListener() {
  const allButtons = document.querySelectorAll("[data-filter]");
  allButtons.forEach(function (btn) {
    btn.addEventListener("click", async (e) => {
      const value = e.currentTarget.dataset.filter;
      const filteredData = filteringData(value);
      // console.log(filteredData);
      const postFeed = document.getElementById("post-feed");
      postFeed.innerHTML = "";
      const newFeed = createPostFeed(filteredData);
      postFeed.append(newFeed);
    });
  });
}

/**
 *
 * @param {*} value This is sett by switch case
 * @returns sorted or default array. Depending on witch button that is clicked.
 */
function filteringData(value) {
  // Fetching the data
  const defaultArray = postArray;
  let sortedArray = [];

  switch (value) {
    default:
      defaultArray;
      break;

    case "sort_date":
      sortedArray = postArray.sort(sortByDate);
      break;

    case "A_zSort":
      sortedArray = postArray.sort(sortByAtoZ);
      break;

    case "Z_aSort":
      sortedArray = postArray.sort(sortByZtoA);
      break;

    case "all":
      sortedArray = postArray;
      break;
  }

  return sortedArray;
}

/**
 * Simple sorting function
 *
 * @param {*} a
 * @param {*} b
 * @returns filtered array
 */
function sortByDate(a, b) {
  return new Date(a.posted) < new Date(b.posted);
}

/**
 * Simple sorting function
 *
 * @param {*} a
 * @param {*} b
 * @returns filtered array
 */
function sortByAtoZ(a, b) {
  return a.authorName > b.authorName;
}

/**
 * Simple sorting function
 *
 * @param {*} a
 * @param {*} b
 * @returns filtered array
 */
function sortByZtoA(a, b) {
  return a.authorName < b.authorName;
}
