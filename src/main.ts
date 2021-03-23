//import{Persona} from './persona'

const butadd    = document.querySelector('#butadd') as HTMLButtonElement;
const nombre    = document.querySelector('#nombre') as HTMLInputElement;
const edad  = document.querySelector('#edad')as HTMLInputElement;
const apellido = document.querySelector('#apellido') as HTMLInputElement;
const dni       = document.querySelector('#dni')as HTMLSelectElement;
const cumple       = document.querySelector('#cumple')as HTMLSelectElement;
const colorf       = document.querySelector('#colorf')as HTMLSelectElement;
const genero      = document.querySelector('#genero')as HTMLSelectElement;
const nota      = document.querySelector('#nota')as HTMLSelectElement;
const persondata = new Persona();

butadd!.addEventListener('click', e =>{
    if( nombre!.value != '' && apellido!.value != '' && edad!.value != '' && !isNaN(parseFloat(edad.value))){
        const nombres = nombre!.value;
        const apellidos = apellido!.value;
        const edades:number =parseFloat(edad!.value) ;
        const dnis = dni!.value;
        const cumples = cumple!.value;
        const colorfs = colorf!.value;
        const generos = genero!.value;
        const notas = nota!.value;
        persondata.add({ _nombre: nombres, _apellido:apellidos, _edad: edades, _dni:dnis, _cumple: cumples, _colorf:colorfs, _genero:generos, _nota:notas,});
        
        render();
    }else{
        alert('falta algo');
    }
});


function render(){
    let html = '';
    persondata.getItems().forEach(item =>{
        const {_id, _nombre,_apellido, _edad, _dni, _cumple, _colorf, _genero,_nota,} = item;
        html +=`
        <div class="item">
            <div><span class="pdata">${_nombre}</span></div>
            <div>${_apellido}</div>
            <div>${_edad}</div>
            <div>${_dni}</div>
            <div>${_cumple}</div>
            <div>${_colorf}</div>
            <div>${_genero}</div>
            <div>${_nota}</div>
            <div><button class="bEliminar" data-id="${_id}">Quitar</button><div>
            <div><button class="bModificar" data-id="${_id}">Modificar</button><div>
        </div>
        `;
    
    });
    console.log (apellido);

    $('#items').innerHTML = html;
    // $('#display').textContent = persondata.getAll();
    $$('.bEliminar').forEach(bEliminar => {
        bEliminar.addEventListener('click', e =>{
            const id = (e.target as HTMLButtonElement).getAttribute('data-id');
            persondata.remove(parseInt(id!));
            render();
        });
    })



}



function $(selector:string): HTMLElement{
    return document.querySelector(selector) as HTMLElement;

}

function $$(selector:string): NodeListOf<HTMLElement>{
    return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

}