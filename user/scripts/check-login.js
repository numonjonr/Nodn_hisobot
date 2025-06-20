const sectionTitle = document.getElementById("section-title");
const userData = JSON.parse(localStorage.getItem("user"));

if (userData?.type == "user") {
  sectionTitle.textContent = userData.title;
  document.title = `${userData.title} stansiyasi`;
} else {
  window.location.href = "/user/login";
}