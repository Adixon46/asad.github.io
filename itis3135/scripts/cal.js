

class Calculator{

constructor(previousOperationTextElement,currentOperationTextElement){

this.previousOperationTextElement = previousOperationTextElement
this.currentOperationTextElement = currentOperationTextElement
this.clear()

    }

clear(){

    this.currentOperation = ''
    this.previous1 = ''
    this.operation1 = undefined

}

delete(){



}

addNumber(number){

this.current = number;

}

pickOperation(operation){




}

calculate(){




}

refreshDisplay(){

this.currentOperationTextElement.innerText = this.currentOperation

}


}





const numbersButton = document.querySelectorAll('[data-number]')

const operationsButton = document.querySelectorAll('[data-opertation]')

const equalsButton = document.querySelector('[data-equals]')

const deleteButton = document.querySelector('[data-delete]')

const clearButton = document.querySelector('[data-clear]')

const previousOperationTextElement = document.querySelector('[data-previous]')

const currentOperationTextElement = document.querySelector('[data-current]')

const cal = new Calculator(previousOperationTextElement ,currentOperationTextElement)

numbersButton.forEach(button =>{
    button.addEventListener('click' , () =>{
    cal.addNumber(button.innerText)
    cal.refreshDisplay()
    })
})

