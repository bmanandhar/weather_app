
$(document).ready(function(){
    $("#submit").click(function(){
        var city = $("#city").val();
        if (city != "") {
            $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+"&appid=8f236e524e673e139b0f6739b81a6eb4",
            type: "GET",
            dataType: "jsonp",
            success:function(data){
                console.log(data);
                var widget= show(data);
                $("#show").html(widget);
                $(".city").html(data.name+", "+data.sys.country);
            }
        });
        } else {
            $("#error").html("City name can not be empty")
        }
    });
});
function show(data){
    return "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'/>"+
           "<h5><strong>Weather</strong>: "+data.weather[0].main+"</h5>"+
           "<h5><strong>Description</strong>: "+data.weather[0].description+"</h5>"+
           "<h5><strong>Temperature</strong>: "+data.main.temp+"&#8457</h5>"+
           "<h5><strong>Pressure</strong>: "+data.main.pressure+"hPa</h5>"+
           "<h5><strong>Humidity</strong>: "+data.main.humidity+"%</h5>"+
           "<h5><strong>Temp Max</strong>: "+data.main.temp_max+"&#8457</h5>"+
           "<h5><strong>Temp Min</strong>: "+data.main.temp_min+"&#8457</h5>"+
           "<h5><strong>Wind speed</strong>: "+data.wind.speed+"m/sec</h5>"+
           "<h5><strong>Wind direction</strong>: "+data.wind.deg+"&#176</h5>";
};
