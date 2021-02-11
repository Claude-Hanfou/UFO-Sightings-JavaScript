// // from data.js
var tableData = data;

// // // // // YOUR CODE HERE!
// // // // // // // Get a reference to the table body
var tbody = d3.select("tbody");

// // // // // Console.log the ufo data from data.js
console.log(data);

// // // // Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
});

// // // // // // Step 2:  Use d3 to append one table row `tr` for ufo report object
// // // // // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
});

// // // // // // Step 3:  Use `Object.entries` to console.log ufo report value
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");

  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// // // // // // Step 4: Use d3 to append 1 cell per ufo report value 
// data.forEach(function(ufoSightings) {
//   console.log(ufoSightings);
//   var row = tbody.append("tr");

//   Object.entries(ufoSightings).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo report object
//     var cell = row.append("td");
//   });
// });

// // // // // // Step 5: Use d3 to update each cell's text with
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

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");


  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");


  //console.log(inputValue);
//   console.log(tableData);

  var filteredData =  tableData.filter(table => table.datetime === inputValue && 
    table.city === inputValue2  &&
    table.city === inputValue2 &&
    table.state === inputValue3 &&
    table.country === inputValue4 &&
    table.shape === inputValue5 
  );

  console.log(filteredData);

  return filteredData;

}

//use update table function and runEnter function to return filtered data

updateTable(data); 
button.on("click", function() {
  var result = runEnter(data);
  updateTable(result);
});