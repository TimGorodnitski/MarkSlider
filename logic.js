
var slider1 = document.getElementById("slider1");
var output1 = document.getElementById("slider1value");
var name1 = document.getElementById("slider1name");
var total1 = document.getElementById("total1name");
var total1value = document.getElementById("total1value");
output1.innerHTML = slider1.value + "%"; // Display the default slider value
name1.innerHTML = document.getElementById("dropdown1").value; // Display the default name value
total1.innerHTML = document.getElementById("dropdown1").value; // Display the default name value

var slider2 = document.getElementById("slider2");
var output2 = document.getElementById("slider2value");
var name2 = document.getElementById("slider2name");
var total2 = document.getElementById("total2name");
var total2value = document.getElementById("total2value");
output2.innerHTML = slider2.value + "%"; // Display the default slider value
name2.innerHTML = document.getElementById("dropdown2").value; // Display the default name value
total2.innerHTML = document.getElementById("dropdown2").value; // Display the default name value

var slider3 = document.getElementById("slider3");
var output3 = document.getElementById("slider3value");
var name3 = document.getElementById("slider3name");
var total3 = document.getElementById("total3name");
var total3value = document.getElementById("total3value");
output3.innerHTML = slider3.value + "%"; // Display the default slider value
name3.innerHTML = document.getElementById("dropdown3").value; // Display the default name value
total3.innerHTML = document.getElementById("dropdown3").value; // Display the default name value

function updateDropdowns(){
    name1.innerHTML = document.getElementById("dropdown1").value;
    total1.innerHTML = document.getElementById("dropdown1").value;
    name2.innerHTML = document.getElementById("dropdown2").value;
    total2.innerHTML = document.getElementById("dropdown2").value;
    name3.innerHTML = document.getElementById("dropdown3").value;
    total3.innerHTML = document.getElementById("dropdown3").value;
}


// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
    output1.innerHTML = this.value + "%";
}

slider2.oninput = function () {
    output2.innerHTML = this.value + "%";
}

slider3.oninput = function () {
    output3.innerHTML = this.value + "%";
}

var spent1 = document.getElementById("spent1");
var spent2 = document.getElementById("spent2");
var spent3 = document.getElementById("spent3");
var spentTotal = document.getElementById("spentTotal");

spent1.oninput = function () {
    spentTotal.innerHTML = (parseInt(spent1.value) + parseInt(spent2.value) + parseInt(spent3.value));
}

spent2.oninput = function () {
    spentTotal.innerHTML = (parseInt(spent1.value) + parseInt(spent2.value) + parseInt(spent3.value));
}

spent3.oninput = function () {
    spentTotal.innerHTML = (parseInt(spent1.value) + parseInt(spent2.value) + parseInt(spent3.value));
}




