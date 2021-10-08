
let person  = [];
let salaries = [];


function addSalary(){

    person.push(prompt("Enter employees name"))
    salaries.push(parseInt(prompt("Enter a salary")))
    
console.log(person)
console.log(salaries)

}


function displayResults(){

document.getElementById("results_table").innerHTML = addSalary();
    

}


function displaySalary(){

    document.getElementById("displayS").innerHTML = "Hello World";


}