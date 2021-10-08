
let person  = [];
let salaries = [];


function addSalary(){

    person.push(prompt("Enter employees name"))
    salaries.push(parseInt(prompt("Enter a salary")))
    
console.log(person)
console.log(salaries)

}


function displayResults(){


  

  }  




function displaySalary(){

    //document.getElementById("name").innerHTML = person;

//document.getElementById("money").innerHTML = salaries;
   
var table = document.getElementById("results_table");

for(var i = 0; i < table.rows.length; i++)
{

    


table.innerHTML = person[i];

}


    for(var j = 0; j < table.length; j++)
{
    
    
    table.innerHTML = salaries[j];
}
    
} 