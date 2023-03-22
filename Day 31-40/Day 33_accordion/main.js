const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
//     toggling the active class in each accrodion
    this.classList.toggle("active");
  });
}