


const numbersChoice = document.querySelectorAll('[data-number]')

const operationsChoice = document.querySelectorAll('[data-opertation]')

const equalsChoice = document.querySelector('[data-equals]')

const deleteChoice = document.querySelector('[data-equals]')

const clearChoice = document.querySelector('[data-clear-op]')

const previousChoice = document.querySelector('[data-previous-op]')

const currentChoice = document.querySelector('[data-current-op]')



class cal{constructor(previousChoice, currentChoice){

this.previousChoice = previousChoice;
this.currentChoice = currentChoice;
this.clear();



}

const calculator = new cal(previousChoice, currentChoice)
















clear(){

    this.currentOp = ''
    this.previousOP = ''
    this.operation = undefined


    const calculator = new cal(previousChoice, currentChoice)
}

delete(){



}

append(number){


if(number === '.' && this.currentOp.includes('.'))

return
this.currentOp = this.currentOp.toString() + number.toString()






}

chooseOp(){


}


compute(){


}


refreshDisplay(){

    this.currentChoice.innerText = this.currentOp

}


}


numbersChoice.forEach(button => {
    button.addEventListener('click' , () => {
    cal.append(button.innerText)
    cal.refreshDisplay()

    })
})


