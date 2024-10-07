let lastScrollTop = 0;
let scrollProgress = document.getElementById("progress");

// Initially hide the progress bar
scrollProgress.style.display = "none";

let handleScroll = () => {
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

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
};

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Set the initial state when the page loads
window.addEventListener("load", handleScroll);

