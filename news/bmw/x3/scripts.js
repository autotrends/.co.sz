 
  const shareButton = document.querySelector('.share-button');
if (navigator.share) {
  shareButton.addEventListener('click', (event) => {
    event.preventDefault();
    navigator.share({
      title: document.title,
      url: window.location.href
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
  });
} else {
  console.log('Web Share API not supported');
}
