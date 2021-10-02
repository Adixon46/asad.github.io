

class Calculator{

constructor(previousOperation,currentOperation){

this.previousOperation = previousOperation
this.currentOperation = currentOperation
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

this.currentOperation.innerText = this.current
}


}





const numbersButton = document.querySelectorAll('[data-number]')

const operationsButton = document.querySelectorAll('[data-opertation]')

const equalsButton = document.querySelector('[data-equals]')

const deleteButton = document.querySelector('[data-delete]')

const clearButton = document.querySelector('[data-clear]')

const previousOperation = document.querySelector('[data-previous]')

const currentOperation = document.querySelector('[data-current]')

const cal = new Calculator(previousOperation ,currentOperation)

numbersButton.forEach(button =>{
    button.addEventListener('click' , () =>{
    cal.addNumber(button.innerText)
    cal.refreshDisplay()

    })
})

