// // from data.js
var tableData = data;

// // // // // YOUR CODE HERE!
// // // // // // // Get a reference to the table body
var tbody = d3.select("tbody");

// // // // // Console.log the ufo data from data.js
console.log(data);

// // // // // // ufo report values (date,city,state,country,shape,duration,comments)
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


// Update table with a new dataset by creating a function
function updateTable(dataset) {
  tbody.html('');
  dataset.forEach((toBeDefined) => {
    var row = tbody.append("tr");
    Object.entries(toBeDefined).forEach(([key,value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

// Complete the event handler function for the form
function runEnter() {

  tbody.html("");
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //console.log(inputValue);
//   console.log(tableData);

  var filteredData =  tableData.filter(table => table.datetime === inputValue);

  console.log(filteredData);


filteredData.forEach(function(date) {
    console.log(date);
    var row = tbody.append("tr");
    Object.entries(date).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cellc = row.append("td");
      cellc.text(value);
    });
  });
  

}

