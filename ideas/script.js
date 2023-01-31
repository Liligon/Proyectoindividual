let listaTareas = []


let editando = false;


$(`#btnAgregar`).on('click', function () {
     if ($(`#Tarea`).val() === '' || $(`#Descripcion`).val() === '') {
        alert('Campos Obligatorios');
    }
    else {
        let objetoTarea = {

            tarea: '',
            descripcion: '',

        }
        objetoTarea.tarea = $(`#Tarea`).val()
        objetoTarea.descripcion = $(`#Descripcion`).val()

        listaTareas.push(objetoTarea);

        console.log(listaTareas);

        mostrarTarea();
    }
} 
);


function mostrarTarea() {

    let divTarea = document.querySelector('.div-tareas');
    $(`.ideas`).remove();
    

    var i= 0;

    listaTareas.forEach(Element => {


        let parrafo = document.createElement('p');
        parrafo.textContent = "Titulo: " + Element.tarea + "\nDescripcion: "+ Element.descripcion ;
        divTarea.appendChild(parrafo);
        parrafo.setAttribute(`id`,i)
        parrafo.className= "ideas"

        let editarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarTarea (tarea);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        let eliminarBoton = document.createElement('button');
        //eliminarBoton.onclick = () => eliminarTarea (id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

       i++

    })


}



