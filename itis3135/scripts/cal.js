
const numbersChoice = document.querySelectorAll('[data-number]')

const operationsChoice = document.querySelectorAll('[data-opertation]')

const equalsChoice = document.querySelector('[data-equals]')

const deleteChoice = document.querySelector('[data-equals]')

const clearChoice = document.querySelector('[data-clear-op]')

const previousChoice = document.querySelector('[data-previous-op]')

const currentChoice = document.querySelector('[data-current-op]')

const calculator = new cal(previousChoice, currentChoice)







class cal{constructor(previousChoice, currentChoice){

this.previousChoice = previousChoice;
this.currentChoice = currentChoice;
this.clear();

}













clear(){

    this.currentOp = ''
    this.previousOP = ''
    this.operation = undefined

}

delete(){



}

append(){
numbersChoice.forEach(button => {
button.addEventListener('click' , () => {
cal.append(button.innerText)
cal.refreshDisplay()



})

})


}

chooseOp(){


}


compute(){


}


refreshDisplay(){



}

}