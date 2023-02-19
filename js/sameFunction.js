// Function for getting Input value
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = " ";
  return inputFieldValue;
}
//Function for getting text value
function getTextValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementvalue = parseFloat(textElementValueString);
  return textElementvalue;
}
// Area calculaltion display function inside
// function sideTamplate(headerName, Area){
//   const parent = document.getElementById("content-container");
//   count += 1;
//   const tr = document.createElement("tr");
//   tr.innerHTML = `
//     <td>${count}&#x2022; ${headerName}</td>
//     <td>${Area}cm<sup>2</sup></td>
//     <td>
//     <button class='btn btn-primary'>Convert to m<sup>2</sub></button>
//     </td>
// `;
//   parent.appendChild(tr);

// }
