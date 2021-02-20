const images = document.querySelectorAll('.grid__img');
const containerImages = document.querySelector('.grid__content');
const imageContainer = document.querySelector('.grid__img-show');
const copy = document.querySelector('.grid__copy');
const closeModal = document.querySelector('.fas.fa-times-circle');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'));
    })
})

const addImage = (srcImage, altImage)=>{
    containerImages.classList.toggle('mover');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
}

closeModal.addEventListener('click', ()=>{
    containerImages.classList.toggle('mover');
    imageContainer.classList.toggle('show');
})