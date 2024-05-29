d.addEventListener("DOMContentLoaded",()=>{
    const
        form_log_in = get("#form-log-in"),
        form_new_account = get("#form-new-account"),
        inputs_login = get("#form-log-in input",1),
        inputs_new_account = get("#form-account input",1),
        p = set("p"),
        invalid = '1px solid #d33',
        valid = '1px solid #3c6'

    let element_null;
    
    const validateFields = (element) => {
        let expression;
            switch (element.id){
                case "user" || "new-user":
                    expression = /^\w{3,20}$/
                break;
                case "email" || "new-email":
                    expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                break;
                case "password" || "new-password":
                    expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                break;
                
            }
            return expression.test(element.value);
    }
    // mensaje de error
    const errorDataBase = (message) => {
        p.classList.add("error-message")
        p.innerHTML = `${message}`
        set(p,form_log_in)
    }
    // buscar campos vacios
    function checkValue() {
        inputs_login.forEach(input => {
            input.value === "" ? element_null = true : element_null = false
        })
        return element_null
    }

    function validate(form) {
        form.addEventListener('input', (e) => {
            validateFields(e.target) ?
            e.target.style.border = valid :
            e.target.style.border = invalid
        })
    }

    function logInValidate() {
        // validacion iniciar sesión
        validate(form_log_in)
        // e significa evento, funcion del boton enviar
        form_log_in.addEventListener('submit', (e) => {
            e.preventDefault()
            p.innerHTML = ""
            checkValue()
            if(element_null != false){
                for(input of inputs_login){
                    if(input.value == ""){
                        input.style.border = invalid
                    }
                }
                return errorDataBase("¡Completa todos los campos!")
            }else {
                for(input of inputs_login){
                    input.style.border = invalid
                }
                return errorDataBase("¡Este usuario no se encuentra en la base de datos!")
            }
        })
    }
    
    logInValidate()
})