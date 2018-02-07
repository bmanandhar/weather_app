
$(document).ready(function(){
    $("#submit").click(function(){
        var city = $("#city").val();
        if (city != "") {
            $.ajax({

            url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+"&appid=8f236e524e673e139b0f6739b81a6eb4",
            type: "GET",
            dataType: "jsonp",
            success:function(data){
                var widget= show(data);
                $("#show").html(widget);
                $("#city").val("");
   $(".weather").html(data.main.temp);
               console.log(data);
            }
        });
        } else {
            $("#error").html("Field can not be empty")
        }

    });
});
function show(data){
    return "<h3><strong>Weather</strong>: "+ data.weather[0].main+"</h3>"+
           "<h3><strong>Description</strong>: "+ data.weather[0].description+"</h3>"+
           "<h3><strong>Temperature</strong>: "+ data.main.temp+"</h3>"+
           "<h3><strong>Pressure</strong>: "+ data.main.pressure+"</h3>"+
           "<h3><strong>Humidity</strong>: "+ data.main.humidity+"</h3>"+
           "<h3><strong>Temp Max</strong>: "+ data.main.temp_max+"</h3>"+
           "<h3><strong>Temp Min</strong>: "+ data.main.temp_min+"</h3>"+
           "<h3><strong>Wind speed</strong>: "+ data.wind.speed+"</h3>"+
           "<h3><strong>Wind direction</strong>: "+ data.wind.deg+"</h3>";






};
