(function (){
  $.ajax({
  dataType: "json",
  url: '/topicsHandler/leaderboarddata',
  // data: data,
  method: 'POST',
  success: function(data) {
    var len = data.length;
    var i;
    for(i=0;i<len;++i){
      $('.rank').eq(i+1).text(data[i]["rank"]);
      $('.country').eq(i+1).text(data[i]["country"]);
      $('.score').eq(i+1).text(data[i]["score"]);
      $('.p_name').eq(i+1).text(data[i]["player name"]);
    }}
  });
})();
