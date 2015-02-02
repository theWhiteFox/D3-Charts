//var bardata = [];
//
//// vary the input
//d3.tsv('data.tsv', function(error, data) {
//
//    if(error){
//        return console.log(error);
//    }
//
//    for(key in data)
//    {
//      bardata.push(data[key].value)
//    }
//
//    var margin  = { top: 30, right: 30, bottom: 40, left: 50 }
//
//    var height = 400 - margin.top - margin.bottom,
//          width = 600 - margin.left - margin.right,
//          barWidth = 50,
//          barOffset = 5;
//
//    var tempColor;
//
//    // add colors
//    var colors = d3.scale.linear()
//          .domain( [ 0, bardata.length * .33, bardata.length * .66, bardata.length ] )
//          .range( [ '#B58929', '#C61C6F', '#268BD2', '#85992C' ] )
//
//    // quantitative scale
//    var yScale = d3.scale.linear()
//          .domain( [ 0, d3.max( bardata ) ] )
//          .range( [ 0, height ] );
//
//    // ordinal scale
//    var xScale = d3.scale.ordinal()
//          .domain( d3.range( 0, bardata.length ) )
//          .rangeBands( [ 0, width ], .2 );
//
//    var tooltip = d3.select( 'body' ).append( 'div' )
//          .style( 'position', 'absolute' )
//          .style( 'padding', '0 10px' )
//          .style( 'background', 'white' )
//          .style( 'opacity', 0 )
//
//    var myChart = d3.select( '#barchart' ).append( 'svg' )
//          .style('background', '#E7E0CB')
//          .attr( 'width', width + margin.left + margin.right )
//          .attr( 'height', height + margin.top + margin.bottom )
//          .append( 'g' )
//          .attr('transform', 'translate('+margin.left + ', ' + margin.top + ')')
//          .selectAll( 'rect' ).data( bardata )
//          .enter().append( 'rect' )
//          .style( 'fill', function ( d, i )
//          {
//             return colors( i );
//          } )
//          .attr( 'width', xScale.rangeBand() )
//          .attr( 'x', function ( d, i )
//          {
//             return xScale( i );
//          } )
//          .attr( 'height', 0 )
//          .attr( 'y', height )
//
//          .on( 'mouseover', function ( d )
//          {
//             tooltip.transition()
//                     .style( 'opacity', .9 )
//
//             tooltip.html( d )
//                     .style( 'left', ( d3.event.pageX - 35 ) + 'px' )
//                     .style( 'top', ( d3.event.pageY - 30 ) + 'px' )
//
//             tempColor = this.style.fill;
//             d3.select( this )
//                     .style( 'opacity', .5 )
//                     .style( 'fill', 'yellow' );
//          } )
//
//          .on( 'mouseout', function ( d )
//          {
//             d3.select( this )
//                     .style( 'opacity', 1 )
//                     .style( 'fill', tempColor );
//          } );
//
//    myChart.transition()
//          .attr( 'height', function ( d )
//          {
//             return yScale( d );
//          } )
//          .attr( 'y', function ( d )
//          {
//             return height - yScale( d );
//          } )
//          .delay( function ( d, i )
//          {
//             return i * 20;
//          } )
//          .duration( 1000 )
//          .ease( 'elastic' )
//
//    var vGuideScale = d3.scale.linear()
//          .domain( [ 0, d3.max( bardata ) ] )
//          .range( [ height, 0 ] )
//
//    var vAxis = d3.svg.axis()
//          .scale( vGuideScale )
//          .orient( 'left' )
//          .ticks( 10 )
//
//    var vGuide = d3.select( 'svg' ).append( 'g' )
//    vAxis( vGuide )
//    vGuide.attr( 'transform', 'translate(' + margin.left + ', ' + margin.top + ')' )
//    vGuide.selectAll( 'path' )
//          .style( {fill: 'none', stroke: "#000"} )
//    vGuide.selectAll( 'line' )
//          .style( {stroke: "#000"} )
//
//    var hAxis = d3.svg.axis()
//          .scale( xScale )
//          .orient( 'bottom' )
//          .tickValues( xScale.domain().filter( function ( d, i )
//          {
//             return !( i % ( bardata.length / 16 ) );
//          } ) )
//
//    var hGuide = d3.select('svg').append('g')
//    hAxis(hGuide)
//    hGuide.attr( 'transform', 'translate(' + margin.left + ', ' + (height + (margin.top)) + ')' )
//    hGuide.selectAll( 'path' )
//          .style( {fill: 'none', stroke: "#000"} )
//    hGuide.selectAll( 'line' )
//          .style( {stroke: "#000"} )
//});
//
//// piechart
//var width = 400,
//        height = 400;
//radius = 200,
//        colors = d3.scale.ordinal()
//        .range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);
//
//var piedata = [
//   {
//      label: "Stringer",
//      value: 50
//   },
//   {
//      label: "Bodie",
//      value: 50
//   },
//   {
//      label: "Jimmy",
//      value: 50
//   },
//   {
//      label: "Omar",
//      value: 50
//   },
//   {
//      label: "Bunk",
//      value: 50
//   },
//   {
//      label: "Snoop",
//      value: 50
//   }
//];
//
//var pie = d3.layout.pie()
//        .value( function ( d )
//        {
//           return d.value;
//        } );
//
//var arc = d3.svg.arc()
//        .outerRadius( radius )
//
//var myChart = d3.select( '#piechart' ).append( 'svg' )
//        .attr( 'width', width )
//        .attr( 'height', height )
//        .append( 'g' )
//        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
//        .selectAll( 'path' ).data( pie( piedata ) )
//        .enter().append( 'g' )
//        .attr('class', 'slice')
//
//var slices = d3.selectAll('g.slice')
//.append('path')
//.attr('fill', function(d, i)
//{
//  return colors(i);
//})
//.attr('d', arc)
//
//var text = d3.selectAll('g.slice')
//.append('text')
//.text(function(d, i)
//{
//  return d.data.label;
//})
//.attr('text-anchor', 'middle')
//.attr('fill', 'white')
//.attr('transform', function(d)
//{
//  d.innerRadius = 0;
//  d.outerRadius = radius;
//  return 'translate('+ arc.centroid(d) +')'
//})


