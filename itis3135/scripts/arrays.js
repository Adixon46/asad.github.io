
let person  = [];
let salaries = [];

var table = document.getElementById("results_table");
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
   


for(var i = 0; i < results_table.rows.length; i++)
{




results_table.rows.innerHTML = person[i];

}


    for(var j = 0; j < results_table.rows.length; j++)
{
    
    
    results_table.rows.innerHTML = salaries[j];
}
    
} 