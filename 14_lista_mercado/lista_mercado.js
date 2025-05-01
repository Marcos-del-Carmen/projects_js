let cont_list = document.getElementById("cont_list");
let input = document.getElementById("list");
let btn = document.getElementById("btn_add");
let btn_clear_all = document.getElementById("btn_clear");

let table = document.createElement("table");

emptyTable();
btn.addEventListener("click", function (event) {
    emptyTable();
    if (input.value == "") {
        alert("Please enter a value");
        return
    }
    let row = document.createElement("tr");
    
    let columnName = document.createElement("td");
    let columnEdit = document.createElement("td");
    let columnDelete = document.createElement("td");
    
    let btn_edit = document.createElement("button");
    let btn_delete = document.createElement("button");

    let icon_edit = document.createElement("i");
    let icon_delete = document.createElement("i");

    icon_edit.className = "fa-solid fa-pen-to-square c-yellow";
    icon_delete.className = "fa-solid fa-trash c-red";

    btn_edit.appendChild(icon_edit);
    btn_delete.appendChild(icon_delete);

    btn_edit.addEventListener("click", function (event) {
        let valueEdit = window.prompt("Edit item", input.value);
        let espacios = valueEdit.trim();
        if (!espacios) {
            alert("Please enter a value");
            return;
        } else {
            columnName.innerHTML = valueEdit;
        }
    });

    btn_delete.addEventListener("click", function (event) {
        let bandera = confirm("Are you sure you want to delete this item?");
        if (bandera) {
            row.remove();
        }
    })

    btn_edit.className = "btn";
    btn_delete.className = "btn";

    // se agregan los elementos a la columna
    columnName.innerHTML = input.value;
    columnEdit.appendChild(btn_edit);
    columnDelete.appendChild(btn_delete);

    // se agregan los elementos a la fila
    row.appendChild(columnName);
    row.appendChild(columnEdit);
    row.appendChild(columnDelete);
    
    // se agregan los elementos a la tabla
    table.appendChild(row);

    // se agregan los elementos al contendor 
    cont_list.appendChild(table);
});

btn_clear_all.addEventListener("click", function (event) {
    emptyTable();
    if (table.rows.length == 0) {
        alert("No items to delete");
        return;
    }
    let bandera = confirm("Are you sure you want to delete all items?");
    if (bandera) {
        table.innerHTML = "";
        return;
    }
});


function emptyTable() {
    
    if (table.rows.length == 0) {
        cont_list.innerHTML = `<p class="text-center alert-warning m-1"> Start adding your items</p>`;
    } else {
        cont_list.innerHTML = "";
    }
}
