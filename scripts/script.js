//O DOMContentLoaded é um evento que dispara quando o conteúdo DOM é carregado,
//sem esperar que as imagens e folhas de estilo terminem de carregar.
document.addEventListener("DOMContentLoaded", function () {
  //Operação anterior
  const previousOperationText = document.querySelector("#previous-operation");

  //Operação atual
  const currentOperationText = document.querySelector("#current-operation");

  //Botoes
  const buttons = document.querySelectorAll("#buttons-container button");
  console.log(buttons);


  /* LOGICA DA APLICAÇÃO*/
  class Calc {
    constructor(previousOperationText, currentOperationText) {
      this.previousOperationText = previousOperationText;
      this.currentOperationText = currentOperationText;
      this.currentOperation = "";
    }
  // mostrando os digitos no visor
  addDigit(digit){
// Checando se a operação ja tem ponto
    if(digit === "." && this.currentOperationText.innerText.includes(".")){
      return;
    };

   this.currentOperation = digit
   this.updateScreen()
  };

// Processos de operação na calculadora
processOperation(operation){
  // verifique o valor atual está vazia
  if(this.currentOperationText.innerText === "" && operation !== "C"){
    // mudança de operação
    if(this.previousOperationText.innerText !== ""){
    this.changeOperation(operation);
}    
  return;
}

//obter valor atual e anterior
 let operationValue;
 const previous = +this.previousOperationText.innerText.split(" ")[0];
 const current = +this.currentOperationText.innerText;

  // switch() verifica a operação
 switch(operation){
  case "+":
    operationValue = previous + current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "-":
    operationValue = previous - current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "/":
    operationValue = previous / current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "*":
    operationValue = previous * current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
  case "DEL":
   this.processDelOperator();
   break;
  case "CE":
   this.processClearCurrentOperation();
   break;
  case "C":
   this.processClearAllOperation(); 
   break;
  case "=":
   this.processEqualOperator();
   break;      
    default:
      return;
 }
}
// mudando valores na tela da caulculadora 
updateScreen(
  operationValue = null, 
  operation = null,
  current = null, 
  previous = null
  ){
   
  if(operationValue === null){
      this.currentOperationText.innerText += this.currentOperation;
  }else{
//verifique se o valor é zero, se apenas adicionar o valor atual
    if (previous === 0) {
      operationValue = current;
    }
//adicionar valor atual ao anterior
    this.previousOperationText.innerText = `${operationValue} ${operation}`;
    this.currentOperationText.innerText = "";
    }
  }

// mudando a operação matematica
changeOperation(operation) {
   const mathOperations = ["+", "-", "*", "/"]
    if(!mathOperations.includes(operation)){
      return;
     }

     this.previousOperationText.innerText.innerText = 
     this.previousOperationText.innerText.slice(0,-1) + operation;
    }

//  deletando o ultimo digito   
    processDelOperator() {
      this.currentOperationText.innerText =
      this.currentOperationText.innerText.slice(0, -1);
    }

// limpando a operação atual    
    processClearCurrentOperation(){
      this.currentOperationText.innerText = "";
    }

// limpando todas as operações
    processClearAllOperation(){
      this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
    }

// operação e processo
processEqualOperator() {
  let operation = this.previousOperationText.innerText.split(" ")[1];

  this.processOperation(operation);
  }
} 

const calc = new Calc(previousOperationText, currentOperationText);

/* EVENTOS DOS BOTÕES */
buttons.forEach((btn) => {

  //receber os valores dos botões
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    }else{
      calc.processOperation(value);
    }
  });

}); 

});
