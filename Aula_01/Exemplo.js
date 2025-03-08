/*console.log("olá ");

var animal = "Alefante";

console.log(animal);
console.log(typeof animal);


animal = "cachorro ";
console.log(animal);



//valor = 10;



var nomeCompleto = window.prompt("Nome:");
var idade = parseInt(window.prompt("Idade:"));

console.log(nomeCompleto);
console.log( idade);
console.log(typeof idade);

console.log(`Vo se chama: ${nomeCompleto} e tem ${idade} anos`);

console.log(5 == "5");//comparação

console.log(5 === "5");//estritamente igual

console.log(5 !== "5");

console.log(valor);*/

var linhas = parseInt(window.prompt("Valor:"));
 
for (let i = 1; i<= linhas ; i++) {
    let linha = ''
    for (let j = 1; j<=i; j++) {

       linha  += '*';

    }
    console.log(linha);
   

  }
