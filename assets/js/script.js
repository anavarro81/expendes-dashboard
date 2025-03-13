


// Selecionamos todos los elementos del menu
const menuItems = document.querySelectorAll('.menu-items li');

console.log(menuItems);

// Se añade un eventListerner para desmarcar todos los activos y solo activarlo para 
// el elemento seleccionado. 
menuItems.forEach(item => {

    item.addEventListener("click", () => {
        menuItems.forEach(el => el.classList.remove('active'))
        item.classList.add('active')
    })

})


