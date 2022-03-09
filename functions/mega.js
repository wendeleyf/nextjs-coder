export function megaSena(qtde = 6, numeros = []){
  if(qtde < 6 && qtde > 60){
    throw "Quantidade é inválida!";
  }

  // Condição de parada para verificar se o array foi preenchido com
  // a quantidade definida
  if(numeros.length === qtde){
    return numeros.sort((n1,n2) => n1-n2);
  }

  const numeroAleatorio = parseInt(Math.random() * 60) + 1
  if(!numeros.includes(numeroAleatorio)){
    return megaSena(qtde, [...numeros, numeroAleatorio])
  }else{
    return megaSena(qtde, numeros);
  }
}
