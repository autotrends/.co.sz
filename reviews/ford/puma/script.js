let lastScrollTop = 0;
let scrollProgress = document.getElementById("progress");
let hideTimeout;

// Initially hide the progress bar
scrollProgress.style.display = "none";

let handleScroll = () => {
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  // Clear any existing timeout
  clearTimeout(hideTimeout);

  // Determine scroll direction
  if (pos > lastScrollTop) {
    // Scrolling down, hide the progress bar
    scrollProgress.style.display = "none";
  } else {
    // Scrolling up, show the progress bar
    scrollProgress.style.display = "grid";
  }

  lastScrollTop = pos <= 0 ? 0 : pos; // Ensure lastScrollTop is never negative

  // Update the progress bar's background
  scrollProgress.style.background = `conic-gradient(#004d40 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

  // Set a timeout to hide the progress bar after 2 second of no scroll
  hideTimeout = setTimeout(() => {
    scrollProgress.style.display = "none";
  }, 2000);
};

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Set the initial state when the page loads
window.addEventListener("load", handleScroll);

// Add click event to the progress bar to scroll to the top of the page
scrollProgress.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
