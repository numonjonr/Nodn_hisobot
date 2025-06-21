const BASE_URL = "https://nodn.mtutoshkent.uz/api";

const data = [
  {
    username: "keles",
    password: "720104",
    title: "Keles Stansiyasi",
    type: "user",
  },
  {
    username: "nazarbek",
    password: "722203",
    title: "Nazarbek Stansiyasi",
    type: "user",
  },
  {
    username: "dalaguzar",
    password: "722307",
    title: "Dalaguzar Stansiyasi",
    type: "user",
  },
  {
    username: "chuqursoy",
    password: "720000",
    title: "Chuqursoy Stansiyasi",
    type: "user",
  },
  {
    username: "salar",
    password: "720903",
    title: "Salar Stansiyasi",
    type: "user",
  },
  {
    username: "toshkent",
    password: "722400",
    title: "Toshkent Stansiyasi",
    type: "user",
  },
  {
    username: "xamza",
    password: "722504",
    title: "Xamza Stansiyasi",
    type: "user",
  },
  {
    username: "tuqimachi",
    password: "723600",
    title: "To'qimachi Stansiyasi",
    type: "user",
  },
  {
    username: "rahimova",
    password: "723704",
    title: "Rahimova Stansiyasi",
    type: "user",
  },
  {
    username: "urtaovul",
    password: "723808",
    title: "O'rta-ovul Stansiyasi",
    type: "user",
  },
  {
    username: "yalangach",
    password: "721107",
    title: "Yalangach Stansiyasi",
    type: "user",
  },
  {
    username: "kadirya",
    password: "721200",
    title: "Kadirya Stansiyasi",
    type: "user",
  },
  {
    username: "akkavak",
    password: "721304 ",
    title: "Akkavak Stansiyasi",
    type: "user",
  },
  {
    username: "bozsu",
    password: "721408",
    title: "Bozsu Stansiyasi",
    type: "user",
  },
  {
    username: "chirchiq",
    password: "721501",
    title: "Chirchiq Stansiyasi",
    type: "user",
  },
  {
    username: "aranchi",
    password: "721605",
    title: "Aranchi Stansiyasi",
    type: "user",
  },
  {
    username: "barraj",
    password: "721802",
    title: "Barraj Stansiyasi",
    type: "user",
  },
  {
    username: "xojikent",
    password: "722006",
    title: "Xojikent Stansiyasi",
    type: "user",
  },
  {
    username: "uzbekiston",
    password: "723827",
    title: "O'zbekiston Stansiyasi",
    type: "user",
  },
  {
    username: "yangiyul",
    password: "724001",
    title: "Yangiyul Stansiyasi",
    type: "user",
  },
  {
    username: "paxta",
    password: "724209",
    title: "Paxta Stansiyasi",
    type: "user",
  },
  {
    username: "olmazor",
    password: "724302",
    title: "Olmazor Stansiyasi",
    type: "user",
  },
  {
    username: "chinoz",
    password: "724502",
    title: "Chinoz Stansiyasi",
    type: "user",
  },
  {
    username: "yangichinoz",
    password: "724502",
    title: "Yangi Chinoz Stansiyasi",
    type: "user",
  },
  {
    username: "sergeli",
    password: "723507",
    title: "Sergeli Stansiyasi",
    type: "user",
  },
  {
    username: "jaloyir ",
    password: "723407",
    title: "Jaloyir Stansiyasi",
    type: "user",
  },
  {
    username: "kuchluk",
    password: "723307",
    title: "Kuchluk Stansiyasi",
    type: "user",
  },
  {
    username: "toytepa",
    password: "723206",
    title: "Toy-tepa Stansiyasi",
    type: "user",
  },
  {
    username: "ozodlik",
    password: "723102",
    title: "Ozodlik Stansiyasi",
    type: "user",
  },
  {
    username: "ohangaron",
    password: "723009",
    title: "Ohangaron  Stansiyasi",
    type: "user",
  },
  {
    username: "akcha",
    password: "722805",
    title: "Akcha Stansiyasi",
    type: "user",
  },
  {
    username: "ablik",
    password: "722701",
    title: "Ablik Stansiyasi",
    type: "user",
  },
  {
    username: "angren",
    password: "722608",
    title: "Angren Stansiyasi",
    type: "user",
  },
  {
    username: "sirdaryo",
    password: "724707",
    title: "Sirdaryo Stansiyasi",
    type: "user",
  },
  {
    username: "baxt",
    password: "724800",
    title: "Baxt Stansiyasi",
    type: "user",
  },
  {
    username: "oqoltin",
    password: "724904",
    title: "Oqoltin Stansiyasi",
    type: "user",
  },
  {
    username: "guliston",
    password: "725004 ",
    title: "Guliston Stansiyasi",
    type: "user",
  },
  {
    username: "bayovut",
    password: "725108",
    title: "Bayovut Stansiyasi",
    type: "user",
  },
  {
    username: "yangi-yangiyer",
    password: "725409",
    title: "Yangi-Yangiyer Stansiyasi",
    type: "user",
  },
  {
    username: "Yangiyer",
    password: "725201",
    title: "Yangiyer Stansiyasi",
    type: "user",
  },
  {
    username: "xavast",
    password: "725803",
    title: "Xavast Stansiyasi",
    type: "user",
  },
  {
    username: "bekabod",
    password: "726100",
    title: "Bekabod Stansiyasi",
    type: "user",
  },
  {
    username: "farhod",
    password: "726007",
    title: "Farhod Stansiyasi",
    type: "user",
  },
  {
    username: "robot",
    password: "728712",
    title: "Robot Stansiyasi",
    type: "user",
  },
  {
    username: "dashtabod",
    password: "726609",
    title: "Dashtabod Stansiyasi",
    type: "user",
  },
  {
    username: "sayhun",
    password: "726810",
    title: "Sayhun Stansiyasi",
    type: "user",
  },
  {
    username: "zomin",
    password: "722510",
    title: "Zomin Stansiyasi",
    type: "user",
  },
  {
    username: "zarbdor",
    password: "726702",
    title: "Zarbdor Stansiyasi",
    type: "user",
  },
  {
    username: "jizax",
    password: "726903",
    title: "Jizax Stansiyasi",
    type: "user",
  },
  {
    username: "paxtakor",
    password: "725708",
    title: "Paxtakor Stansiyasi",
    type: "user",
  },
  {
    username: "dustlik",
    password: "725606",
    title: "Do'stlik Stansiyasi",
    type: "user",
  },
  {
    username: "irdjarskaya",
    password: "725602",
    title: "Irjar Stansiyasi",
    type: "user",
  },
  {
    username: "oqkuprik",
    password: "720102",
    title: "Oqko'prik Stansiyasi",
    type: "user",
  },
];

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