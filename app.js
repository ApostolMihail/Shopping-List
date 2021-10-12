var item = document.getElementById("item");
var addItem = document.getElementById("add-item");
var show = document.getElementById('hidden');
var itemList = document.getElementById("item-list");
var sortAscBut = document.getElementById("sort-asc");
var sortDescBut = document.getElementById("sort-desc");

addItem.addEventListener("click", addItemToList);

function addItemToList() {
    if (item.value) {

        show.style.visibility = "visible";
        var newItem = document.createElement("li");
        newItem.textContent = item.value;
        itemList.appendChild(newItem);
        document.getElementById("item").value = '';

        var markButton = document.createElement("button");
        markButton.textContent = "Mark as buyed";
        buttonList.appendChild(markButton);
        markButton.addEventListener("click", markItem);
        function markItem() {
            newItem.style.textDecoration = "line-through";
        }

    }
} 

var body = document.querySelector('body');
body.addEventListener('keypress', pressEnter);
function pressEnter(e) {
    if (e.key === "Enter") {
        addItemToList();
    }
}



// inspirat w3school
sortAscBut.addEventListener("click", sortListAsc);

function sortListAsc() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("item-list");
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
        }
    }
        if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        }
    }
}

sortDescBut.addEventListener("click", sortListDesc);

function sortListDesc() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("item-list");
    switching = true;
    
    dir = "asc";
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("LI");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (dir == "asc") {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
}