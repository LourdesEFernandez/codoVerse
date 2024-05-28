d.addEventListener('DOMContentLoaded', () => {
    const
        new_account = get("#form-new-account"),
        log_in = get("#form-log-in"),
        modal = get("div#container-modal"),
        btn_login = get("#login"),
        btn_account = get("#account"),
        clasName = "active"
    
    btn_account.addEventListener("click", ()=> {
        setForm(btn_login, btn_account, "none", "flex")
    })

    btn_login.addEventListener("click", ()=>{
        setForm(btn_account, btn_login, "flex", "none")
    })

    function setForm (classremove, classadd, display1, display2){
        classadd.classList.add(clasName)
        classremove.classList.remove(clasName)
        log_in.style.display = display1
        modal.style.display = display1
        new_account.style.display = display2
    }
})