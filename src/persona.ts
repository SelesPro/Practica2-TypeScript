// import { Mail } from './mail';
// import { Telefono } from './telefono';
//import{direccion} from "./direccion"

interface PersonaDatos{
    _id?:number;
    _nombre: string;
    _apellido: string;
    _edad: number;
    _dni: string;
    _cumple:string;
    _colorf: string;
    _genero: string;
    //_direccion:direccion[];
    // _mails: Mail[];
    // _telefonos: Telefono[];
    _nota: string;
}

interface Pergestion {
    personadata:ArrayList<PersonaDatos>,
    add(item:PersonaDatos):boolean,
    get(index:number):PersonaDatos|null,
    remove(id:number):boolean
}

class ArrayList<T>{

    private items:T[];
    

    constructor (){
       this.items = [];
    }

    add(item:T){
        this.items.push(item)
    }

    get(index: number):T|null{
        const item:T[] = this.items.filter( (x:T , i:number )=>{
            return i === index;
        });

        if(item.length === 0){
            return null;
        }else{
            return item[0];
        }

    }

    createFrom(value:T[]):void{
        this.items = [...value];
    }

    getAll():T[]{
        return this.items;
    }

}

class Persona implements Pergestion{
    personadata: ArrayList<PersonaDatos>;

    private count = 0;

    constructor(){
        this.personadata = new ArrayList<PersonaDatos>();
    }
    
    add(item: PersonaDatos): boolean {
       item._id = this.count;
       this.count++;
       this.personadata.add(item);
        return true;
    }
    get(index:number): PersonaDatos | null {
        return this.personadata.get(index)
    }
    getItems(): PersonaDatos[]{
        return this.personadata.getAll();
    }

    remove(id: number): boolean {
        const items = this.getItems().filter(item =>{
            return item._id != id;
        });
        this.personadata.createFrom(items);
        return true;
    }

  
}