// horizontal chart 
   var data =
           [
              {
                 key: 'Glazed',
                 value: 132
              },
              {
                 key: 'Jelly',
                 value: 71
              },
              {
                 key: 'Holes',
                 value: 337
              },
              {
                 key: 'Sprinkles',
                 value: 93
              },
              {
                 key: 'Crumb',
                 value: 78
              },
              {
                 key: 'Chocolate',
                 value: 43
              },
              {
                 key: 'Coconut',
                 value: 20
              },
              {
                 key: 'Cream',
                 value: 16
              },
              {
                 key: 'Cruller',
                 value: 30
              },
              {
                 key: 'Éclair',
                 value: 8
              },
              {
                 key: 'Fritter',
                 value: 17
              },
              {
                 key: 'Bearclaw',
                 value: 21
              }
           ];
   var w = 800;
   var h = 450;
   var margin = {
      top: 20,
      bottom: 40,
      left: 80,
      right: 20
   };
   var width = w - margin.left - margin.right;
   var height = h - margin.top - margin.bottom;
   var x = d3.scale.linear()
           .domain( [ 0, d3.max( data, function ( d )
              {
                 return d.value;
              } ) ] )
           .range( [ 0, width ] );
   var y = d3.scale.ordinal()
           .domain( data.map( function ( entry )
           {
              return entry.key;
           } ) )
           .rangeBands( [ 0, height ] );
   var linearColorScale = d3.scale.linear()
           .domain( [ 0, data.length ] )
           .range( [ "#572500", "#F68026" ] );
   var ordinalColorScale = d3.scale.category20();
   var xAxis = d3.svg.axis()
           .scale( x )
           .orient( 'bottom' );
   var yAxis = d3.svg.axis()
           .scale( y )
           .orient( 'left' );
   var svg = d3.select( "body" ).append( 'svg' )
           .attr( 'id', 'chart' )
           .attr( 'width', w )
           .attr( 'height', h );
   var chart = svg.append( 'g' )
           .classed( 'display', true )
           .attr( 'transform', 'translate(' + margin.left + ',' + margin.top + ')' );

   plot = function ( params )
   {
      this.selectAll( ".bar" )
              .data( params.data )
              .enter()
              .append( 'rect' )
              .classed( 'bar', 'true' )
              .attr( 'x', 0 )
              .attr( 'y', function ( d, i )
              {
                 return y( d.key );
              } )
              .attr( 'height', function ( d, i )
              {
                 return y.rangeBand() - 1;
              } )
              .attr( 'width', function ( d )
              {
                 return x( d.value );
              } )
              .style( "fill", function ( d, i )
              {
                 return ordinalColorScale( i );
                 // return linearColorScale( i );
              } );
      this.selectAll( ".bar-label" )
              .data( params.data )
              .enter()
              .append( 'text' )
              .classed( 'bar-label', true )
              .attr( 'x', function ( d )
              {
                 return x( d.value );
              } )
              .attr( 'dx', -4 )
              .attr( 'y', function ( d, i )
              {
                 return y( d.key );
              } )
              .attr( 'dy', function ( d, i )
              {
                 return y.rangeBand() / 1.5 + 2;
              } )
              .text( function ( d )
              {
                 return d.value;
              } )
      this.append( 'g' )
              .classed( 'x axis', true )
              .attr( 'transform', "translate(" + 0 + "," + height + ")" )
              .call( xAxis );

      this.append( 'g' )
              .classed( 'y axis', true )
              .attr( 'transform', "translate(0,0)" )
              .call( yAxis );
   };
   plot.call( chart, {
      data: data
   } );
   
   // vertical chart
   var w = 800;
   var h = 450;
   var margin = {
      top: 58,
      bottom: 100,
      left: 80,
      right: 40
   };
   var width = w - margin.left - margin.right;
   var height = h - margin.top - margin.bottom;

   var x = d3.scale.ordinal()
           .domain( data.map( function ( entry )
           {
              return entry.key;
           } ) )
          .rangeBands( [ 0, width ] );

   var y = d3.scale.linear()
           .domain( [ 0, d3.max( data, function ( d )
              {
                 return d.value;
              } ) ] )
           .range( [ height, 0 ] ); 
   var ordinalColorScale = d3.scale.category20();
   var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom'); 
   var yAxis = d3.svg.axis()
                .scale(y)
                .orient('left'); 
   var yGridlines = d3.svg.axis()
                    .scale(y)
                    .tickSize(-width, 0, 0)
                    .tickFormat("")
                    .orient('left');
   var svg = d3.select( "body" ).append( 'svg' )
           .attr( 'id', 'chart' )
           .attr( 'width', w )
           .attr( 'height', h );
   var chart = svg.append( 'g' )
           .classed( 'display', true )
           .attr( 'transform', 'translate(' + margin.left + ',' + margin.top + ')' );
  var controls = d3.select('body')
                  .append('div')  
                  .attr('id', 'controls');
  var sort_btn = controls.append('button')
                  .html('Sort data: assending')
                  .attr('state', 0);
   drawAxis = function(params)
   {
      if(params.initialize === true){
          // draw the gridlines and axis
          // draw the gridlines
          this.append('g')
              .call(yGridlines)
              .classed('gridline', true)
              .attr('transform', 'translate(0,0)')

          // x axis
          this.append('g')
                  .classed('x axis', true)
                  .attr('transform', "translate(" + 0 + "," + height + ")")
                  .call(params.axis.x)
                      .selectAll('text')
                      .classed('x-axis-label', true)
                          .style('text-anchor', 'end')
                          .attr('dx', -8)
                          .attr('dy', 8)
                          .attr('transform', 'translate(0,0) rotate(-45)'); 
          // y axis
          this.append('g')
                  .classed('y axis', true)
                  .attr('transform', "translate(0,0)")
                  .call(params.axis.y);

          // y label
          this.select('.y.axis')
                  .append('text')
                  .attr('x', 0)
                  .attr('y', 0)
                  .style('text-anchor', 'middle')
                  .attr('transform', 'translate(-50, ' + height/2 + ') rotate(-90)')
                  .text('Units Sold'); 

          // x label
          this.select('.x.axis')
                  .append('text')
                  .attr('x', 0)
                  .attr('y', 0)
                  .style('text-anchor', 'middle')
                  .attr('transform', 'translate(' + width/2 + ', 80)')
                  .text('Donut Type'); 
      } else if(params.initialize === false)
      {
          // update info
          this.selectAll('g.x.axis')
              .transition()
              .duration(500)
              .ease('bounce')
              .delay(500)
            .call(params.axis.x) 
          this.selectAll('.x-axis-label')           
              .style('text-anchor', 'end')
                  .attr('dx', -8)
                  .attr('dy', 8)
                  .attr('transform', 'translate(0,0) rotate(-45)')
          this.selectAll('g.y.axis')
              .transition()
              .duration(500)
              .ease('bounce')
              .delay(500)
            .call(params.axis.y)
      }
   }
   plot = function ( params )
   {
    x.domain( data.map( function ( entry )
           {
              return entry.key;
           } ) );
    y.domain( [ 0, d3.max( data, function ( d )
              {
                 return d.value;
              } ) ] );

      drawAxis.call(this, params);
      
      // enter()
      this.selectAll( ".bar" )
              .data( params.data )
              .enter()
                .append( 'rect' )
                .classed( 'bar', 'true' )
                .on('mouseover', function( d, i )
                  {
                      d3.select(this).style('fill', 'yellow');
                  })
                .on('mousemove', function( d, i )
                  {
                      
                  })
                .on('mouseout', function( d, i )
                  {
                      d3.select(this).style('fill', ordinalColorScale(i));
                  });

      this.selectAll( ".bar-label" )
              .data( params.data )
              .enter()
              .append( 'text' )
              .classed( 'bar-label', true );

      // update()
      this.selectAll('.bar')
          .transition()
          .duration(500)
          .ease('bounce')
          .delay(500)
          .attr( 'x', function(d, i)
          {
            return x(d.key);
          } )
          .attr( 'y', function ( d, i )
          {
             return y( d.value );
          } )
          .attr( 'height', function ( d, i )
          {
             return height - y(d.value);
          } )
          .attr( 'width', function ( d )
          {
             return x.rangeBand();
          } )
          .style( "fill", function ( d, i )
          {
            return ordinalColorScale(i);             
          } );

      this.selectAll('.bar-label')
          .transition()
          .duration(500)
          .ease('bounce')
          .delay(500)
          .attr( 'x', function ( d , i )
          {
             return x( d.key ) + ( x.rangeBand()/2);
          } )
          .attr( 'dx', 0 )
          .attr( 'y', function ( d, i )
          {
             return y( d.value );
          } )
          .attr( 'dy', -6 )
          .text( function ( d )
          {
             return d.value;
          } )

      // exit()
      this.selectAll('.bar')
          .data(params.data)
          .exit()
          .remove();

      this.selectAll('.bar-label')
          .data(params.data)
          .exit()
          .remove();      
   };
   sort_btn.on('', function()
   {
    var self = d3.select(this);
    var ascending = function(a, b)
    {
      return a.value - b.value;
    };
    var descending = function(a, b)
    {
      return b.value - a.value;
    };
    var state = +self.attr('state');
    var txt = 'Sort data: ';
      if(state === 0)
      {
        data.sort(ascending);
        state = 1;
        txt += 'descending';
      } else if(state === 1)
      {
        data.sort(descending);
          state = 0;
          txt += 'ascending';
      }
      self.attr('state', state);
      self.html(txt);

      plot.call( chart, {
      data: data,
      axis: 
              {
                 x: xAxis,
                 y: yAxis
              },
              gridlines: yGridlines,
              initialize: false
   } );
   });
