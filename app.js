document
  .getElementById("btn-submission")
  .addEventListener("click", function () {
    let getInputName = document.getElementById("nameInput");
    let getInputNameValue = getInputName.value;
    let getTable = document.getElementById("table");
    let tr = document.createElement("tr");
    getTable.appendChild(tr);
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerText = getInputNameValue;
    // id
    let getInputId = document.getElementById("idInput");
    let getInputIdValue = getInputId.value;
    let getTableID = document.getElementById("table");
    let tdId = document.createElement("td");
    tr.appendChild(tdId);
    tdId.innerText = getInputIdValue;
    // Diploma
    let getInputDiploma = document.getElementById("depInput");
    let getInputDiplomaValue = getInputDiploma.value;
    let getTableDiploma = document.getElementById("table");
    let tdDiploma = document.createElement("td");
    tr.appendChild(tdDiploma);
    tdDiploma.innerText = getInputDiplomaValue;
    // GPA
    let getInputGPA = document.getElementById("gpaInput");
    let getInputGPAValue = getInputGPA.value;
    let getTableGPA = document.getElementById("table");
    let tdGPA = document.createElement("td");
    tr.appendChild(tdGPA);
    tdGPA.innerText = getInputGPAValue;
  });
