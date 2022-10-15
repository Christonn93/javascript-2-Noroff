// Loading div for each side
export function displayPageLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.innerHTML = `	<div class="container">
  <div class="spinner">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" />
      </svg>
  </div>
  <h1 class="title">loading...</h1>
</div>`;
  }
}
