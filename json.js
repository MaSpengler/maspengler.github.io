$().ready(function(){
    $.getJSON( "/data.json", function(data) {
    console.log(data);
    //$("#text").html(data["text"]);
    $("#text").html(data);
    console.log($("#text").html(data)) 
    alert("now?")
  });
});