plot.call( chart, {
  data: data,
  axis: 
          {
             x: xAxis,
             y: yAxis
          },
          gridlines: yGridlines,
          initialize: true
   } );

// line chart

   var data = [
	{key: "Jelly", value: 60, date: "2014/01/01" },
	{key: "Jelly", value: 58, date: "2014/01/02" },
	{key: "Jelly", value: 59, date: "2014/01/03" },
	{key: "Jelly", value: 56, date: "2014/01/04" },
	{key: "Jelly", value: 57, date: "2014/01/05" },
	{key: "Jelly", value: 55, date: "2014/01/06" },
	{key: "Jelly", value: 56, date: "2014/01/07" },
	{key: "Jelly", value: 52, date: "2014/01/08" },
	{key: "Jelly", value: 54, date: "2014/01/09" },
	{key: "Jelly", value: 57, date: "2014/01/10" },
	{key: "Jelly", value: 56, date: "2014/01/11" },
	{key: "Jelly", value: 59, date: "2014/01/12" },
	{key: "Jelly", value: 56, date: "2014/01/13" },
	{key: "Jelly", value: 52, date: "2014/01/14" },
	{key: "Jelly", value: 48, date: "2014/01/15" },
	{key: "Jelly", value: 47, date: "2014/01/16" },
	{key: "Jelly", value: 48, date: "2014/01/17" },
	{key: "Jelly", value: 45, date: "2014/01/18" },
	{key: "Jelly", value: 43, date: "2014/01/19" },
	{key: "Jelly", value: 41, date: "2014/01/20" },
	{key: "Jelly", value: 37, date: "2014/01/21" },
	{key: "Jelly", value: 36, date: "2014/01/22" },
	{key: "Jelly", value: 39, date: "2014/01/23" },
	{key: "Jelly", value: 41, date: "2014/01/24" },
	{key: "Jelly", value: 42, date: "2014/01/25" },
	{key: "Jelly", value: 40, date: "2014/01/26" },
	{key: "Jelly", value: 43, date: "2014/01/27" },
	{key: "Jelly", value: 41, date: "2014/01/28" },
	{key: "Jelly", value: 39, date: "2014/01/29" },
	{key: "Jelly", value: 40, date: "2014/01/30" },
	{key: "Jelly", value: 39, date: "2014/01/31" }
];
var w = 800;
var h = 450;
var margin = {
  top: 58,
  bottom: 100,
  left: 80,
  right: 40
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

var svg = d3.select('body').append('svg')
           .attr('id', 'chart')
           .attr('width', w)
           .attr('height', h)
var chart = svg.append('g')
              .classed('display', true)
              .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
var dateParser = d3.time.format('%Y/%m/%d').parse;
var x = d3.time.scale()
         .domain(d3.extent(data, function(d)
         {
            var date = dateParser(d.date);
            return date;
         }))
         .range([0,width])
var y = d3.scale.linear()
         .domain([0, d3.max(data, function(d)
         {
            return d.value;
         })])
         .range([height, 0]);
var xAxis = d3.svg.axis()
             .scale(x)
             .orient('bottom')
             .ticks(d3.time.days, 7)
             .tickFormat(d3.time.format('%m/%d'));
var yAxis = d3.svg.axis()
             .scale(y)
             .orient('left')
             .ticks(5);
var line = d3.svg.line()
             .x(function(d)
             {
                var date = dateParser(d.date);
                return x(date);
             })
             .y(function(d)
             {
                return y(d.value);
             })
             .interpolate('monotone');
var area = d3.svg.area()
             .x(function(d)
             {
                var date = dateParser(d.date);
                return x(date);
             })
             .y0(height)
             .y1(function(d)
             {
                return y(d.value);
             })
             .interpolate('monotone');
plot = function(params)
{
  this.append('g')
      .classed('x axis', true)
      .attr('transform', 'translate(0,' + height + ')')
      .call(params.axis.x);
  this.append('g')
      .classed('y axis', true)
      .attr('transform', 'translate(0,0)')
      .call(params.axis.y);
  // enter()
   this.selectAll('.area')
      .data([params.data])
      .enter()
          .append('path')
          .classed('area', true);
  this.selectAll('.trendline')
      .data([params.data])
      .enter()
          .append('path')
          .classed('trendline', true);
  this.selectAll('.point')
      .data(params.data)
      .enter()
          .append('circle')
          .classed('point', true)
          .attr('r', 2);
  // update()
  this.selectAll('.area')
      .attr('d', function(d)
      {
          return area(d);
      })
 this.selectAll('.trendline')
      .attr('d', function(d)
      {
          return line(d);
      })
  this.selectAll('.point')
      .attr('cx', function(d)
      {
        var date = dateParser(d.date);
        return x(date);
        })
      .attr('cy', function(d)
      {
        return y(d.value);
      })
  // exit()
  this.selectAll('.area')
      .data([params.data])
      .exit()
      .remove();
  this.selectAll('.trendline')
      .data([params.data])
      .exit()
      .remove();
  this.selectAll('.point')
      .data(params.data)
      .exit()
      .remove();
}
plot.call(chart, 
{
  data:data,
  axis:
  {
    x: xAxis,
    y: yAxis
  }
});

