// // Switch function
switch(expression) {
    case "A":
      console.log(1)
      break;
    case "B":
      // code block
      break;
    default:
      // code block
  }

// ### Option A

// * Create a function, using a switch statement, that takes an uppercase letter as an argument and prints to the console the corresponding numbers for the following letters:


function whichLetter(letter){
    switch(letter) {
        case ("A");
            console.log(1);
            break;
        case ("B");
            console.log(2);
            break;
        case ("C")
            console.log(3);
            break;

    }
}
//   * A: 1

//   * B: 2

//   * C: 3

//   * D: 4

//   * E: 5

// * If the argument is not one of the letters above, the switch statement should print a zero.

// ### Option B

// * Create a dynamic line chart with a dropdown menu in Plotly.
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };
  
  var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };
  
  var data = [trace1, trace2];
  
  Plotly.newPlot('myDiv', data);

//   * It should use a switch statement to select from the three datasets.

//   * The chart should display Dataset 1 after the page loads.

//   * The switch statement should include a fourth dummy dataset as its default option.

// * Your datasets are the following:

  ```js
  // Default dataset:
  x = [1, 2, 3, 4, 5];
  y = [1, 2, 3, 4, 5];

  // Dataset 1:
  x = [1, 2, 3, 4, 5];
  y = [1, 2, 4, 8, 16];

  // Dataset 2:
  x = [10, 20, 30, 40, 50];
  y = [1, 10, 100, 1000, 10000];

  // Dataset 3:
  x = [100, 200, 300, 400, 500];
  y = [10, 100, 50, 10, 0];
  ```

- - -