(function(){

  console.log("Hello");

  $.ajax({
    dataType: "json",
    url: '/topicsHandler/categorydata',
    method: 'POST',

    success: function(data) {
      console.log(data);
      var l=data.length;
      var temp=data[0]["Topic Category"];

      var x=$('.navbar #heading-name');
      x.text(temp);

      for(i=0;i<l;++i)
      {
        $(".topic-row").append('<div class="col-sm-4 topic"></div>');
        $(".topic").eq(i).append('<div class="topic-icon col-xs-3"><img src="images/topics/cricket.png"></div><!--end topic-icon-->')
        $(".topic").eq(i).append('<div class="topic-data col-xs-6"><span class="topic-name">Temple Run</span><span class="topic-desc">Try your Lucknow with this Delhightful quiz.</span></div><!--end topic-data--> ');
        $(".topic").eq(i).append('<div class="topic-category col-xs-3"><a href=""><small>The world</small></a></div><!--end topic-category-->');

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

  }})();
