d.addEventListener("DOMContentLoaded",()=>{
    const
        form_log_in = get("#form-log-in"),
        form_new_account = get("#form-new-account"),
        inputs_login = get("#form-log-in input",1),
        inputs_new_account = get("#form-new-account input",1),
        p = set("p"),
        invalid = '1px solid #d33',
        valid = '1px solid #3c6'
    let equal
    let element_null
    
    const validateFields = (element) => {
        if(element.id != "confirm-password"){
            let expression;
            switch (element.id){
                case "user":
                    expression = /^\w{3,20}$/
                    break;
                case "email":
                    expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                    break;
                case "password":
                    expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                    break;
                case "new-user":
                    expression = /^\w{3,20}$/
                    break;
                case "new-email":
                    expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                    break;
                case "new-password":
                    expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                    break;
            }
            return expression.test(element.value);
        }else {
            passwd = get("#new-password")
            if(element.value === passwd.value){
                equal = true
            }else{
                equal = false
            }
            return equal
        }
    }
    // mensaje de error
    const errorMessage = (message, form) => {
        p.classList.add("error-message")
        p.innerHTML = `${message}`
        set(p,form)
    }
    // buscar campos vacios
    function checkValue(listinputs) {
        listinputs.forEach(input => {
            input.value === "" ? element_null = true : element_null = false
        })
        return element_null
    }
    // validar formulario
    function validate(form) {
        form.addEventListener('input', (e) => {
            validateFields(e.target) ?
            e.target.style.border = valid :
            e.target.style.border = invalid
        })
    }

    function newAccountValidate() {
        validate(form_new_account)
        form_new_account.addEventListener('submit', (e) => {
            e.preventDefault()
            p.innerHTML = ""
            checkValue(inputs_new_account)
            if(element_null != false){
                for(input of inputs_new_account){
                    if(input.value === ""){
                        input.style.border = invalid
                    }
                }
                return errorMessage("¡Completa todos los campos!",form_new_account)
            }else {
                for(input of inputs_new_account){
                    input.value = ""
                    input.style.border = "none"
                }
                p.classList.remove("error-message")
                p.classList.add("msg-submit")
                p.innerHTML = "¡Formulario enviado correctamente!",
                set(p,form_new_account)
            }
        })
    }

    function logInValidate() {
        // validacion iniciar sesión
        validate(form_log_in)
        // e significa evento, funcion del boton enviar
        form_log_in.addEventListener('submit', (e) => {
            e.preventDefault()
            p.innerHTML = ""
            checkValue(inputs_login)
            if(element_null != false){
                for(input of inputs_login){
                    if(input.value == ""){
                        input.style.border = invalid
                    }
                }
                return errorMessage("¡Completa todos los campos!",form_log_in)
            }else {
                for(input of inputs_login){
                    input.style.border = invalid
                }
                return errorMessage("¡Este usuario no se encuentra en la base de datos!", form_log_in)
            }
        })
    }
    
    logInValidate()
    newAccountValidate()
})