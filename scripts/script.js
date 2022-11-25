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

  /* EVENTOS DOS BOTÕES */
  buttons.forEach((btn) => {

    //receber os valores dos botões
    btn.addEventListener("click", (e) => {
      const value = e.target.innerText;
      console.log(value);

// numeros 
      if (+value >= 0 || value === "."){
        calc.addDigit(value);
      }else{
        calc.processOperation(value);
      }

    });
  });

  /* LOGICA DA APLICAÇÃO*/
  class Calculator {
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

//obter valor atual e anterior
 let operationValue;
 const previous = +this.previousOperationText.innerText;
 const current = +this.currentOperationText.innerText;

// switch() verifica a operação
 switch(operation){
  case "+":
    operationValue = previous + current;
    this.updateScreen(operationValue, operation, current, previous);
    break;
    default:
      return;
 }

}
// mudando valores na tela da caulculadora 
updateScreen(operationValue = null, operation = null, previous = null){ 

  console.log(operationValue, operation, current, previous);
   
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
}
});

const calc = new Calculator(previousOperationText, currentOperationText);
