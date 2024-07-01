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

const link = 'https://www.autotrendsz.com/reviews/bmw/m3-g80/';//encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent('Article or Post Title Here');

// Update existing social media sharing links
const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

// Add Instagram, TikTok, and YouTube sharing links
const instagram = document.querySelector('.instagram');
instagram.href = `https://www.instagram.com/share?url=${link}`;

const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = ` https://wa.me/?text=' + text + '%20' + url=${link}`;

//const tiktok = document.querySelector('.tiktok');
//tiktok.href = `https://www.tiktok.com/@username?u=${link}`;

//const youtube = document.querySelector('.youtube');
//youtube.href = `https://www.youtube.com/share?url=${link}`;

// Add copy link functionality
const copyLink = document.querySelector('.copy-link');

copyLink.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            alert('URL copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy URL: ', err);
        });
});




