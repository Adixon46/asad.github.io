
let person  = [];
let salaries = [];


function addSalary(){

    person.push(prompt("Enter employees name"))
    salaries.push(parseInt(prompt("Enter a salary")))
    
console.log(person)
console.log(salaries)

}


function displayResults(){


  for(var i = 0; i < person.length; i++){

    person[i]

  }  


  for(var i = 0; i < salaries.length; i++){

    salaries[i]

  }  

document.getElementById("name").innerHTML = person[i];

document.getElementById("money").innerHTML = salaries[i];
    

{



}
}


function displaySalary(){

    document.getElementById("displayS").innerHTML = "Hello World";


}