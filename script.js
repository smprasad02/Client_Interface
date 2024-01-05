

const product1 = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  };

  

class Product {
    constructor(name, no = 1, quantity = 40) {
        this.no = no;
        this.name = name;
        this.quantity = quantity;
    }
}

function addToCurrent(Product) {
    const current = document.getElementsByClassName("current_table")[0];
    const addRow = current.insertRow();

    let columnIndex = 0;
    for (const [key, value] of Object.entries(Product)) {
        const cell = addRow.insertCell(columnIndex);
        cell.innerHTML = value;
        columnIndex++;
    }
}



const current_table = [];

const add_current_table = document.getElementById("add_to_list");

add_current_table.addEventListener("click", function() {
    // const name = document.getElementById("product_code");
    const name = document.getElementById("product_code");
    const name_value = name.value;
    const product = new Product(name_value);
    current_table.push(product);
    addToCurrent(product);
    name.value = "";
    // console.log(current_table);
});
