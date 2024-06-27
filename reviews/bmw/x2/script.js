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



const link = encodeURI(window.location.href); const msg = encodeURIComponent('Hey, I found this article'); const title = encodeURIComponent('Article or Post Title Here'); const fb = document.querySelector('.facebook'); fb.href = `https://www.facebook.com/share.php?u=${link}`; const twitter = document.querySelector('.twitter'); twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`; const linkedIn = document.querySelector('.linkedin'); linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`; const reddit = document.querySelector('.reddit'); reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`; const whatsapp = document.querySelector('.whatsapp'); whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`; const telegram = document.querySelector('.telegram'); telegram.href = `https://telegram.me/share/url?url=${link}&text=${msg}`;

