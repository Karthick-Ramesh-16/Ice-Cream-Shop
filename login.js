function login() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    sessionStorage.setItem("name", name.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("password", password.value);
}
