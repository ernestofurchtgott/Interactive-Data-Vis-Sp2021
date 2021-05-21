d3.json('../data/IDV_proj1.json', d3.autoType)
.then(data => {
  console.log("data", data)
//**** */ constants
//const width = window.innerWidth *.8 ;
//const height = 500;
const width = 500;
const height = window.innerHeight *.8 ;

//d3.json("../data/environmentRatings.json", d3.autoType).then(raw_data => {
    // + SET YOUR DATA PATH
    //console.log("raw_data", raw_data);
    //state.data = raw_data;
    //init();
  //});




xScale = d3
  .scaleLinear()
  .domain (data.map (d=> d.count))
  .range [0, width]

yScale = d3
  .scaleBand()
  .domain(data.map(d=> d.Link_name))
  .range([height, 0])

// SCALES
// xscale - categorical, activity

//const xScale = d3
  //.scaleBand()
  //.domain(data.map(d=> d.activity))
  //.range([0, width]) // visual variable
  //.paddingInner(.2)

  // yscale - linear,count
//const yScale = d3
  //.scaleLinear()
  //.domain([0, d3.max(data, d=> d.count)])
  //.range([height, 0])

// svg
const svg = d3
  .select("#barchart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

// bars
svg
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("width", xScale.bandwidth())
  .attr("height", d=> height - yScale(d.count))
  .attr("x", d=>xScale(d.activity))
  .attr("y", d=> yScale(d.count))


  //Setting the hierarchies of infromation
var matrix = [
    [ 11975, 5871, 8916, 2868 ],
    [ 1951, 10048, 2060, 6171 ],
    [ 8010, 16145, 8090, 8045 ], 
    [ 1013, 990, 940, 6907 ]
];



var dim1 = d3.select("#data_2")//need to select where it's going to be located
               .append("h1")//need to relate it to a header category
               .append("ul")//needs to be a unordered list
               .selectAll("li")//?
               .data(data, d=> d.Link_name)//
               .enter()
               .append("li")
               .attr("style", "list-style:none outside; padding:0; margin:0;")
               .text(function(d, i) { return "Board " + (i + 1) + " "; });


var dim2 = dim1
.selectAll("li")
.data(function(d, i) 
{
    console.log('dim2: ', d, i);
    return d;
})
.enter()
.append("ul")
.append("li")
.append("h5")
.attr("style", "list-style: disc outside; property:initial;")
.append("a")
.attr("href", "https://www.google.com")
.text(function(d) { return d; });

var dim3 = dim2.selectAll("li").data(function(d, i) {
    console.log('dim3: ', d, i);
    return [ d, d / 10, d / 100 ];
}).enter().append("h8").append("ul").append('li').attr("style", "list-style: circle inside;").text(function(d) { return d; });

d3.select("data2")
    .append('ul');

const ul = d3.select('ul');
ul.append('li').text('prueba');

const li = ul.selectAll('li').enter().append('ul').append('li').text('Sublink');
//ul.append('li')
list.append("li");
list.append("li");
list.append("li");
list.append("li");
list.append("li");
list.append("li");

})