import Pushbar from "./pushbar/pushbar.js";

const pushbar = new Pushbar({
    blur: true,
    overlay: true,
})

// FUNCTION DOWNLOAD PDF-------------------------------------------------------------------------

function downloadPDF (path, name){

    const downloadInstance = document.createElement("a");
    
    downloadInstance.href = path;
    downloadInstance.target = "_blanck";
    downloadInstance.download = name;

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);

};


//DIMENSSIONS PAGE SECTIONS------------------------------------------------------------------

const heightWindows = window.innerHeight - 60;

document.getElementById("content-firsPage").style.height = heightWindows + 60 + "px";
document.getElementById("firstPageID").style.height = heightWindows + 60 + "px";

document.getElementById("content-secondPage").style.height = heightWindows + "px";
document.getElementById("secondPage").style.height = heightWindows + "px";

document.getElementById("content-threePage").style.height = heightWindows + "px";
document.getElementById("threePage").style.height = heightWindows + "px";

document.getElementById("content-fourPage").style.height = heightWindows  + "px";
document.getElementById("fourPage").style.height = heightWindows  + "px";

//PUSHBAR-------------------------------------------------------------------------------

//OPEN
document.querySelector(".btn-menu").addEventListener("click", () => {
    pushbar.open("menu");
});

//CLOSE
document.querySelector(".imageExit").addEventListener("click", () => {
    pushbar.close();
});

//FUNCTIONS SCROLL
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

//MODALS - CARDS-------------------------------------------------------------------------

const cardNurse = document.querySelector(".nurse");
const cardBoss = document.querySelector(".boss");
const cardDoctor = document.querySelector(".doctor");

const buttonCloseModal = document.getElementById("closeModal");
const modal = document.getElementById("containerModal"); 

const modalOffice = document.getElementById("modalOffice");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");

const modalImage = document.getElementById("modalImage");

const buttonDownloadPDF = document.getElementById("buttonDownloadPDF");

const dataModals = {

    nurse: {
        office: "Enfermera Jefe",
        title: "Maria Del Perpetuo Socorro",
        subtitle: "Maria es una profesional de la salud, con mas de 5 años de experiencia, que cuenta con las capacidades necesarias para cuidar a nuestros viejitos, con la mayor disposicion posible.",
        image: "/img/nurseImageExample.jpg",
        path: "./sample.pdf",
        name: "Cv Maria Socorro",
    },

    ceo: {
        office: "Lider del Proyecto",
        title: "Olga Lucia Ramirez",
        subtitle: "Olga lucia, jefe de nuestro proyecto, se encarga de gestionar y orientar a todo el equipo en armonia, para poder funcioanr y ejercer de la mejor manera posible.",
        image: "/img/ceoExample.jpg",
        path: "./sample.pdf",
        name: "Cv Olga Lucia",
    },

    doctor: {
        office: "Doctor",
        title: "Jose Rodolfo Mayorquin",
        subtitle: "Jose Rodolfo, un medico profesional, que esta con toda la disposicion posible, para atender y prestar el devido servicio de salud a nuestros viejitios, con la mejor calidad posible.",
        image: "/img/bossDoctor.jpg",
        path: "./sample.pdf",
        name: "Cv Jose Rodolfo",
    }

};

cardNurse.addEventListener("click", () => {
    
    modalOffice.innerText = dataModals.nurse.office;
    modalTitle.innerText = dataModals.nurse.title;
    modalSubtitle.innerText = dataModals.nurse.subtitle;

    //IMAGE
    modalImage.setAttribute("src", dataModals.nurse.image);

    //DOWNLOAD PDF
    buttonDownloadPDF.addEventListener("click", function() {
        downloadPDF(dataModals.nurse.path, dataModals.nurse.name);
    })
    
    modal.classList.add("showModal");
    modal.style.pointerEvents = "all";

});

cardBoss.addEventListener("click", () => {

    modalOffice.innerText = dataModals.ceo.office;
    modalTitle.innerText = dataModals.ceo.title;
    modalSubtitle.innerText = dataModals.ceo.subtitle;

    //IMAGE
    modalImage.setAttribute("src", dataModals.ceo.image);
    
    //DOWNLOAD PDF
    buttonDownloadPDF.addEventListener("click", function() {
        downloadPDF(dataModals.ceo.path, dataModals.ceo.name);
    })

    modal.classList.add("showModal");
    modal.style.pointerEvents = "all";

});

cardDoctor.addEventListener("click", () => {

    modalOffice.innerText = dataModals.doctor.office;
    modalTitle.innerText = dataModals.doctor.title;
    modalSubtitle.innerText = dataModals.doctor.subtitle;

    //IMAGE
    modalImage.setAttribute("src", dataModals.doctor.image);
    
    //DOWNLOAD PDF
    buttonDownloadPDF.addEventListener("click", function() {
        downloadPDF(dataModals.doctor.path, dataModals.doctor.name);
    })
    
    modal.classList.add("showModal");
    modal.style.pointerEvents = "all";

});

//CLOSE MODAL------------------------------------------------------------------------------

buttonCloseModal.addEventListener("click", function () {
    modal.classList.remove("showModal");
    modal.style.pointerEvents = "none";
});

//WHATSAPP API-----------------------------------------------------------------------------

const buttonWhatsapp = document.querySelector(".buttonWhatsapp");

buttonWhatsapp.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=+571234567890&text=Hola!%20Quisiera%20Obtener%20Mas%20Informacion");
});
