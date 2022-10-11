//Mobile sidebar toggle
document.querySelector(".nav-toggle").addEventListener('click', () => {
  var element = document.getElementById("mainContainer");
  element.classList.toggle("isActive");
})