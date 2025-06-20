const BASE_URL = "https://nodn.mtutoshkent.uz/api";
const MONTHS = {
  "01": "Yanvar",
  "02": "Fevral",
  "03": "Mart",
  "04": "Aprel",
  "05": "May",
  "06": "Iyun",
  "07": "Iyul",
  "08": "Avgust",
  "09": "Sentyabr",
  "10": "Oktyabr",
  "11": "Noyabr",
  "12": "Dekabr",
};

const names = {
  train: "Poyezdlar harakatida asosiy asosiy aloqa vositalarning to'xtalishi",
  test2: "Ixtisoslashmagan yo'llarga poyezdlarning qabul qilinishi",
  test3: "Ixtisoslashmagan yo'llardan poyezdlarning jo'natilishi",
  test4:
    "Stansiyaga poyezdlarni svetaforning ta'qiq ko'rsatmasi asosida qabul qilish",
  test5:
    "Stansiyadan poyezdlarni svetaforning ta'qiq ko'rsatmasi asosida jo'natish",
  test6: "Poyezdlarning kirish svetoforida ushlab qolinishi (UMUMIY)",
  test7: "Shulardan: Yuk poyezdlari",
  test8: "Yo'lovchi poyezdlari",
  test9: "Komission oylik ko'rik davomida aniqlangan kamchiliklar (UMUMIY)",
  test10: "Shulardan bartaraf etilmagan kamchiliklar",
  test11: "PCH",
  test12: "ShCh",
  test13: "ECh",
  test14: "Boshqa",
  test15:
    "Temir yo'l tasarrufidegi shahobcha yo'llarida o'tkazilgan komissiya oylik ko'riklarida aniqlangan nosozliklar. JAMI:",
  test16: "Nuqsonlar Jami:",
  test17: "Stansiya bo'yicha",
  test18: "Shahobcha yo'llari bo'yicha",
};

window.onload = async function () {
  const table = document.getElementById("by-month-table");
  const stationList = document.getElementById("stations-list");
  try {
    const params = new URLSearchParams(window.location.search);
    const month = params.get("month");
    const userData = JSON.parse(localStorage.getItem("user"));

    const result = await axios.get(BASE_URL + `/audits/get-summary/${month}`, {
      headers: { Authorization: `Bearer ${userData.accessToken}` },
    });

    /** update header */
    const year = month.split("-")[0];
    const monthNumber = month.split("-")[1];
    const header = document.getElementById("header-title");
    header.innerHTML = `${year}-yil ${MONTHS[monthNumber]} oyi uchun poyezdlar harakati xavfsizligi holati va SMB qurilmalari ishlashi <br /> TAHLILI`;

    const data = result.data.data;

    let i = 1;
    for (const key of Object.keys(names)) {
      table.innerHTML += `
             <tr>
                  <td>${i}</td>
                  <td>${names[key]}</td>
                  <td>${data[key].amount}</td>
                  <td>${data[key].time}</td>
                  <td>${data[key].guiltyFarm
                    .map((s) => `<p>${s}</p>`)
                    .join("")}</td>
                  <td>${data[key].reason
                    .map(
                      (item) =>
                        `<p>${item.username}(${item.amount}) - ${item.reason}</p>`
                    )
                    .join("")}</td>
              </tr>
            `;
      i += 1;
    }
    const stations = data.stations.map((s) => s.username);

    for (const station of result.data.stations) {
      stationList.innerHTML += `
          <li class="main-navigation_item qushimcha">
            ${
              stations.includes(station.username)
                ? `<a href="/user/pages/add/index.html?month=${month}&stationId=${station._id}"> ${station.username} <i id="icon-right" class="fa-solid fa-check"> </i> </a>`
                : `<a href="#" style="cursor: not-allowed; text-decoration: none;"> ${station.username} <i id="icon-x" class="fa-solid fa-circle-xmark"></i></a>`
            } 
          </li>
      `;
    }
  } catch (e) {
    console.log(e);
  }
};