(function() {
  var margin = {top: 40, right: 15, bottom: 50, left: 65},
      width = 700 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var svg = d3.select("#frequency-chart")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


 // SCALES & VARIABLES

// If you operate on time-data, define here how the time points are formatted in your data
 var parseDate = d3.timeParse("%Y-%m-%d")

// In this example, we show occurrances over time - hence the time scale.
 var xPositionScale = d3.scaleTime().range([0,width])

// Define what you want to plot along the y-axis
 var y_variable_options = ["C","B","A"]
 
 // This scale is categorical
 var yPositionScale = d3.scalePoint().domain(y_variable_options).range([height,0])

 // READ IN DATA
 d3.queue()
 	.defer(d3.csv, "data-frequency.csv", 
 		function(d){
 		d.timestamp = parseDate(d.timestamp)
 		return d
 	})
 	.await(ready)

 // MANIPULATE DATA
 function ready (error, datapoints){

 var max_date =  d3.max(datapoints, function(d) { return d.timestamp });
 var min_date =  d3.min(datapoints, function(d) { return d.timestamp });

 xPositionScale.domain([min_date, max_date])

// define non-highlighted line specs
	var normal_width = 1
	var line_length =26

	svg.selectAll("rect")
		.data(datapoints)
		.enter().append("rect")
		.attr("class", function(d){
			return d.category
		})
		.attr("width", normal_width)
		.attr("height", line_length)
		.attr("x", function(d){
			return xPositionScale(d.timestamp)
		})
		.attr("y", function(d){
			return yPositionScale(d.media_company) - (line_length/2)
		})

// dropdown menu effects: Highlight selected country's line and add a class label
	d3.select("#selection")
		.on("change", function(){
			d3.selectAll("rect")
				.classed("highlighted", false)

			var selected_category = this.value

			d3.selectAll("."+selected_category)
				.classed("highlighted", true)
				.raise()	

		})


// AXES
	var xAxis = d3.axisBottom(xPositionScale)
		.tickArguments([d3.timeYear.every(1)])
		.tickFormat(d3.timeFormat("%Y"))

      svg.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", "translate(0," + (height + (line_length/2) + 10) + ")")
        .call(xAxis)

      var yAxis = d3.axisLeft(yPositionScale)
      	.ticks(7)

      svg.append("g")
        .attr("class", "axis y-axis")
        .call(yAxis);

 }

})();