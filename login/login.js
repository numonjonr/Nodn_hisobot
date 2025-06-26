function checkLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = {
    admin: { password: "admin123", role: "admin" },
    user1: { password: "user123", role: "user", name: "User 1" },
    user2: { password: "user234", role: "user", name: "User 2" },
    user3: { password: "user345", role: "user", name: "User 3" },
  };

  const user = users[username];

  if (user && user.password === password) {
    if (user.role === "admin") {
      window.location.href = "./admin/";
    } else {
      // user role
      localStorage.setItem("username", user.name);
      window.location.href = "./user/";
    }
  } else {
    document.getElementById("error-msg").textContent = "Login yoki parol noto‘g‘ri!";
  }
}

function togglePassword() {
  let passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Parolni ko‘rsatish
  } else {
    passwordField.type = "password"; // Parolni yashirish
  }
}