// @TODO: YOUR CODE HERE
var trace1 = {
    y: temps.newyork,
    type: "box",
    boxpoints: "all",
    name: "New York temps"
};

var trace2 = {

    y: temps.houston, 
    type: "box", 
    boxpoints: "all",
    name: "Houston temps"
};

var data = [trace1, trace2];

var layout = {
    title: "Temperature where ....",
    yaxis: {title: "Organ" };

};
Plotly.newPlot("plot", data, layout );