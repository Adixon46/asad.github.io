
let person  = [];
let salaries = [];


function addSalary(){

    
   var people = document.getElementById("per").value;

person.push(people);

var money = document.getElementById("sal").value;
salaries.push(money)

   
console.log(person)
console.log(salaries)


    var select = document.getElementById("sel");
    var option = document.createElement("option")
    option.text = person[person.length -1];
    select.add(option)



}


function displayResults(){


  

  }  




function displaySalary(){

    document.getElementById("results_table")
   var people = document.getElementById("name").innerHTML = person;

  var paper = document.getElementById("money").innerHTML = salaries;
   

  
  
} 


