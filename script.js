class Calculator {
    constructor(previousOperandTextElement,currenteOperandTextElement )
    {
        this.previousOperandTextElement = previousOperandTextElement
        this.currenteOperandTextElement = currenteOperandTextElement
        this. clear()
    }
    clear() {
        this.currenteOperand=''
        this.previousOperand=''
        this.operation= undefined

    } 
    
     delete() {
    
    }
    
     appendNumber(number) {
    
    }
    
    chooseOperation(operation){

    }
    compute(){

    }

    updateDispaly(){

    }
    
}
 




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClaarButtons = document.querySelectorAll('[data-all-clear]')
const previouseOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currenteOperandTextElement = document.querySelectorAll('[data-current-operand]')
