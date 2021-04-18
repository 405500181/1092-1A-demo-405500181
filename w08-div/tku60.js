function changeVideo(index) {
  const video = document.querySelector('#video');
  console.log('video', video);
  switch (index) {
    case 1:
      video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 3:
      video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
}
function changeColor(index) {
  const p = document.querySelector('#section');
  switch (index) {
    case 1:
      p.style.backgroundColor = 'yellow';
      break;
    case 2:
      p.style.backgroundColor = 'white';
      break;
    case 3:
      p.style.backgroundColor = 'green';
      break;
  }
  
}
function changePicture(index) {
  const p = document.querySelector('#play')
  switch(index) {
      case 1:
        video.innerHTML ='<img src="image/img1.jpg">'
      break;
      case 2:
        video.innerHTML ='<img src="image/img2.jpg">'
      break;
      case 3:
        video.innerHTML ='<img src="image/img3.jpg">'
      break;
      case 4:
        video.innerHTML ='<img src="image/img4.jpg">'
      break;
      case 5:
        video.innerHTML ='<img src="image/img5.jpg">'
      break;
  }
}
