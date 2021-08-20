// Initializes the page with a default plot
function init() {
  data = [{
    x = {}
  }];
  var CHART = d3. selectALL("#plot").node();

  Plotly.newPlot(CHART, data);
}

// Call updatePlotly() when a change takes place to the DOM
function changeHandler() {
  var dropdownMenu = d3.select(#selDataset");

  var dataset = dropdownMenu.node().value;

  var CHART = d3.selectALL("#plot").node();

  switch(dataset) {
    case ("dataset1"):
      x = []
      y = []
      break;
    case("dataset2"):
      x = []
      y = []
      break;
    case ("dataset3")
      x = []
      y = []
      break;
    default:
      console.log("Something went wrong")
  }
}
Plotly.restyle(CHART, "x", [x])
Plotly.restyle(CHART, "y", [y])

init();
d3.selectALL("body").on("change")
// This function is called when a dropdown menu item is selected

  // Use D3 to select the dropdown menu

  // Assign the value of the dropdown menu option to a variable


  // Initialize x and y arrays



  // Note the extra brackets around 'x' and 'y'
