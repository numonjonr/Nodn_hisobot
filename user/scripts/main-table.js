const BASE_URL = "https://nodn.mtutoshkent.uz/api";
const MONTHS = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

function deleteReport(id) {
  const confirmed = confirm("Rostdan ham o'chirmoqchimisiz?");
  if (confirmed) {
    // Proceed with deletion
    const userData = JSON.parse(localStorage.getItem("user"));
    axios
      .delete(BASE_URL + `/audits/${id}`, {
        headers: { Authorization: `Bearer ${userData.accessToken}` },
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Item deleted.");
  } else {
    // Cancelled
    console.log("Deletion cancelled.");
  }
  return;
}

window.onload = async function () {
  const table = document.getElementById("main-table-body");
  try {
    const userData = JSON.parse(localStorage.getItem("user"));

    const result = await axios.get(BASE_URL + "/audits/get-by-station", {
      headers: { Authorization: `Bearer ${userData.accessToken}` },
    });

    let i = 1;
    for (const item of result.data) {
      const date = item.date.split("-");
      table.innerHTML += `
            <tr>
              <td>${i}</td>
              <td>${date[0]}</td>
              <td>${MONTHS[date[1]]}</td>
              <td>${item.total}</td>
              <td>
                <button class="btn btn-primary btn-small">
                  <a href="/user/pages/add/index.html?month=${
                    item.date
                  }&stationId=${item.stationId}"
                    ><i class="fa-solid fa-file"></i
                  ></a>
                </button>
                <button style="margin-left:20px;" class="btn btn-danger btn-small" onclick=deleteReport('${
                  item._id
                }')>
                    <i class="fa-solid fa-trash" style="color:red"></i>
                </button>
              </td>
            </tr>
            `;
      i += 1;
    }
  } catch (e) {
    console.log(e);
  }
};