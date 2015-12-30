(function(){

  $.ajax({
    dataType: "json",
    url: '/topicsHandler/topicsmaindata',
    method: 'POST',

    success: function(data) {
      var l=data.length;
      var cname=data[0]["Category Name"];
      var x=$('.topic-category-name');
      x.text(cname);
      var i;

      for(j=0;j<5;++j)
      {
        k=j+1;
        z=($('.collection-widget:nth-child('+ k +')'));
        y=z.find($('.topic')).first();
        for(i=0;i<5;++i)
        {
          r=y.find('.topic-name');
          r.text(data[j]["Category Topics"][i]["Topic Name"]);
          r=y.find('.category-name');
          r.text(data[j]["Category Topics"][i]["Topic Category"]);
          r=y.find('.topic-icon')
          .find('img');
          var src=data[j]["Category Topics"][i]["Topic Icon"];
          r.attr("src",src);
          y=y.next();
        }
      }
    }
  });

})();
