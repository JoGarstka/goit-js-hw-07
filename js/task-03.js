const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector('.gallery');

const title = document.createElement('h2');
title.textContent = 'GALLERY';
gallery.before(title);
title.style.color = "firebrick";
title.style.textAlign = "center";
  
for (const image of images) {
  const gallery = document.querySelector('.gallery');
  gallery.classList.add('item');
  const html = `<img src='${image.url}' alt='${image.alt}' height='300px' width='500px'> </img>
  <figcaption> ${image.alt} </figcaption>`;
  gallery.insertAdjacentHTML('beforeend', html);
  };

  
