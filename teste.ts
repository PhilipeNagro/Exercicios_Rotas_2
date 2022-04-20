// TIPAGEM typescript

// --- Genericos
// string
// number -> int e float
// boolean -> true false
// array -> []  lista  array<number> == só recebe number
// object -> {} 
// void -> é tipo vazio
// null -> é do tipo nao existe
// undefined -> indefinido / lixo de memoria
// function -> tipo função arrow function
// enum -> objeto estatico  

// --- complexos
// interface -> é um objeto {} bem definido
// types -> é uma interface, com algumas diferenças 
// class -> 

// --- genericos
// any-> fala q é qualquer coisa, pode ser qualquer outro tipo
// tuple -> array de dois tipo, ele tem dois elementos 
// Record -> 
// never -> Tipo nunca, 




let myname:string | number = "joao";
myname = "jubileu";

interface InterfaceUser {
    name:string,
    idade:number,
    endereco?: string
}

const user:InterfaceUser = {
    name:"lucas",
    idade: 22
}

user.name = "blabla";

function pular(qtd:number): string{
    return "pular"+qtd;
}

// Tipando o tipo InterfaceBanco com InterfaceCliente
interface InterfaceClient{

    nome:string
    hasHistory:boolean
}

interface InterfaceBanco{
    saldo:number,
    senha:string,
    client: InterfaceClient
}


const client2:InterfaceBanco={
    saldo:123123,
    senha:"PHRei",
    client: {
        nome:"jubilibes",
        hasHistory:false
    }
}



//Operação
interface ICarta{
    selo:true, //obriga ser true
    remente:"Lucas",  // obriga a ser lucas
    dados:string  // pode ser qualquer string
}

const carta:ICarta={
    selo:true, 
    remente:"Lucas",
    dados:"aaaa"
}


interface IPassaro{
    assas:2,
    voa: boolean
}
interface IFalante extends IPassaro{
    fala:boolean
}
interface IColor extends IFalante{
    cor:"azul"
}
const passarinho:IPassaro={
    assas:2,
    voa:true
}

const periquito: IFalante={
    assas:2,
    voa:true,
    fala:true
}

const papagaio:IColor={
    assas:2,
    voa:true,
    fala:true,
    cor: "azul"
}

// interface ICarRed{
//     cor: "vermelho"
// }
// interface ICarBlue{
//     cor:"azul"
// }
// const gol:ICarRed | ICarBlue ={
//     cor:"vermelho"
// }

interface IColorCar{
    cor: "vermelho" | "azul"
}
const gol:IColorCar={
    cor:"azul"
}

interface ICpf{
    cpf:string | number
}

const cpf:ICpf = {
    cpf: "1234"
}

cpf.cpf= 2222;

const listaCpf:Array<ICpf> = [cpf, {cpf:"123"},{cpf:4444}];
const listaCpf2:ICpf[] = [cpf, {cpf:"123"},{cpf:4444}];

interface IJogo{
    vida:number,
    perderVida: (qtd:number)=>number,
    ganharVida(qtd:number):number
}
const jogo:IJogo = {
    vida:100,
    perderVida:(qtd)=>{
        jogo.vida = jogo.vida-qtd
        return jogo.vida;
    },
    ganharVida(qtd){
        jogo.vida= jogo.vida+qtd;
        return jogo.vida
    }
}

jogo.perderVida(2);
jogo.ganharVida(200);
// console.log(jogo.vida);

// console.log("rodando :3"); 