var selectedRow = null

function onFormSubmit(){
    var formData = readFormData();

    if(selectedRow == null)
    insertNewRecord(formData);
   
    else
    updateRecord(formData);

    resetForm();

}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}


//after submit the new record
function insertNewRecord(data){
    var table = document.getElementById("stdList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;

    cell1 = newRow.insertCell(4);
    cell1.innerHTML = `<a href="#" onClick="onEdit(this)">Edit</a>
                       <a href="#" onClick="onDelete(this)">Delete</a>`;

}

//action button
function resetForm(){
    document.getElementById("name").value= "";
    document.getElementById("age").value= "";
    document.getElementById("email").value= "";
    document.getElementById("address").value= "";
    selectedRow = null;
}

//edit function

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}

//update

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.address;

}

//delete

function onDelete(td){
    if(confirm('Are u sure delete this record ?')){
        row = td.parentElement.parentElement;
    document.getElementById("stdList").deleteRow(row.rowIndex);
    resetForm();

    }
    
}

