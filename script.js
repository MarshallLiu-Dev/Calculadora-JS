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
  });
});

/* LOGICA DA APLICAÇÃO*/
class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;

    this.currentOperation = "";
  }
}
