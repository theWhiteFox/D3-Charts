var bardata = [];

// vary the input
d3.tsv('data.tsv', function(error, data) {

    if(error){
        return console.log(error);
    }

    for(key in data)
    {
      bardata.push(data[key].value)
    }

    var margin  = { top: 30, right: 30, bottom: 40, left: 50 }

    var height = 400 - margin.top - margin.bottom,
          width = 600 - margin.left - margin.right,
          barWidth = 50,
          barOffset = 5;

    var tempColor;

    // add colors
    var colors = d3.scale.linear()
          .domain( [ 0, bardata.length * .33, bardata.length * .66, bardata.length ] )
          .range( [ '#B58929', '#C61C6F', '#268BD2', '#85992C' ] )

    // quantitative scale
    var yScale = d3.scale.linear()
          .domain( [ 0, d3.max( bardata ) ] )
          .range( [ 0, height ] );

    // ordinal scale
    var xScale = d3.scale.ordinal()
          .domain( d3.range( 0, bardata.length ) )
          .rangeBands( [ 0, width ], .2 );

    var tooltip = d3.select( 'body' ).append( 'div' )
          .style( 'position', 'absolute' )
          .style( 'padding', '0 10px' )
          .style( 'background', 'white' )
          .style( 'opacity', 0 )

    var myChart = d3.select( '#barchart' ).append( 'svg' )
          .style('background', '#E7E0CB')
//   .attr("width", '100%')
//    .attr("height", '100%')
//    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
//    .attr('preserveAspectRatio','xMinYMin')
//    .append("g")
//    .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")")
          .attr( 'width', width + margin.left + margin.right )
          .attr( 'height', height + margin.top + margin.bottom )
          .append( 'g' )
          .attr('transform', 'translate('+margin.left + ', ' + margin.top + ')')
          .selectAll( 'rect' ).data( bardata )
          .enter().append( 'rect' )
          .style( 'fill', function ( d, i )
          {
             return colors( i );
          } )
          .attr( 'width', xScale.rangeBand() )
          .attr( 'x', function ( d, i )
          {
             return xScale( i );
          } )
          .attr( 'height', 0 )
          .attr( 'y', height )

          .on( 'mouseover', function ( d )
          {
             tooltip.transition()
                     .style( 'opacity', .9 )

             tooltip.html( d )
                     .style( 'left', ( d3.event.pageX - 35 ) + 'px' )
                     .style( 'top', ( d3.event.pageY - 30 ) + 'px' )

             tempColor = this.style.fill;
             d3.select( this )
                     .style( 'opacity', .5 )
                     .style( 'fill', 'yellow' );
          } )

          .on( 'mouseout', function ( d )
          {
             d3.select( this )
                     .style( 'opacity', 1 )
                     .style( 'fill', tempColor );
          } );

    myChart.transition()
          .attr( 'height', function ( d )
          {
             return yScale( d );
          } )
          .attr( 'y', function ( d )
          {
             return height - yScale( d );
          } )
          .delay( function ( d, i )
          {
             return i * 20;
          } )
          .duration( 1000 )
          .ease( 'elastic' )

    var vGuideScale = d3.scale.linear()
          .domain( [ 0, d3.max( bardata ) ] )
          .range( [ height, 0 ] )

    var vAxis = d3.svg.axis()
          .scale( vGuideScale )
          .orient( 'left' )
          .ticks( 10 )

    var vGuide = d3.select( 'svg' ).append( 'g' )
    vAxis( vGuide )
    vGuide.attr( 'transform', 'translate(' + margin.left + ', ' + margin.top + ')' )
    vGuide.selectAll( 'path' )
          .style( {fill: 'none', stroke: "#000"} )
    vGuide.selectAll( 'line' )
          .style( {stroke: "#000"} )

    var hAxis = d3.svg.axis()
          .scale( xScale )
          .orient( 'bottom' )
          .tickValues( xScale.domain().filter( function ( d, i )
          {
             return !( i % ( bardata.length / 16 ) );
          } ) )

    var hGuide = d3.select('svg').append('g')
    hAxis(hGuide)
    hGuide.attr( 'transform', 'translate(' + margin.left + ', ' + (height + (margin.top)) + ')' )
    hGuide.selectAll( 'path' )
          .style( {fill: 'none', stroke: "#000"} )
    hGuide.selectAll( 'line' )
          .style( {stroke: "#000"} )
});

// piechart
var width = 400,
        height = 400;
radius = 200,
        colors = d3.scale.ordinal()
        .range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);

var piedata = [
   {
      label: "Stringer",
      value: 50
   },
   {
      label: "Bodie",
      value: 50
   },
   {
      label: "Jimmy",
      value: 50
   },
   {
      label: "Omar",
      value: 50
   },
   {
      label: "Bunk",
      value: 50
   },
   {
      label: "Snoop",
      value: 50
   }
];

var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechart' ).append( 'svg' )
                .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colors(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})

