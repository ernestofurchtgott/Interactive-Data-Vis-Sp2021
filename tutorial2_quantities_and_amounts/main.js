d3.csv('../data/squirrelActivities.csv', d3.autoType)
.then(data =>{
  console.log("data", data)

//
const width = window.innerWidth *.8;
const height = window.innerHeight/3;

//scale
// xScale = categorical, activity
const xScale = d3.scaleBand()
  .domain(data.map(d=> d.activity))
  .range([0, width]) //visualvariable

//Y scale linear count
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d=> d.count)])
  .range([height, 0]) 

const svg = d3.select("#barchart")
.append("svg")
.attr("width", width)
.attr("height", height)

})
