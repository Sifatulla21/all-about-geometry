// Clear Input Field
function clearInputField(id){
    document.getElementById(id).value = " ";
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
// Pentagon Calculate Button
document.getElementById('calculatePentagon').addEventListener('click', function(){

    pentagonCalculate();
    document.getElementById('pentagonShowHide').style.display = 'block';
    clearInputField('penP');
    clearInputField('penB');

});
// Parallelogram Calculate Button
document.getElementById('calculateParallelogram').addEventListener('click', function(){

    parallelogramCalculate();
    document.getElementById('parallelogramShowHide').style.display = 'block';
    clearInputField('parBase');
    clearInputField('parHeight');

});