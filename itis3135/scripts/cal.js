

class Calculator{

constructor(previousOperationTextELement, currentOperationTextElement){

this.previousOperationTextELement = previousOperationTextELement
this.currentOperationTextElement = currentOperationTextElement
this.clear()

    }

clear(){

    this.current = ''
    this.previous = ''
    this.operation = undefined

}

delete(){



}

addNumber(number){

this.current = number
console.log(this.current)

}

pickOperation(operation){




}

calculate(){




}

refreshDisplay(){


this.currentOperationTextElement.innerText = this.current
}


}





const numbersButton = document.querySelectorAll('[data-number]')

const operationsButton = document.querySelectorAll('[data-opertation]')

const equalsButton = document.querySelector('[data-equals]')

const deleteButton = document.querySelector('[data-delete]')

const clearButton = document.querySelector('[data-clear]')

const previousOperationTextELement = document.querySelector('[data-previous]')

const currentOperationTextElement = document.querySelector('[data-current]')

const cal = new Calculator(previousOperationTextELement ,currentOperationTextElement)

numbersButton.forEach(button =>{
    button.addEventListener('click' , () =>{
    cal.addNumber(button.innerText)
    cal.refreshDisplay()

    })
})

