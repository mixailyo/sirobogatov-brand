function videoInit() {
  let videos = document.querySelectorAll('.video-wrapper')

  if (videos.length) {
    videos.forEach((video) => {
      video.addEventListener('click', () => {
        if (video.classList.contains('is-active')) {
          video.querySelector('.video').pause()
        } else {
          video.querySelector('.video').play()
        }

        video.classList.toggle('is-active');
      })
    })
  }
}

export { videoInit }