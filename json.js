$().ready(function(){
    $.getJSON( "/data.json", function(data) {
    console.log(data);
    $("#text").html(data["text"]);
    $("#category").html(data["category"]);
    console.log($("#text").html(data["text"])) 
  });
});
