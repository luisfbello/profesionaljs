/// tipos de datos typescript

let bool: boolean =true
bool=false

let num: number= 5
let num2: number =6

let nombre: string="estrella"

// arreglos

let numArray: number[]=[]
numArray=[1,2,3,4]
numArray.push(5)

let stringArray : string[]=[]

stringArray= ['hola','con','los']
stringArray.push('arrays')

// enum 

enum Color{
    rojo="rojo",
    amarillo="amarillo",
    azul="azul"
}


console.log(Color.rojo)

console.log("Hola typescript")


// tipo Any

let cualquiera: any=10
cualquiera={nombre:"luis"}


// tipo objeto

let variableObjeto: object={nombre:"luis"}


// tipar funciones 

function add(a:number,b:number): number{
    return a+b
}

const suma=add(4,5)

//funcion que retorna otra funcion

function createAdder(a:number):(number:number)=>number{
    return function (b:number) {
        return b+a
    }
}


// argumentos no obligatorios

function nameComplet(firstName:string,LastName?:string):string {

    return `${firstName} ${LastName}`
    
}

const persona=nameComplet('luis');


// argumentos por defecto
function nameComplet2(firstName:string,LastName:string="Doe"):string {

    return `${firstName} ${LastName}`
    
}

const persona2=nameComplet('luis');


const addFour=createAdder(4)
const fourSix=addFour(6)



/////////////////////// INTERFACES


interface Rectangulo {
    ancho: number,
    alto:number
    color?: Color
}

let rect: Rectangulo={
    ancho:5,
    alto:10,
    color: Color.azul
}

function area(r: Rectangulo):number{
    return r.alto * r.ancho
}

const areaRect=area(rect)
;

rect.toString = function() {
   return this.color?`Es un rectangulo ${this.color}`:`Es un rectangulo`
}


console.log(areaRect)

console.log(rect.toString())



