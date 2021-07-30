const bloque = document.querySelectorAll('.bloque');
const h3 = document.querySelectorAll('.entrada')

h3.forEach( ( cadaH3, i ) => {
    h3[i].addEventListener('click', ()=>{
        bloque.forEach( ( cadaBloque, i) => {
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    })
})