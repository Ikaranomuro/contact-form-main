const inputFirstName = document.getElementsByClassName('firstName')[0]
const inputLastName = document.getElementsByClassName('secondName')[0]
const inputEmail = document.getElementsByClassName('email')[0]
const textareaMessage = document.getElementsByClassName('inputMessage')[0]
const inputCheckbox = document.getElementsByClassName('checkbox')[0]
const inputGeneral = document.getElementsByClassName('radioGeneralEnrquiry')[0]
const inputSupport = document.getElementsByClassName('radioSupportRequest')[0]
const form = document.getElementsByTagName('form')[0]

console.log(inputFirstName)
console.log(inputLastName)
console.log(form)



form.addEventListener('submit', (event)=>{
    event.preventDefault()
    verifyFirstName()
    verifyLastName()
    verifyEmail()
    verifyRadios()
    verifyMessage()
    verifyCheckbox()

})


function verifyFirstName(){
    if(inputFirstName.value === ""){
        const spanFirstName = document.getElementsByClassName('errorNameField1')[0]
        inputFirstName.id = 'nameBorderError1';
        spanFirstName.classList.add('spanFlex')

    } else{
        const spanFirstName = document.getElementsByClassName('errorNameField1')[0]
        inputFirstName.id = ''
        spanFirstName.classList.remove('spanFlex')
    }
}

function verifyLastName(){
    if(inputLastName.value === ""){
        const spanLastName = document.getElementsByClassName('errorNameField2')[0]
        inputLastName.id = 'nameBorderError2';
        spanLastName.classList.add('spanFlex')

    } else{
        const spanLastName = document.getElementsByClassName('errorNameField2')[0]
        inputLastName.id = ''
        spanLastName.classList.remove('spanFlex')
    }
}

function verifyEmail(){
    if(inputEmail.value === ""){
        const spanEmail = document.getElementsByClassName('errorEmailField')[0]
        inputEmail.id = 'emailBorderError';
        spanEmail.classList.add('spanFlex')

    } else{
        const spanEmail = document.getElementsByClassName('errorEmailField')[0]
        inputEmail.id = ''
        spanEmail.classList.remove('spanFlex')
    }
}

function verifyRadios(){
    if(inputGeneral.checked == false && inputSupport.checked == false){
        const spanRadios= document.getElementsByClassName('errorRadioField')[0]
        spanRadios.classList.add('spanFlex')
    } else{
        const spanRadios= document.getElementsByClassName('errorRadioField')[0]
        spanRadios.classList.remove('spanFlex')
    }
} 


function verifyMessage(){
    if(textareaMessage.value === ""){
        const spanMessage = document.getElementsByClassName('errorMessageField')[0]
        textareaMessage.id = 'messsageBorderError';
        spanMessage.classList.add('spanFlex')

    } else{
        const spanMessage = document.getElementsByClassName('errorMessageField')[0]
        textareaMessage.id = ''
        spanMessage.classList.remove('spanFlex')
    }
}

function verifyCheckbox(){
    if(inputCheckbox.checked == false){
        const spanCheckbox = document.getElementsByClassName('errorCheckboxField')[0]
        const buttonStyle = document.getElementsByTagName('button')[0]
        buttonStyle.style.marginTop = '15px'
        spanCheckbox.classList.add('spanFlex')

    } else{
        const spanCheckbox = document.getElementsByClassName('errorCheckboxField')[0]
        spanCheckbox.classList.remove('spanFlex')
    }
}
































// function loaded(){
 
//     const a = document.getElementById('paragraphRadio1')
//     const but = document.getElementsByTagName('button')[0]
//     a.style.backgroundColor = "Red"
//     but.addEventListener('click', changingElements)

//     function changingElements(){
//     const w = document.getElementsByClassName('wrapper')[0]
//     w.style.backgroundColor = "Red"
//     }


//     a.addEventListener('click', ativandoElemnt);
//     function ativandoElemnt(){
//         // const backgroundLabel = document.getElementsByClassName('take')[0]
//         // backgroundLabel.style.backgroundColor = "Red"

        
//     }
    
// }

   
