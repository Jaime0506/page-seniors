import Pushbar from "./pushbar/pushbar.js";

const pushbar = new Pushbar({
    blur: true,
    overlay: true,
})

//DIMENSSIONS PAGE SECTIONS

const heightWindows = window.innerHeight - 60;

document.getElementById("content-firsPage").style.height = heightWindows + 60 + "px";
document.getElementById("firstPageID").style.height = heightWindows + 60 + "px";

document.getElementById("content-secondPage").style.height = heightWindows + "px";
document.getElementById("secondPage").style.height = heightWindows + "px";

document.getElementById("content-threePage").style.height = heightWindows + "px";
document.getElementById("threePage").style.height = heightWindows + "px";

document.getElementById("content-fourPage").style.height = heightWindows  + "px";
document.getElementById("fourPage").style.height = heightWindows  + "px";

//PUSHBAR OPEN

document.querySelector(".btn-menu").addEventListener("click", () => {
    pushbar.open("menu");
});

//PUSHBAR CLOSE

document.querySelector(".imageExit").addEventListener("click", () => {
    pushbar.close();
});

//CARDS

const cardNurse = document.querySelector(".nurse");
const cardBoss = document.querySelector(".boss");
const cardDoctor = document.querySelector(".doctor");

//MODALS OPTIONS

const buttonCloseModal = document.getElementById("closeModal");
const modal = document.getElementById("containerModal"); 

const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");

//CLOSE MODAL

buttonCloseModal.addEventListener("click", function () {
    modal.classList.remove("showModal");
    modal.style.pointerEvents = "none";
});

//WHATSAPP API

const buttonWhatsapp = document.querySelector(".buttonWhatsapp");

buttonWhatsapp.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=+571234567890&text=Hola!%20Quisiera%20Obtener%20Mas%20Informacion");
});

//PUSHBAR FUNCTIONS SCROLL

document.querySelector(".rInicio").addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    pushbar.close();
});

document.querySelector(".rFuncion").addEventListener("click", () => {
    window.scroll({
        top: heightWindows,
        left: 0,
        behavior: "smooth",
    });
    pushbar.close();
});

document.querySelector(".rEquipo").addEventListener("click", () => {
    window.scroll({
        top: heightWindows * 2,
        left: 0,
        behavior: "smooth",
    });
    pushbar.close();
});

document.querySelector(".rUbicacion").addEventListener("click", () => {
    window.scroll({
        top: heightWindows * 3,
        left: 0,
        behavior: "smooth",
    });
    pushbar.close();
});

//OPEN MODALS INFO

const contentModals = {

    nurse: {
        office: "Enfermera Jefe",
        title: "Maria Del Perpetuo Socorro",
        subtitle: "Maria es una profesional de la salud, con mas de 5 años de experiencia, que cuenta con las capacidades necesarias para cuidar a nuestros viejitos, con la mayor disposicion posible.",
    },

    ceo: {
        office: "Lider del Proyecto",
        title: "Olga Lucia Ramirez",
        subtitle: "Olga lucia, jefe de nuestro proyecto, se encarga de gestionar y orientar a todo el equipo en armonia, para poder funcioanr y ejercer de la mejor manera posible.",
    },

    doctor: {
        office: "Doctor",
        title: "Jose Rodolfo Mayorquin",
        subtitle: "Jose Rodolfo, un medico profesional, que esta con toda la disposicion posible, para atender y prestar el devido servicio de salud a nuestros viejitios, con la mejor calidad posible.",
    }

};

cardNurse.addEventListener("click", () => {
    modal.classList.add("showModal");
    modal.style.pointerEvents = "all";
});

cardBoss.addEventListener("click", () => {
    modal.classList.add("showModal");
    modal.style.pointerEvents = "all";
});

cardDoctor.addEventListener("click", () => {
    modal.classList.add("showModal");
    modal.style.pointerEvents = "all";
});


