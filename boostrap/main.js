//tombol disable

//getElemenNamaId
//getElemenByClassName
//querySelector
//querySelectorAll


let InputEmail = document.querySelector(".email");
let InputPassword = document.querySelector(".Password");
let tombol = document.querySelector(".tombol");

tombol.disabled = true;

InputEmail.addEventListener("input", succes);
InputPassword.addEventListener("input",succes);

function succes(){
    if(InputEmail.value.length > 0 && InputPassword.value.length > 0){
        tombol.disabled = false;
    }else{
        tombol.disabled = true;
    }
}


//toogle password

const Password = document.querySelector(".Password");
const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", intip);

function intip(){
    //toogle type input
    const type = Password.getAttribute("type") === "Password" ? "text" : "Password";
    Password.setAttribute("type", type);

    //toogle icon
    togglePassword.classList.toggle("eye-slash");

}