const sectionTitle = document.getElementById("section-title")
const userData = JSON.parse(localStorage.getItem("user"))

if(userData?.type == "admin"){
    sectionTitle.textContent = "Boshqarma - Umumiy hisobotlar"
}else{
    window.location.href = "/admin/login"
}