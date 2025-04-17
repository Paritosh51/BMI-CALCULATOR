function updateHeightValue(value) {
const heightValueElement = document.getElementById("height_value");
if (heightValueElement) {
    heightValueElement.textContent = value;
}
}
function updateWeightValue(value) {
const weightValueElement = document.getElementById("weight_value");
if (weightValueElement) {
    weightValueElement.textContent = value;
}
}
const button = document.querySelector("button");

button.addEventListener("click", function() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const genderElement = document.querySelector("input[name='gender']:checked");
    const gender = genderElement ? genderElement.value : null;

    if (!age || !gender || !height || !weight) {
        alert("Please fill in all fields");
        return;
    }
    if(age>120 || age<0){
alert("Please enter a valid age");
return;
    }
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    const result = document.querySelector("p");
    result.textContent = bmi;

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
        result.style.fontSize = "20px";
        result.style.color = "yellow";
        result.style.fontWeight = "bold";
    } 
    else if (bmi < 24.9) {
        category = "Normal Weight";
        result.style.fontSize = "20px";
        result.style.color = "green";
        result.style.fontWeight = "bold";
    } 
    else if (bmi < 29.9) {
        category = "Overweight";
        result.style.fontSize = "20px";
        result.style.color = "orange";
        result.style.fontWeight = "bold";
    } 
    else {
        category = "Obese";
        result.style.fontSize = "20px";
        result.style.color = "red";
        result.style.fontWeight = "bold";
    }

    result.innerHTML += ` (${category})`;
});
