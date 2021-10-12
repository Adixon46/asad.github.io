
let person = [];
let salaries = [];


function addSalary() 
{


  cursor()
  

  var money = document.getElementById("sal").value;
  

  if(money !== "")
  {
  salaries.push(money)
  
  }
else if(money === "")
{

  alert("Enter a new value")

}

var people = document.getElementById("per").value;
  if (people !== "" && money !== "" ) 
  {


    person.push(people);

  }
  else if(people === "" ){

    alert("Enter a new value")
    
  }




  console.log(person)
  console.log(salaries)


  var select = document.getElementById("sel");
  var option = document.createElement("option")
  option.text = person[person.length - 1];
  select.add(option)

  
  }



function displayResults() {

  let count = 0;
  let total = 0;
  let max = 0;
for(var i = 0; i < salaries.length; i++)
{

if(salaries[i] !== undefined)
{
count++;

total += parseInt(salaries[i]) ;

}



let avg = total /count;
console.log(avg)

document.getElementById("p1").innerHTML = avg;
}


 var maxout = Math.max(...salaries)

 console.log(salaries)


 document.getElementById("p2").innerHTML =maxout;

}


 





function displaySalary()
{



  var display = "<tr><td> <h2> table </h2> </td></tr> <tr><td> person </td><td> salaries </td></tr>";

  for (var i = 0; i < person.length; i++) {

    display += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>"

  }

  document.getElementById("results_table").innerHTML = display

}

function cursor()
{

var input = document.getElementById("sel")
{

input.focus();

}

}

