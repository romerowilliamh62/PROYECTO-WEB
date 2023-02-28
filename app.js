let toggle = document.getElementById("toggle");
let label = document.getElementById("label");
toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle("oscuro");
  if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    label.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});




