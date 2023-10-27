document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");

    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        } else {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
    });

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        const loginEmail = document.querySelector("#loginForm [name='loginEmail']").value;
        const loginPassword = document.querySelector("#loginForm [name='loginPassword']").value;
        
        // Implemente a lógica de autenticação aqui
        // Vou usar um exemplo simples com credenciais estáticas
        const validEmail = "usuario@example.com";
        const validPassword = "senha123";
    
        if (loginEmail === validEmail && loginPassword === validPassword) {
            // Autenticação bem-sucedida, redirecione para a página desejada
            window.location.href = "crudflix.html";
        } else {
            // Credenciais inválidas, exiba uma mensagem de erro
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    });
    
    registerButton.addEventListener("click", function (event) {
        event.preventDefault();
        const registerName = document.querySelector("#registerForm [name='registerName']").value;
        const registerEmail = document.querySelector("#registerForm [name='registerEmail']").value;
        const registerPassword = document.querySelector("#registerForm [name='registerPassword']").value;
        // Implemente a lógica de registro aqui
        // Redirecione após o registro bem-sucedido: window.location.href = "crudflix.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");

    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        } else {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
    });

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        const loginEmail = document.querySelector("#loginForm [name='loginEmail']").value;
        const loginPassword = document.querySelector("#loginForm [name='loginPassword']").value;
        // Implemente a lógica de autenticação aqui
        // Redirecione após o login bem-sucedido: window.location.href = "crudflix.html";
    });

    registerButton.addEventListener("click", function (event) {
        event.preventDefault();
        const registerName = document.querySelector("#registerForm [name='registerName']").value;
        const registerEmail = document.querySelector("#registerForm [name='registerEmail']").value;
        const registerPassword = document.querySelector("#registerForm [name='registerPassword']").value;
        // Implemente a lógica de registro aqui
        // Redirecione após o registro bem-sucedido: window.location.href = "crudflix.html";
    });
});
