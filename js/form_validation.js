d.addEventListener("DOMContentLoaded",()=>{
    const
        form_login = get("#form-login"),
        form_new_account = get("#form-account"),
        inputs_login = get("#form-login input",1),
        inputs_new_account = get("#form-account input",1)

    const btn_icon = get(".eye-icon");
    let visible = false
    btn_icon.addEventListener("click", () => {
        const
            icon_eye = get(".eye-icon i.fa-regular"),
            password_input = get("#password"),
            t = "type",
            c1 = "fa-eye",
            c2 = "fa-eye-slash"
            
        if(!visible){
                password_input.setAttribute(t,"password")
                icon_eye.classList.replace(c1, c2)
                visible = true
            } else{
                password_input.setAttribute(t,"text")
                icon_eye.classList.replace(c2, c1)
                visible = false
            }
            
        })

        const validateForm = (element) => {
            let expression;
            const p = get("#password"),
                pp = get("#password-two")

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
                case "password-two": (pp.value == p.value)
                break;
            }
            return expression.test(element.value);
        }

    d.addEventListener('input', (e) => {
        validateForm(e.target) ?
        e.target.style.border = '1px solid #3c6' :
        e.target.style.border = '1px solid #d33'
    })

        // e significa evento
    form_login.addEventListener('submit', (e) => {
        e.preventDefault()
        alert("usuario no registrado")
    })

})