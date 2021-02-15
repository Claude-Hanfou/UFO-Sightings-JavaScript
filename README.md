# JavaScript and DOM Manipulation


## Automatic Table and Date Search
An HTML web page was created to display the UFO data

Using the UFO dataset provided in the form of an array of JavaScript objects, the code appends a table to a web page and then adds new rows of data for each UFO sighting.

The table has a column for date/time, city, state, country, shape, and comment .

A date form was used in the your HTML document to write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

```
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

```


## Multiple Search Categories
Using multiple input tags and/or select dropdowns, the JavaScript code ensures that the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

date/time
city
state
country
shape


```
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
