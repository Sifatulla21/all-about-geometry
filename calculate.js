let serial = 1;
// Clear Input Field
function clearInputField(id){
    document.getElementById(id).value = " ";
}
// Validation
function validateInput(id1, id2, id3,id4){
    let firstInp = document.getElementById(id1).value;
    let secondInp = document.getElementById(id2).value;
    if(firstInp>0 && secondInp>0){
        serial = serial+1;
        document.getElementById(id3).style.display = 'none';
        document.getElementById(id4).style.display = 'block';
    }
    else{
        document.getElementById(id3).style.display = 'block';
        document.getElementById(id4).style.display = 'none';
    }
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
        document.addEventListener("mouseover", function(){
        document.getElementById(id).style.backgroundColor = randomColor();
      });
  }
//   Set Serial No
function setSerialNo(id){
    document.getElementById(id).innerHTML= `${serial}`;
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
    const triangleArea = (0.5 * takeTriBase * takeTriHeight).toFixed(2);
    const setTriValues = document.getElementById('triangleAreaShow');
    setTriValues.innerText = triangleArea;
    setSerialNo('sNo1');
    
}
// Calculate Rectangle
function rectangleCalculate(){
    const takeRecWidth = document.getElementById('recWidth').value;
    const takeRecLength = document.getElementById('recLength').value;
    const rectangleArea = (takeRecWidth * takeRecLength).toFixed(2);
    const setRecValues = document.getElementById('rectangleAreaShow');
    setRecValues.innerText = rectangleArea;
    setSerialNo('sNo2');
}
// Calculate Parallelogram
function parallelogramCalculate(){
    const takeParWidth = document.getElementById('parBase').value;
    const takeParLength = document.getElementById('parHeight').value;
    const parallelogramArea = (takeParWidth * takeParLength).toFixed(2);
    const setParValues = document.getElementById('parallelogramAreaShow');
    setParValues.innerText = parallelogramArea;
    setSerialNo('sNo3');
}
// Calculate Rhombus
function rhombusCalculate(){
    const takeRhomDio1 = document.getElementById('rhomDio1').value;
    const takeRhomDio2 = document.getElementById('rhomDio2').value;
    const rhombusArea = (0.5 * takeRhomDio1 * takeRhomDio2).toFixed(2);
    const setRhomValues = document.getElementById('rhombusAreaShow');
    setRhomValues.innerText = rhombusArea;
    setSerialNo('sNo4');
}
// Calculate Pentagon
function pentagonCalculate(){
    const takePenP = document.getElementById('penP').value;
    const takePenB = document.getElementById('penB').value;
    const penArea = (0.5* takePenP * takePenB).toFixed(2);
    const setPenValues = document.getElementById('pentagonAreaShow');
    setPenValues.innerText = penArea;
    setSerialNo('sNo5');
}
// Calculate Ellipse
function ellipseCalculate(){
    const takeEllA = document.getElementById('a').value;
    const takeEllB = document.getElementById('b').value;
    const ellipseArea = (3.1416* takeEllA * takeEllB).toFixed(2);
    const setEllValues = document.getElementById('ellipseAreaShow');
    setEllValues.innerText = ellipseArea;
    setSerialNo('sNo6');
}
// Triangle Calculate Button
document.getElementById('calculateTriangle').addEventListener('click', function(){
    triangleCalculate();
    validateInput('triBase', 'triHeight','invTriangle', 'triangleShowHide');
    clearInputField('triBase');
    clearInputField('triHeight');

});
// Rectangle Calculate Button
document.getElementById('calculateRectangle').addEventListener('click', function(){

    rectangleCalculate();
    validateInput('recWidth', 'recLength','invRectangle','rectangleShowHide');
    clearInputField('recWidth');
    clearInputField('recLength');
    

});
// Parallelogram Calculate Button
document.getElementById('calculateParallelogram').addEventListener('click', function(){

    parallelogramCalculate();
    validateInput('parBase', 'parHeight', 'invParallelogram','parallelogramShowHide');
    clearInputField('parBase');
    clearInputField('parHeight');

});
// Rhombus Calculate Button
document.getElementById('calculateRhombus').addEventListener('click', function(){

    rhombusCalculate();
    validateInput('rhomDio1', 'rhomDio2','invRhombus','rhombusShowHide');
    clearInputField('rhomDio1');
    clearInputField('rhomDio2');

});
// Pentagon Calculate Button
document.getElementById('calculatePentagon').addEventListener('click', function(){

    pentagonCalculate();
    validateInput('penP', 'penB','invPentagon','pentagonShowHide');
    clearInputField('penP');
    clearInputField('penB');

});
// Ellipse Calculate Button
document.getElementById('calculateEllipse').addEventListener('click', function(){

    ellipseCalculate();
    validateInput('a', 'b','invEllipse','ellipseShowHide');
    clearInputField('a');
    clearInputField('b');

});

