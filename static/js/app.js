// from data.js
var tableData = data;

// YOUR CODE HERE!

// HTML Code
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Create a date form in your HTML document

// function to display UFO sightings
function tableDisplay(ufoSightings) {
    // select the existing ufo table element 
    var tbody = d3.select("#ufo-body");
    
    // then adds new rows of data for each UFO sighting.
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // clear the table for new data
  function deleteTbody() {
    d3.select("#ufo-body")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // initial display of all UFO sightings
  console.log(tableData);
  tableDisplay(tableData);
  
  // write JavaScript code that will listen for events
  /*
      1. select the element that we will add event listener to
  */
  var button = d3.select("#filter-btn");
  
  // write JavaScript code that will listen for events
  /*
      2. create event listener
  */
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    // selecting the value of the datetime input
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      // display the whole database if the date field has no date
      var filteredData = tableData;
    } else {
      // otherwise, display the filtered dataset  
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
  
    // display message if no records found
    if (filteredData.length == 0) {
      d3.select("#ufo-body")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    // print the data if found
    console.log(filteredData);
    tableDisplay(filteredData);
  });