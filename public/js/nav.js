// Comando para abrir y cerrar el menu en RWD
const dropdownMenu = (slideId, contractId) => {
    const icon = document.getElementById(slideId),
        nav = document.getElementById(contractId)
    
    if (icon && nav) {
        icon.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

dropdownMenu('bar__icon', 'bar__nav')