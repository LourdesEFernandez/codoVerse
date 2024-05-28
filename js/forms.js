d.addEventListener("DOMContentLoaded", function() {
    const
        btn_login = get("#login"),
        sectionForm = get("#container-form"),
        clasName = "active",
        btnSubmit = (label) => `<button type="submit" class="box-log text-log submit">${label}</button>`

    // funcion crear log in
    function createFormLogIn() {
        btn_login.classList.add(clasName)
        const
        div = set("div"),
        form = set("form")
        Object.assign(form, {
            id: 'form-log-in',
            classList: 'form-log'
        })
        Object.assign(div,{
            id: 'container-modal'
        })
        form.innerHTML += `
        <p class="text-log">Iniciar sesión con</p>
        ${contIcons()}
        <div id="separator">
            <span class="line-log"></span>
            <p id="sep-log" class="text-log">o</p> 
            <span class="line-log"></span>
        </div>
        ${contFields()}
        `
        div.innerHTML += ` ${modalRecoverAccount()} `
        set(form, sectionForm)
        set(div, sectionForm)
        
    }

    const contIcons = () => `
        <div id="icons-log">
        <i class="fa-brands fa-discord icon-log-r"></i> 
        <i class="fa-brands fa-google icon-log-r"></i> 
        <i class="fa-brands fa-instagram icon-log-r"></i> 
        <i class="fa-brands fa-facebook icon-log-r"></i>
    </div>`,

        contFields = () => `
            <div class="container-box-log">
            <label for="user">Usuario</label>
            <input id="user" class="box-log" type="text" placeholder="Mario887" required>
            <label for="password">Contraseña</label>
            <div class="d-flex">
            <input id="password" class="box-log w-100" type="password" placeholder="Contraseña" required>
            <div class="eye-icon">
                <i class="fa-regular fa-eye-slash"></i>
            </div>
            </div>
            ${btnSubmit("ingresar")}
        </div>`,

        modalRecoverAccount = () => {
            return `<button type="button" class="btn-header qst" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">¿Olvidaste la contraseña?</button>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Recuperación de cuenta</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Dirección de correo electrónico</label>
                        <input type="email" class="form-control" id="recipient-name">
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Enviar correo</button>
                </div>
                </div>
            </div>
            </div>`
        }

    // funcion formulario crear cuenta
    function createFormAccount() {
        const form = set("form")
        Object.assign(form, {
            id: 'form-new-account',
            classList: 'form-log'
        })
        form.innerHTML += `
        <div class="container-box-log">
        <label for="user">Usuario</label>
        <input id="user" class="box-log" type="text" placeholder="Mario887" required>
        <label for="email">Correo electrónico</label>
        <input id="email" class="box-log" type="email" placeholder="Email@email.com" required>
        <label for="password">Contraseña</label>
        <input id="password" class="box-log" type="password" placeholder="con7ras3ñAsegura." required>
        <label for="password-two">Repite la contraseña</label>
        <input id="password-two" class="box-log" type="password" placeholder="con7ras3ñAsegura." required>
        ${btnSubmit("Crear cuenta")}
        </div>`
        set(form, sectionForm)
    }

    createFormLogIn()
    createFormAccount()

})