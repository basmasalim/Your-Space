let searchInput = document.getElementById("searchInput");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
  if (inp.value.trim() !== "") {
    boxs[0].innerHTML += `
      <div class="item py-2" draggable="true">
        ${inp.value}
        <div class="btn-item">
          <button class="btn-delete text-danger border-0" onclick="deleteElement(this)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
    clearInput();
    dragItem();
  }
};

function clearInput() {
  inp.value = "";
}

function searchItems() {
  var term = searchInput.value.trim().toLowerCase();
  boxs[0].querySelectorAll(".item").forEach((item) => {
    const itemText = item.innerText.trim().toLowerCase();
    if (itemText.includes(term)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function deleteElement(button) {
  const item = button.closest('.item');
  item.remove();
}

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
    });
    item.addEventListener("dragend", function () {
      drag = null;
    });
  });

  boxs.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
      this.style.background = "#E7E7E9";
    });
    box.addEventListener("dragleave", function () {
      this.style.background = "#fff";
    });
    box.addEventListener("drop", function () {
      this.append(drag);
      this.style.background = "#fff";
    });
  });
}

searchInput.addEventListener("input", searchItems);

function logoutUser() {
  localStorage.removeItem("userName");
  localStorage.removeItem("email");
  localStorage.removeItem("password");

  window.location.href = './index.html';
}
