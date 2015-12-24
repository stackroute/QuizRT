(function(){

  console.log("Hello");
  $.ajax({
  dataType: "json",
  url: '/topicsHandler/topicsmaindata',
  // data: data,
  method: 'POST',
  success: function(data) {

  console.log(data);
  var l=data.length;
  //console.log(l);


    var cname=data[0]["Category Name"];
    var x=$('.topic-category-name');
    x.text(cname);
    var i;

     console.log("Hello");
    for(j=0;j<5;++j)
    {
      k=j+1;
      z=($('.collection-widget:nth-child('+ k +')'));
      y=z.find($('.topic')).first();
      for(i=0;i<5;++i)
      {
        console.log(i);
        r=y.find('.topic-name');
        r.text(data[j]["Category Topics"][i]["Topic Name"]);
        r=y.find('.category-name');
        r.text(data[j]["Category Topics"][i]["Topic Category"]);
        r=y.find('.topic-icon')
            .find('img');
        console.log(r);
        var src=data[j]["Category Topics"][i]["Topic Icon"];
        console.log(src);
        r.attr("src",src);
        y=y.next();
      }
    //console.log(x);
//  z=z.next();
  //  console.log(z);
  }
  }
  });

})();
