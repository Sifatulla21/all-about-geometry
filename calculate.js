// Clear Input Field
function clearInputField(id){
    document.getElementById(id).value = " ";
}
// Display Block
function displayMessage(id){
    document.getElementById(id).style.display = 'block';

}
// Validation
function validateInput(id1, id2, id3,id4){
    let firstInp = document.getElementById(id1).value;
    let secondInp = document.getElementById(id2).value;
    if(firstInp>0 && secondInp>0){
        document.getElementById(id3).style.display = 'none';
    }
    else{
        document.getElementById(id3).style.display = 'block';
        document.getElementById(id4).style.display = 'none';
    }
}
// Calculate Triangle
function triangleCalculate(){
    const takeTriBase = document.getElementById('triBase').value;
    const takeTriHeight = document.getElementById('triHeight').value;
    const triangleArea = (0.5 * takeTriBase * takeTriHeight).toFixed(2);
    const setTriValues = document.getElementById('triangleAreaShow');
    setTriValues.innerText = triangleArea;
}
// Calculate Rectangle
function rectangleCalculate(){
    const takeRecWidth = document.getElementById('recWidth').value;
    const takeRecLength = document.getElementById('recLength').value;
    const rectangleArea = (takeRecWidth * takeRecLength).toFixed(2);
    const setRecValues = document.getElementById('rectangleAreaShow');
    setRecValues.innerText = rectangleArea;
}
// Calculate Parallelogram
function parallelogramCalculate(){
    const takeParWidth = document.getElementById('parBase').value;
    const takeParLength = document.getElementById('parHeight').value;
    const parallelogramArea = (takeParWidth * takeParLength).toFixed(2);
    const setParValues = document.getElementById('parallelogramAreaShow');
    setParValues.innerText = parallelogramArea;
}
// Calculate Rhombus
function rhombusCalculate(){
    const takeRhomDio1 = document.getElementById('rhomDio1').value;
    const takeRhomDio2 = document.getElementById('rhomDio2').value;
    const rhombusArea = (0.5 * takeRhomDio1 * takeRhomDio2).toFixed(2);
    const setRhomValues = document.getElementById('rhombusAreaShow');
    setRhomValues.innerText = rhombusArea;
}
// Calculate Pentagon
function pentagonCalculate(){
    const takePenP = document.getElementById('penP').value;
    const takePenB = document.getElementById('penB').value;
    const penArea = (0.5* takePenP * takePenB).toFixed(2);
    const setPenValues = document.getElementById('pentagonAreaShow');
    setPenValues.innerText = penArea;
}
// Calculate Ellipse
function ellipseCalculate(){
    const takeEllA = document.getElementById('a').value;
    const takeEllB = document.getElementById('b').value;
    const ellipseArea = (3.1416* takeEllA * takeEllB).toFixed(2);
    const setEllValues = document.getElementById('ellipseAreaShow');
    setEllValues.innerText = ellipseArea;
}
// Triangle Calculate Button
document.getElementById('calculateTriangle').addEventListener('click', function(){

    triangleCalculate();
    displayMessage('triangleShowHide');
    validateInput('triBase', 'triHeight','invTriangle', 'triangleShowHide');
    clearInputField('triBase');
    clearInputField('triHeight');

});
// Rectangle Calculate Button
document.getElementById('calculateRectangle').addEventListener('click', function(){

    rectangleCalculate();
    displayMessage('rectangleShowHide');
    validateInput('recWidth', 'recLength','invRectangle','rectangleShowHide');
    clearInputField('recWidth');
    clearInputField('recLength');

});
// Parallelogram Calculate Button
document.getElementById('calculateParallelogram').addEventListener('click', function(){

    parallelogramCalculate();
    displayMessage('parallelogramShowHide');
    validateInput('parBase', 'parHeight', 'invParallelogram','parallelogramShowHide');
    clearInputField('parBase');
    clearInputField('parHeight');

});
// Rhombus Calculate Button
document.getElementById('calculateRhombus').addEventListener('click', function(){

    rhombusCalculate();
    displayMessage('rhombusShowHide');
    validateInput('rhomDio1', 'rhomDio2','invRhombus','rhombusShowHide');
    clearInputField('rhomDio1');
    clearInputField('rhomDio2');

});
// Pentagon Calculate Button
document.getElementById('calculatePentagon').addEventListener('click', function(){

    pentagonCalculate();
    displayMessage('pentagonShowHide');
    validateInput('penP', 'penB','invPentagon','pentagonShowHide');
    clearInputField('penP');
    clearInputField('penB');

});
// Ellipse Calculate Button
document.getElementById('calculateEllipse').addEventListener('click', function(){

    ellipseCalculate();
    displayMessage('ellipseShowHide');
    validateInput('a', 'b','invEllipse','ellipseShowHide');
    clearInputField('a');
    clearInputField('b');

});
