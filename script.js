var generate = document.getElementById("generate");
var input = document.getElementById('input');
var timestable = document.getElementById('timestable');
var table = false
var number

generate.addEventListener("click",displayTable);

function displayTable() {
  number = parseInt(input.value);
  generateTable();
}
var row = 

function generateTable() {
  if(table){
    clearTable();
  }
  table = document.createElement("table");
  timestable.appendChild(table)
  for(var i = 0; i<number; i++){
    var row = document.createElement("tr");
    row.classList.add("r"+(i+1))
    table.appendChild(row)
    for(var v = 0; v<number; v++){
      var cell = document.createElement("td");
      cell.textContent= (v+1)*(i+1)
      row.appendChild(cell)

    }
  }
}

function clearTable() {
  console.log("working");
  timestable.removeChild(table);
}
