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
  10: "Oktyabr",
  11: "Noyabr",
  12: "Dekabr",
};

window.onload = async function () {
  const table = document.getElementById("main-content");
  try {
    const userData = JSON.parse(localStorage.getItem("user"));

    const result = await axios.get(BASE_URL + "/audits/get-summary", {
      headers: { Authorization: `Bearer ${userData.accessToken}` },
    });

    for (const item of result.data.data) {
      const date = item._id.split("-");
      table.innerHTML += `
            <tr>
                <td>
                ${
                  result.data.total == item.count
                    ? '<i id="icon-right" class="fa-solid fa-circle-check"></i>'
                    : '<i id="icon-x" class="fa-solid fa-circle-xmark"></i>'
                }
                <td> ${item.count} / ${result.data.total}  </td>
                </td>
                <td>${MONTHS[date[1]]}</td>
                <td>${date[0]}</td>
                <td>${item.total}</td>
                <td>
                    <button class="btn btn-primary btn-small">
                        <a href="./pages/view/index.html?month=${
                          item._id
                        }"> <i class="fa-solid fa-file"></i> </a>
                    </button>
                </td>
            </tr>
            `;
    }
  } catch (e) {
    console.log(e);
  }
};