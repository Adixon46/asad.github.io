
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
if(number ==='.' && this.current.includes('.'))return
this.current = this.current.toString() + number.toString()
console.log(this.current)

}

pickOperation(operation){
if(this.currentOperation === '') return
if(this.previousOperation !== ''){

   this.calculate()

}
    this.operation = operation
    this.previous = this.current
    this.current = ''


}

calculate(){

let comp
const prev = parseFloat(this.previous)
const curr = parseFloat(this.current)

if(isNaN(prev) || isNaN(curr))return

switch(this.operation){

case '+':
    comp = prev + curr;
    break

case '-': 
    comp = prev - curr
    break

    case '*': 
    comp = prev * curr
    break

case '÷': 
    comp = prev / curr
    break
    
default:
     return
  
}

this.current = comp
this.operation = undefined 
this.previous = ''



}

refreshDisplay(){


this.currentOperation.innerText = this.current
this.previousOperation.innerText = this.previous

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

equalsButton.addEventListener('click' , button => {

cal.calculate()
cal.refreshDisplay()


})


clearButton.addEventListener('click' , button =>{

cal.clear()
refreshDisplay()

})