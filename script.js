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
    checkForm()

})


function verifyFirstName(){
    if(inputFirstName.value === ""){
        const spanFirstName = document.getElementsByClassName('errorNameField1')[0]
        const formFieldFirstNameVerify = document.getElementsByClassName('formField')[0]
        formFieldFirstNameVerify.classList.add("formFieldError")
        inputFirstName.id = 'nameBorderError1';
        spanFirstName.classList.add('spanFlex')

    } else{
        const spanFirstName = document.getElementsByClassName('errorNameField1')[0]
        const formFieldFirstNameVerify = document.getElementsByClassName('formField')[0]
        formFieldFirstNameVerify.classList.remove("formFieldError")
        inputFirstName.id = ''
        spanFirstName.classList.remove('spanFlex')
    }
}

function verifyLastName(){
    if(inputLastName.value === ""){
        const spanLastName = document.getElementsByClassName('errorNameField2')[0]
        const formFieldSecondNameVerify = document.getElementsByClassName('formField')[0]
        formFieldSecondNameVerify.classList.add("formFieldError")
        inputLastName.id = 'nameBorderError2';
        spanLastName.classList.add('spanFlex')

    } else{
        const spanLastName = document.getElementsByClassName('errorNameField2')[0]
        const formFieldSecondNameVerify = document.getElementsByClassName('formField')[0]
        formFieldSecondNameVerify.classList.remove("formFieldError")
        inputLastName.id = ''
        spanLastName.classList.remove('spanFlex')
    }
}

function verifyEmail(){
    if(inputEmail.value === ""){
        const spanEmail = document.getElementsByClassName('errorEmailField')[0]
        const formFieldEmailVerify = document.getElementsByClassName('formField')[1]
        formFieldEmailVerify.classList.add("formFieldError")
        inputEmail.id = 'emailBorderError';
        spanEmail.classList.add('spanFlex')

    } else{
        const spanEmail = document.getElementsByClassName('errorEmailField')[0]
        const formFieldEmailVerify = document.getElementsByClassName('formField')[1]
        formFieldEmailVerify.classList.remove("formFieldError")
        inputEmail.id = ''
        spanEmail.classList.remove('spanFlex')
    }
}

function verifyRadios(){
    if(inputGeneral.checked == false && inputSupport.checked == false){
        const spanRadios= document.getElementsByClassName('errorRadioField')[0]
        const formFieldRadioVerify = document.getElementsByClassName('formField')[2]
        formFieldRadioVerify.classList.add("formFieldError")
        spanRadios.classList.add('spanFlex')
    } else{
        const spanRadios= document.getElementsByClassName('errorRadioField')[0]
        const formFieldRadioVerify = document.getElementsByClassName('formField')[2]
        formFieldRadioVerify.classList.remove("formFieldError")
        spanRadios.classList.remove('spanFlex')
    }
} 


function verifyMessage(){
    if(textareaMessage.value === ""){
        const spanMessage = document.getElementsByClassName('errorMessageField')[0]
        const formFieldMessageVerify = document.getElementsByClassName('formField')[3]
        formFieldMessageVerify.classList.add("formFieldError")
        textareaMessage.id = 'messsageBorderError';
        spanMessage.classList.add('spanFlex')

    } else{
        const spanMessage = document.getElementsByClassName('errorMessageField')[0]
        const formFieldMessageVerify = document.getElementsByClassName('formField')[3]
        formFieldMessageVerify.classList.remove("formFieldError")
        textareaMessage.id = ''
        spanMessage.classList.remove('spanFlex')
    }
}

function verifyCheckbox(){
    if(inputCheckbox.checked == false){
        const spanCheckbox = document.getElementsByClassName('errorCheckboxField')[0]
        const buttonStyle = document.getElementsByTagName('button')[0]
        const formFieldCheckboxVerify = document.getElementsByClassName('formField')[4]
        formFieldCheckboxVerify.classList.add('formFieldError')
        buttonStyle.style.marginTop = '15px'
        spanCheckbox.classList.add('spanFlex')

    } else{
        const spanCheckbox = document.getElementsByClassName('errorCheckboxField')[0]
        const formFieldCheckboxVerify = document.getElementsByClassName('formField')[4]
        formFieldCheckboxVerify.classList.remove('formFieldError')
        spanCheckbox.classList.remove('spanFlex')
    }
}

function checkForm(){
    verifyFirstName()
    verifyLastName()
    verifyEmail()
    verifyRadios()
    verifyMessage()
    verifyCheckbox()

    const formItems = form.querySelectorAll(".formField")
    const isValid = [...formItems].every((item) =>{
        return item.className === "formField"
    })
    if(isValid){
        const sucessMessage = document.getElementsByClassName('sucessMessage')[0]
        sucessMessage.classList.add('MessageAppear')
        setTimeout( ()=>{
            sucessMessage.classList.remove('MessageAppear')
        },3000)
    }
}









