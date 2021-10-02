
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
if(this.current.includes('.') && number ==='.')return
this.current = this.current.toString() + number.toString()
console.log(this.current)

}

pickOperation(operation){
if(this.currentOperation === '') return
//if(this.previousOperation !== ''){

   // calculate()

//}
    this.operation = operation
    this.previous = this.current
    this.current = ''


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

const clearButton = document.querySelector('[data-clear-op]')

const previousOperation = document.querySelector('[data-previous-op]')

const currentOperation = document.querySelector('[data-current-op]')




const cal = new Calculator(previousOperation ,currentOperation)

numbersButton.forEach(button =>{
    button.addEventListener('click' , () =>{
    cal.addNumber(button.innerText)
    cal.refreshDisplay()

    })
})

operationsButton.forEach(button =>{
    button.addEventListener('click' , () =>{
    cal.pickOperation(button.innerText)
    cal.refreshDisplay()

    })
})
