
let person  = [];
let salaries = [];
var count =0;

function addSalary(){

    
   person.push(prompt("Enter employees name"))

    salaries.push(parseInt(prompt("Enter a salary")))
    
console.log(person)
console.log(salaries)

for(var i = 0; i <person.length  ; i++){


count++;
}
var select = document.getElementById("sel");
  var option = document.createElement("option")
  option.text = person[count];
  select.add(option)
}


function displayResults(){


  

  }  




function displaySalary(){

    document.getElementById("results_table")
   var people = document.getElementById("name").innerHTML = person;

  var paper = document.getElementById("money").innerHTML = salaries;
   

  
  
} 


