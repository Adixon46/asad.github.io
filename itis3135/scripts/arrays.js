
let person  = [];
let salaries = [];


function addSalary(){

    person.push(prompt("Enter employees name"))
    salaries.push(parseInt(prompt("Enter a salary")))
    
console.log(person)
console.log(salaries)


for(var i = 0; i < person.length; i++){

document.getElementById("sel").innerHTML = person[i];
}
}


function displayResults(){


  

  }  




function displaySalary(){

    document.getElementById("results_table")
   var people = document.getElementById("name").innerHTML = person;

  var paper = document.getElementById("money").innerHTML = salaries;
   

    
} 


