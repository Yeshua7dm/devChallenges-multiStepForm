const step1 = document.getElementById("form1");
const step2 = document.getElementById("form2");
const step3 = document.getElementById("summary");
const currentStep = document.getElementById("current-step");

const nameDisplay = document.getElementById("name-display");
const emailDisplay = document.getElementById("email-display");
const topicsDisplay = document.getElementById("topics-display");

const stepper1 = document.getElementById("stepper1");
const stepper2 = document.getElementById("stepper2");
const stepper3 = document.getElementById("stepper3");

// onload of document, show step 1
const changeStep = (first, second) => {
  first.classList.add("hidden");
  first.classList.remove("active");

  second.classList.remove("hidden");
  second.classList.add("active");
};

const changeStepper = (first, second) => {
  first.classList.remove("active-stepper");
  first.classList.add("prev-stepper");

  second.classList.remove("next-stepper");
  second.classList.add("active-stepper");
};

const init = () => {
  step1.classList.add("active");
  stepper1.classList.add("active-stepper");
  stepper1.classList.remove("next-stepper");

  stepper2.classList.add("next-stepper");
  stepper2.classList.remove("prev-stepper");

  stepper3.classList.add("next-stepper");
  stepper3.classList.remove("active-stepper");

  //   changeStepper(stepper3, stepper1);

  step2.classList.add("hidden");
  step2.classList.remove("active");
  step3.classList.add("hidden");
  step3.classList.remove("active");

  nameDisplay.textContent = "";
  emailDisplay.textContent = "";
  topicsDisplay.textContent = "";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  currentStep.textContent = 1;
};

const handleForm1 = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  nameDisplay.textContent = name;
  emailDisplay.textContent = email;

  changeStep(step1, step2);
  changeStepper(stepper1, stepper2);

  currentStep.textContent = 2;
};

const handleForm2 = (e) => {
  // remove all li elements from topicsDisplay
  const ulElement = document.querySelector("ul");
  const liElements = ulElement.querySelectorAll("li");

  liElements.forEach((li) => {
    li.remove();
  });

  e.preventDefault();
  const chosenBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  if (chosenBoxes.length === 0) {
    alert("Please select at least one topic");
    return;
  }

  chosenBoxes.forEach((box) => {
    // create a li node to add to the ul with id topics-display
    const li = document.createElement("li");
    li.classList.add("retrieved-data");
    li.textContent = box.labels[0].textContent;
    topicsDisplay.appendChild(li);
  });

  changeStep(step2, step3);
  changeStepper(stepper2, stepper3);

  currentStep.textContent = 3;
};
const handleSummary = () => {
  alert("✅ Success");
  init();
};
document.addEventListener("DOMContentLoaded", init);

step1.addEventListener("submit", handleForm1);
step2.addEventListener("submit", handleForm2);

document.getElementById("confirm-btn").addEventListener("click", handleSummary);

/**
 * todo:
 * - go to prev step on click of stepper
 * check if stepper classlist contains "prev-stepper", if not return
 */

// const handlePrevStep = (stepper) => {
//   if (stepper.classList.contains("prev-stepper")) {
//     stepper.classList.remove("prev-stepper");
//     stepper.classList.add("active-stepper");
//     stepper.nextElementSibling.classList.add("next-stepper");
//     stepper.nextElementSibling.classList.remove("active-stepper");
//     currentStep.textContent = parseInt(currentStep.textContent) - 1;
//   }
// };
// const handleNextStep = (stepper) => {
//   if (stepper.classList.contains("next-stepper")) {
//     stepper.classList.remove("next-stepper");
//     stepper.classList.add("active-stepper");
//     stepper.previousElementSibling.classList.add("prev-stepper");
//     stepper.previousElementSibling.classList.remove("active-stepper");
//     currentStep.textContent = parseInt(currentStep.textContent) + 1;
//   }
// }
