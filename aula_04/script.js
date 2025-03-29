document.getElementById("itemInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});

function addItem() {
    let input = document.getElementById("itemInput");
    let itemText = input.value.trim();
    if (itemText === "") return;

    let table = document.getElementById("itemTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();
    let indexCell = newRow.insertCell(0);
    let cell = newRow.insertCell(1);
    indexCell.textContent = table.rows.length;
    cell.textContent = itemText;
    
    let select = document.getElementById("itemSelect");
    let option = document.createElement("option");
    option.textContent = itemText;
    select.appendChild(option);

    input.value = "";
}

function markItem() {
    let select = document.getElementById("itemSelect");
    let selectedItem = select.value;
    let rows = document.querySelectorAll("#itemTable tbody tr");
    
    rows.forEach(row => {
        if (row.cells[1].textContent === selectedItem) {
            row.classList.add("marked");
        }
    });
}

function unmarkItem() {
    let select = document.getElementById("itemSelect");
    let selectedItem = select.value;
    let rows = document.querySelectorAll("#itemTable tbody tr");
    
    let found = false;
    rows.forEach(row => {
        if (row.cells[1].textContent === selectedItem) {
            found = true;
            if (row.classList.contains("marked")) {
                row.classList.remove("marked");
            } else {
                alert("O item já está desmarcado!");
            }
        }
    });
}

function removeItem() {
    let select = document.getElementById("itemSelect");
    let selectedItem = select.value;
    let rows = document.querySelectorAll("#itemTable tbody tr");
    
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[1].textContent === selectedItem) {
            rows[i].remove();
            break;
        }
    }
    
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].textContent === selectedItem) {
            select.remove(i);
            break;
        }
    }
    
    updateTableIndexes();
}

function updateTableIndexes() {
    let rows = document.querySelectorAll("#itemTable tbody tr");
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}
