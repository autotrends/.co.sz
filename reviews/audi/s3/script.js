let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function share(platform, url, text) {
  // Check if URL is defined and not empty
  if (!url) {
      // If url is undefined or empty, handle it accordingly
      alert('URL is undefined or empty');
      return;
  }

  switch(platform) {
      case 'facebook':
          window.open('https://www.facebook.com/sharer.php?u=' + encodeURIComponent(url), '_blank');
          break;
      case 'instagram':
          window.open('https://www.instagram.com/?url=' + encodeURIComponent(url), '_blank');
          break;
      case 'twitter':
          window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '_blank');
          break;
      case 'tiktok':
          window.open('https://www.tiktok.com/share?url=' + encodeURIComponent(url), '_blank');
          break;
      case 'youtube':
          window.open('https://www.youtube.com/share?url=' + encodeURIComponent(url), '_blank');
          break;
      case 'copy':
          navigator.clipboard.writeText(url).then(function() {
              alert('Link copied to clipboard');
          }, function() {
              alert('Failed to copy link');
          });
          break;
      default:
          alert('Unsupported platform');
          break;
  }
}





