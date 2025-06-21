const data = [
  {
    username: "MTUAdmin",
    password: "12345678",
    type: "admin",
  },
];

const BASE_URL = "https://nodn.mtutoshkent.uz/api";

const checkLogin = async () => {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMsg = document.getElementById("error-msg");

  try {
    const result = await axios.post(BASE_URL + "/auth/login", {
      username,
      password,
    });

    localStorage.setItem("user", JSON.stringify(result.data));
    window.location.href = "../";
  } catch (e) {
    console.log(e);
    errorMsg.textContent = "Login yoki parol noto‘g‘ri!";
  }
};

function togglePassword() {
  let passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Parolni ko‘rsatish
  } else {
    passwordField.type = "password"; // Parolni yashirish
  }
}