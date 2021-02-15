// // // // // // from data.js
var tableData = data;

// // // // // // // // // // YOUR CODE HERE!
// // // // // // // // // // // // Get a reference to the table body
var tbody = d3.select("tbody");

// // // // // // // // Console.log the ufo data from data.js
console.log(data);

// // // // // // // // // ufo report values (date,city,state,country,shape,duration,comments)
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});




//Filtering the data

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form for the date
function runEnter() {

  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
 
  var filteredData1 =  tableData.filter(table => table.datetime === inputValue)

  console.log(filteredData1);

  filteredData1.forEach(function(date) {
    console.log(date);
    var drow = tbody.append("tr");
    Object.entries(date).forEach(function([key, value]) {
      console.log(key, value);
      var celld = drow.append("td");
      celld.text(value);
    });
  });

}



// Complete the event handler function for the form for the city
function runEnter() {

  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement2 = d3.select("#city");
  
  // Get the value property of the input element
  var inputValue2 = inputElement2.property("value");

  var filteredData2 =  tableData.filter(table => table.city === inputValue2)

  console.log(filteredData2);

  filteredData2.forEach(function(cit) {
    console.log(cit);
    var crow = tbody.append("tr");
    Object.entries(cit).forEach(function([key, value]) {
      console.log(key, value);
      var cellc = crow.append("td");
      cellc.text(value);
    });
  });

}


// // // Complete the event handler function for the form for the state

// function runEnter() {

//   tbody.html("");

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement3 = d3.select("#state");

//   // Get the value property of the input element
//   var inputValue3 = inputElement3.property("value");

//   var filteredData3 =  tableData.filter(table => table.state === inputValue3)
  
//   console.log(filteredData3);

//   filteredData3.forEach(function(stat) {
//     console.log(stat);
//     var row = tbody.append("tr");
//     Object.entries(stat).forEach(function([key, value]) {
//       console.log(key, value);
//       var cells = row.append("td");
//       cells.text(value);
//     });
//   });

// }


// // Complete the event handler function for the form for the country
// function runEnter() {

//   tbody.html("");

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement4 = d3.select("#country");
  


//   // Get the value property of the input element
//   var inputValue4 = inputElement4.property("value");

//   var filteredData4 =  tableData.filter(table => table.country === inputValue4)
  
//   console.log(filteredData4);


//   filteredData4.forEach(function(count) {
//     console.log(count);
//     var row = tbody.append("tr");
//     Object.entries(count).forEach(function([key, value]) {
//       console.log(key, value);
//       var cellc = row.append("td");
//       cellc.text(value);
//     });
//   });

// }

// // Complete the event handler function for the form for the shape
// function runEnter() {

//   tbody.html("");

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement5 = d3.select("#shape");
  
//   // Get the value property of the input element
//   var inputValue5 = inputElement5.property("value");

//   var filteredData5 =  tableData.filter(table => table.shape === inputValue5)
 
//   console.log(filteredData5);

//   filteredData5.forEach(function(scit) {
//     console.log(scit);
//     var row = tbody.append("tr");
//     Object.entries(scit).forEach(function([key, value]) {
//       console.log(key, value);
//       var cellc = row.append("td");
//       cellc.text(value);
//     });
//   });

// }