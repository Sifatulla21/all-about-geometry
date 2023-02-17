// Clear Input Field
function clearInputField(id){
    document.getElementById(id).value = " ";
}
// Calculate Triangle
function triangleCalculate(){
    const takeTriBase = document.getElementById('triBase').value;
    const takeTriHeight = document.getElementById('triHeight').value;
    const triangleArea = 0.5 * takeTriBase * takeTriHeight;
    const setTriValues = document.getElementById('triangleAreaShow');
    setTriValues.innerText = triangleArea;
}
// Calculate Rectangle
function rectangleCalculate(){
    const takeRecWidth = document.getElementById('recWidth').value;
    const takeRecLength = document.getElementById('recLength').value;
    const rectangleArea = takeRecWidth * takeRecLength;
    const setRecValues = document.getElementById('rectangleAreaShow');
    setRecValues.innerText = rectangleArea;
}
// Calculate Parallelogram
function parallelogramCalculate(){
    const takeParWidth = document.getElementById('parBase').value;
    const takeParLength = document.getElementById('parHeight').value;
    const parallelogramArea = takeParWidth * takeParLength;
    const setParValues = document.getElementById('parallelogramAreaShow');
    setParValues.innerText = parallelogramArea;
}
// Calculate Rhombus
function rhombusCalculate(){
    const takeRhomDio1 = document.getElementById('rhomDio1').value;
    const takeRhomDio2 = document.getElementById('rhomDio2').value;
    const rhombusArea = 0.5 * takeRhomDio1 * takeRhomDio2;
    const setRhomValues = document.getElementById('rhombusAreaShow');
    setRhomValues.innerText = rhombusArea;
}
// Calculate Rectangle
function rectangleCalculate(){
    const takeRecWidth = document.getElementById('recWidth').value;
    const takeRecLength = document.getElementById('recLength').value;
    const rectangleArea = takeRecWidth * takeRecLength;
    const setRecValues = document.getElementById('rectangleAreaShow');
    setRecValues.innerText = rectangleArea;
}
// Calculate Parallelogram
function parallelogramCalculate(){
    const takeParWidth = document.getElementById('parBase').value;
    const takeParLength = document.getElementById('parHeight').value;
    const parallelogramArea = takeParWidth * takeParLength;
    const setParValues = document.getElementById('parallelogramAreaShow');
    setParValues.innerText = parallelogramArea;
}
// Triangle Calculate Button
document.getElementById('calculateTriangle').addEventListener('click', function(){

    triangleCalculate();
    document.getElementById('triangleShowHide').style.display = 'block';
    clearInputField('triBase');
    clearInputField('triHeight');

});
// Rectangle Calculate Button
document.getElementById('calculateRectangle').addEventListener('click', function(){

    rectangleCalculate();
    document.getElementById('rectangleShowHide').style.display = 'block';
    clearInputField('recWidth');
    clearInputField('recLength');

});
// Parallelogram Calculate Button
document.getElementById('calculateParallelogram').addEventListener('click', function(){

    parallelogramCalculate();
    document.getElementById('parallelogramShowHide').style.display = 'block';
    clearInputField('parBase');
    clearInputField('parHeight');

});
// Rhombus Calculate Button
document.getElementById('calculateRhombus').addEventListener('click', function(){

    rhombusCalculate();
    document.getElementById('rhombusShowHide').style.display = 'block';
    clearInputField('rhomDio1');
    clearInputField('rhomDio2');

});
// Rectangle Calculate Button
document.getElementById('calculateRectangle').addEventListener('click', function(){

    rectangleCalculate();
    document.getElementById('rectangleShowHide').style.display = 'block';
    clearInputField('recWidth');
    clearInputField('recLength');

});
// Parallelogram Calculate Button
document.getElementById('calculateParallelogram').addEventListener('click', function(){

    parallelogramCalculate();
    document.getElementById('parallelogramShowHide').style.display = 'block';
    clearInputField('parBase');
    clearInputField('parHeight');

});