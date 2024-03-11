const imagenes = document.querySelectorAll('.img-galeria'),
      imagenesLight = document.querySelector('.agregar-imagen'),
      contenedorLight = document.querySelector('.image-light'),
    hamburguer1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        agregarImagen(imagen.getAttribute('src'))
    })
});

contenedorLight.addEventListener('click', (e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const agregarImagen = (imagen)=> {
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}