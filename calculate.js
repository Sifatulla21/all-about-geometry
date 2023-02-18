let serial = 1;
// Set Table data
function setTableData(id1,id2,id3,inp1,inp2){
    let container = document.getElementById('tableContainer');
    let tr = document.createElement('tr');
    tr.innerHTML = `
    
    <td class="ps-3">${serial}</td>
    <td class="ps-3">${id1}</td>
    <td class="ps-3">${id2} cm<sup>2</sup></td>
    <td class="ps-3"><button class="btn btn-primary ms-4" type="button">CM <sup>2</sup> to M <sup>2</sup></button>

    `;
    if(inp1>0 && inp2>0){
        serial=serial+1;
        container.appendChild(tr);
        document.getElementById(id3).style.display = 'none';
    }
    else{
        document.getElementById(id3).style.display = 'block';
    }

}
// Clear Input Field
function clearInputField(id){
    document.getElementById(id).value = " ";
}
// Random background Color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
//   Add background color on card
  function addBgColorOnHover(id){
        
        document.getElementById(id).addEventListener('mouseover', function(){
            document.getElementById(id).style.backgroundColor = randomColor();
        });
      }
  addBgColorOnHover('triangle');
  addBgColorOnHover('rectangle');
  addBgColorOnHover('parallelogram');
  addBgColorOnHover('rhombus');
  addBgColorOnHover('pentagon');
  addBgColorOnHover('ellipse');

// Calculate Triangle
function triangleCalculate(){
    
    const takeTriBase = document.getElementById('triBase').value;
    const takeTriHeight = document.getElementById('triHeight').value;
    const takeTriCardTitle = document.getElementById('triTitle').innerText;
    const triangleArea = (0.5 * takeTriBase * takeTriHeight).toFixed(2);
    setTableData(takeTriCardTitle,triangleArea,"invTriangle",takeTriBase,takeTriHeight);
    

    
}
// Calculate Rectangle
function rectangleCalculate(){
    const takeRecWidth = document.getElementById('recWidth').value;
    const takeRecLength = document.getElementById('recLength').value;
    const takeRecCardTitle = document.getElementById('rectTitle').innerText;
    const rectangleArea = (takeRecWidth * takeRecLength).toFixed(2);
    setTableData(takeRecCardTitle,rectangleArea,"invRectangle",takeRecWidth,takeRecLength);
}
// Calculate Parallelogram
function parallelogramCalculate(){
    const takeParWidth = document.getElementById('parBase').value;
    const takeParLength = document.getElementById('parHeight').value;
    const takeParaCardTitle = document.getElementById('paraTitle').innerText;
    const parallelogramArea = (takeParWidth * takeParLength).toFixed(2);
    setTableData(takeParaCardTitle,parallelogramArea,"invParallelogram",takeParWidth,takeParLength);
}
// Calculate Rhombus
function rhombusCalculate(){
    const takeRhomDio1 = document.getElementById('rhomDio1').value;
    const takeRhomDio2 = document.getElementById('rhomDio2').value;
    const takeRhomCardTitle = document.getElementById('rhomTitle').innerText;
    const rhombusArea = (0.5 * takeRhomDio1 * takeRhomDio2).toFixed(2);
    setTableData(takeRhomCardTitle,rhombusArea,"invRhombus",takeRhomDio1,takeRhomDio2);
}
// Calculate Pentagon
function pentagonCalculate(){
    const takePenP = document.getElementById('penP').value;
    const takePenB = document.getElementById('penB').value;
    const takePentaCardTitle = document.getElementById('pentaTitle').innerText;
    const penArea = (0.5* takePenP * takePenB).toFixed(2);
    setTableData(takePentaCardTitle,penArea,"invPentagon",takePenP,takePenB);
}

// Calculate Ellipse
function ellipseCalculate(){
    const takeEllA = document.getElementById('a').value;
    const takeEllB = document.getElementById('b').value;
    const takeEllipseCardTitle = document.getElementById('ellipseTitle').innerText;
    const ellipseArea = (3.1416* takeEllA * takeEllB).toFixed(2);
    setTableData(takeEllipseCardTitle,ellipseArea,"invEllipse",takeEllA,takeEllB);
}
// Triangle Calculate Button
document.getElementById('calculateTriangle').addEventListener('click', function(){
    triangleCalculate();
    clearInputField('triBase');
    clearInputField('triHeight');

});
// Rectangle Calculate Button
document.getElementById('calculateRectangle').addEventListener('click', function(){

    rectangleCalculate();
    clearInputField('recWidth');
    clearInputField('recLength');
    

});
// Parallelogram Calculate Button
document.getElementById('calculateParallelogram').addEventListener('click', function(){

    parallelogramCalculate();
    clearInputField('parBase');
    clearInputField('parHeight');

});
// Rhombus Calculate Button
document.getElementById('calculateRhombus').addEventListener('click', function(){

    rhombusCalculate();
    clearInputField('rhomDio1');
    clearInputField('rhomDio2');

});
// Pentagon Calculate Button
document.getElementById('calculatePentagon').addEventListener('click', function(){

    pentagonCalculate();
    clearInputField('penP');
    clearInputField('penB');

});
// Ellipse Calculate Button
document.getElementById('calculateEllipse').addEventListener('click', function(){

    ellipseCalculate();
    clearInputField('a');
    clearInputField('b');

});



