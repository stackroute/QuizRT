(function(){

  console.log("Hello");
  $.getJSON( "data/category-json.json", function( data ) {

  console.log(data);


  var l=data.length;
  //console.log(l);

  var temp=data[0]["Topic Category"];
  var x=$('.navbar #heading-name');
  x.text(temp);

 for(i=0;i<9;++i)
 {
    var temp=data[i]["Topic Name"];
    var x=$('.topic-name').eq(i);
    x.text(temp);

    temp=data[i]["Topic Description"];
    var x=$('.topic-desc').eq(i);
    x.text(temp);

    temp=data[i]["Topic Category"];
    var x=$('small').eq(i);
    x.text(temp);

    var src=data[i]["Topic Icon"];
    var x=$('img').eq(i);
    x.attr("src",src);




 }
  });

})();
