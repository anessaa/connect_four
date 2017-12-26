const grid = [
  [{},{},{},{},{},{},{},{},],
  [{},{},{},{},{},{},{},{},],
  [{},{},{},{},{},{},{},{},],
  [{},{},{},{},{},{},{},{},],
  [{},{},{},{},{color:"red"},{color:"black"},{},{},]
];

const render = () => {
  const svg = document.getElementById("svg");
  let doc = ``;
  for (var i = 0; i < grid.length; i++) {
    var row = grid[i];
    for (var j = 0; j < row.length; j++) {
      const square = grid[i][j];
      const color = square && square.color || 'gray';
      doc = doc +  `<circle fill='${color}' r='30px' cx='${j * 70 + 50}px' cy='${i * 70 + 50}px'></circle>` 
    }
  }
  svg.innerHTML = doc;
};

render();