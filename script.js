const data = JSON.parse(localStorage.getItem('data')) || []

console.log(typeof data)

function onFormSubmit(){
 let formData = readFormData()
 insertNewRecord(formData)
 saveRecord(formData)
 resetForm()
 perform()
}

function saveRecord(formData) {
    data.push(formData)
    localStorage.setItem('data', data)
}

function readFormData(){
    let formData = {};
    formData["first"] = document.getElementById("firstname").value
    formData["last"] = document.getElementById("lastname").value
    formData["email"] = document.getElementById("Email").value
    formData["time"] = document.getElementById("Time").value
    formData["occupation"] = document.getElementById("occupation").value
    return formData;
}

function insertNewRecord(data){
    let table = document.getElementById("attendance").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.first;
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.last;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.time;
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.occupation;
    
}

function resetForm(){
    document.getElementById("firstname").value = ""
     document.getElementById("lastname").value = ""
 document.getElementById("Email").value = ""
     document.getElementById("Time").value = ""
     document.getElementById("occupation").value = ""
}

function perform(){
    document.getElementById("wel").value = perform.innerHTML
}