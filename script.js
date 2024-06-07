const openModal = document.getElementById("project-btn");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("closebutton");
const radio = document.querySelectorAll('input[type ="radio"]');


const openModalSuccess = document.querySelectorAll(".continue-btn");
const closeModalSuccess = document.getElementById("support-btn");
const modalSuccess = document.querySelector(".modal-success");

const inputPledge1 = document.querySelector(".input-pledge1");
const inputPledge2 = document.querySelector(".input-pledge2");
const inputPledge3 = document.querySelector(".input-pledge3");
const inputPledge4 = document.querySelector(".input-pledge4");

const modal1 = document.getElementById("modal-1");
const modal2 = document.getElementById("modal-2");
const modal3 = document.getElementById("modal-3");
const modal4 = document.getElementById("modal-4");

// Uncheck all Radio buttons --------------------------------------------------

function uncheck() {
    radio.forEach(function (radio) {
      radio.checked = false;
    });
  }

// Project modal ---------------------------------------------------------------

openModal.addEventListener("click", () => {
  uncheck();
  modal.showModal();
  inputPledge1.style.display = "none";
  inputPledge2.style.display = "none";
  inputPledge3.style.display = "none";
  inputPledge4.style.display = "none";
  modal1.classList.remove("selected");
  modal2.classList.remove("selected");
  modal3.classList.remove("selected");
  modal4.classList.remove("selected");
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// Support modal ---------------------------------------------------------------

// openModalSuccess.addEventListener("click", () => {
//   modalSuccess.showModal();
//   modal.close();
// });

closeModalSuccess.addEventListener("click", () => {
  modalSuccess.close();
});

// Loop through radio buttons ----------------------------------------------------

radio.forEach((radio) => {
  radio.addEventListener("change", checkRadioButtons);
});

openModalSuccess.forEach((openmodalsuccess) => { 
    openmodalsuccess.addEventListener('click', () => {
        modalSuccess.showModal();
        modal.close();
       
    });
})

function checkRadioButtons() {
  const bambooradio1 = document.querySelector('input[value="1"]');
  const bambooradio2 = document.querySelector('input[value="2"]');
  const bambooradio3 = document.querySelector('input[value="3"]');
  const bambooradio4 = document.querySelector('input[value="4"]');

  if (bambooradio1.checked) {
    inputPledge1.style.display = "block";
    modal1.style.display = "block";
    modal1.classList.add("selected");


    inputPledge2.style.display = "none";
    modal2.classList.remove("selected");

    inputPledge3.style.display = "none";
    modal3.classList.remove("selected");

    inputPledge4.style.display = "none";
    modal4.classList.remove("selected");
  }

  if (bambooradio2.checked) {
    inputPledge2.style.display = "block";
    modal2.style.display = "block";
    modal2.classList.add("selected");

    inputPledge1.style.display = "none";
    modal1.classList.remove("selected");

    inputPledge3.style.display = "none";
    modal3.classList.remove("selected");

    inputPledge4.style.display = "none";
    modal4.classList.remove("selected");
  }

  if (bambooradio3.checked) {
    inputPledge3.style.display = "block";
    modal3.style.display = "block";
    modal3.classList.add("selected");

    inputPledge1.style.display = "none";
    modal1.classList.remove("selected");

    inputPledge2.style.display = "none";
    modal2.classList.remove("selected");

    inputPledge4.style.display = "none";
    modal4.classList.remove("selected");
  }

  if (bambooradio4.checked) {
    inputPledge4.style.display = "block";
    modal4.style.display = "block";
    modal4.classList.add("selected");

    inputPledge1.style.display = "none";
    modal1.classList.remove("selected");

    inputPledge2.style.display = "none";
    modal2.classList.remove("selected");

    inputPledge3.style.display = "none";
    modal3.classList.remove("selected");
  }
}
