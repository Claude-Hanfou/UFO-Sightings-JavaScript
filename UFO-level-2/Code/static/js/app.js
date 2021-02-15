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
  
  //Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement1 = d3.select("#city");
  var inputElement2 = d3.select("#state");
  var inputElement3 = d3.select("#country");
  var inputElement4 = d3.select("#shape");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");

  var filteredData =  tableData.filter( table => {
    return (table.datetime === inputValue  || !inputValue)&& 
            (table.city === inputValue1 || !inputValue1) &&
            (table.state === inputValue2 || !inputValue2) &&
            (table.country === inputValue3|| !inputValue3) &&
            (table.shape === inputValue4 || !inputValue4)
  })




  console.log(filteredData);

  filteredData.forEach(function(date) {
    console.log(date);
    var row = tbody.append("tr");
    Object.entries(date).forEach(function([key, value]) {
      console.log(key, value);
      var celld = row.append("td");
      celld.text(value);
    });
  });

}