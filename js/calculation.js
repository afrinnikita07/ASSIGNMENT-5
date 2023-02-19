
 let count = 0;
//AREA OF TRIANGLE
document.getElementById("btn-triangle").addEventListener('click', function(){
const triangleFirstInputField = getInputFieldValueById("triangle-first-input-field");
const triangleSecondInputField = getInputFieldValueById("triangle-second-input-field");
 if(!triangleFirstInputField || !triangleSecondInputField || triangleFirstInputField <= 0 || triangleSecondInputField <= 0 || typeof triangleFirstInputField !== 'number' || typeof triangleSecondInputField !== 'number'){
    alert('please provide valid input');
}
 count += 1;
const areaOfTriangle = (0.5 * triangleFirstInputField * triangleSecondInputField).toFixed(2);
const parent = document.getElementById("content-container");
const triangleHeading = document.getElementById("triangle-heading").innerText;
  const tr = document.createElement("tr");
  tr.innerHTML =`

  <td>${count}&#x2022; ${triangleHeading}</td>
  <td>${areaOfTriangle}cm<sup>2</sup></td>
  <td>
  <button class='btn btn-primary'>Convert to m<sup>2</sub></button>
  </td>
`;
  parent.appendChild(tr);
})

// AREA OF RECTANGLE
document.getElementById("btn-rectangle").addEventListener('click', function(){

    const rectangleFirstInputField = getInputFieldValueById("rectangle-first-input-field");
    const rectangleSecondInputField = getInputFieldValueById("rectangle-second-input-field");  
    if(!rectangleFirstInputField || !rectangleSecondInputField || rectangleFirstInputField <= 0 || rectangleSecondInputField <= 0 || typeof rectangleFirstInputField !== 'number' || typeof rectangleSecondInputField !== 'number'){
       alert('please provide valid input');
    }
    count += 1;
    const areaOfRectangle = (rectangleFirstInputField * rectangleSecondInputField).toFixed(2);
    const parent = document.getElementById("content-container");
    const rectangleHeading = document.getElementById("rectangle-heading").innerText;
  const tr = document.createElement("tr");
  tr.innerHTML =`
    <td>${count}&#x2022; ${rectangleHeading}</td>
    <td>${areaOfRectangle}cm<sup>2</sup></td>
    <td>
    <button class='btn btn-primary'>Convert to m<sup>2</sub></button>
    </td>
`;
  parent.appendChild(tr);
})
   
// AREA OF Parallelogram
document.getElementById("btn-Parallelogram").addEventListener('click', function(){
      const parallelogramFirstElement = getTextElementValueById("parallelogram-first-element");     
      const parallelogramSecondElement = getTextElementValueById("parallelogram-second-element");
      count += 1;
      const areaOfParallelogram = parallelogramFirstElement * parallelogramSecondElement;
      const parent = document.getElementById("content-container");
    const paralellogramHeading = document.getElementById("paralellogram-heading").innerText;
  const tr = document.createElement("tr");
  tr.innerHTML =`
    <td>${count}&#x2022; ${paralellogramHeading}</td>
    <td>${areaOfParallelogram}cm<sup>2</sup></td>
    <td>
    <button class='btn btn-primary'>Convert to m<sup>2</sub></button>
    </td>
`;
  parent.appendChild(tr);
})
     
       
//AREA OF Rhombus
document.getElementById("btn-rhombus").addEventListener('click', function(){
    const rhombusFirstElement = getTextElementValueById("rhombus-first-element");
    const rhombusSecondElement = getTextElementValueById("rhombus-second-element");
    count += 1;
    const areaOfRhombus = 0.5 * rhombusFirstElement * rhombusSecondElement;
    const parent = document.getElementById("content-container");
    const rhombusHeading = document.getElementById("rhombus-heading").innerText;
    const tr = document.createElement("tr");
    tr.innerHTML =`
    <td>${count}&#x2022; ${rhombusHeading}</td>
    <td>${areaOfRhombus}cm<sup>2</sup></td>
    <td>
    <button class='btn btn-primary'>Convert to m<sup>2</sub></button>
    </td>
`;
  parent.appendChild(tr);
})
     
   
//AREA OF pentagon
document.getElementById("btn-pentagon").addEventListener('click',function(){
    const pentagonFirstElement = getTextElementValueById("pentagon-first-element");
    const pentagonSecondElement = getTextElementValueById("pentagon-second-element");
    count += 1;
    const areaOfPentagon = 0.5 * pentagonFirstElement * pentagonSecondElement;
    const parent = document.getElementById("content-container");
    const pentagonHeading = document.getElementById("pentagon-heading").innerText;
    const tr = document.createElement("tr");
    tr.innerHTML =`
    <td>${count}&#x2022; ${pentagonHeading}</td>
    <td>${areaOfPentagon}cm<sup>2</sup></td>
    <td>
    <button class='btn btn-primary'>Convert to m<sup>2</sub></button>
    </td>
`;
  parent.appendChild(tr);
})
    
//Area of PITriangle where PI=3.14;
document.getElementById("btn-pi-triangle").addEventListener('click',function(){
     const piTriangleFirstElement = getTextElementValueById("pi-triangle-first-element");
     const piTriangleSecondElement = getTextElementValueById("pi-triangle-second-element");
     count += 1;
     const areaOfPiTriangle = (3.14 * piTriangleFirstElement * piTriangleSecondElement).toFixed(2);
     const parent = document.getElementById("content-container");
     const piTriangleHeading = document.getElementById("pitriangle-heading").innerText;
     const tr = document.createElement("tr");
     tr.innerHTML =`
     <td>${count}&#x2022; ${piTriangleHeading}</td>
     <td>${areaOfPiTriangle}cm<sup>2</sup></td>
     <td>
     <button class='btn btn-primary'>Convert to m<sup>2</sub></button>
     </td>
 `;
   parent.appendChild(tr);
 })
     
// click Blog and visit answer page
  document.getElementById("btn-blog").addEventListener('click', function(){
 window.location.href='answer.html'
 })

  // Random color effect 
const colorEffects = document.querySelectorAll('.random-color');
for (const colorEffect of colorEffects) {
  colorEffect.addEventListener('mouseenter', function() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorEffect.style.backgroundColor = color;
  });

  colorEffect.addEventListener('mouseleave', function() {
    colorEffect.style.backgroundColor = 'white';
  });
}

