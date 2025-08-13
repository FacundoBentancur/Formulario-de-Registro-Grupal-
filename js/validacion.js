function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let contra1 = document.getElementById("password1").value;
    let contra2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;
    
    if (
    nombre !== "" &&
    apellido !== "" &&
    email !== "" &&
    contra1.length >= 6 &&
    contra2 === contra1 &&
    terminos
) {
   showAlertSuccess(); 
} else {
    showAlertError();
    }
});