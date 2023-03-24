const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');


const agregarTarea = (tarea) => {
    const elemento = `  
    <li id="#elemento" ><i class="far fa-circle co" data="realizado" id="0"></i>
                        <p class="text line-through ">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado"></i>  </li>`
    lista.insertAdjacentHTML("beforeend", elemento)
}

botonEnter.addEventListener('click', () => {
    const tarea = input.value;
    tarea && agregarTarea(tarea)
    input.value = ""

})

document.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        const tarea = input.value;

        tarea && agregarTarea(tarea)
        input.value = ""
    }
})