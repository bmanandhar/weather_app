
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
                $(".city").html(data.name);
            }
        });
        } else {
            $("#error").html("City name can not be empty")
        }
    });
});
function show(data){
    return "<h5><strong>Weather</strong>: "+data.weather[0].main+"</h5>"+
           "<h5><strong>Description</strong>: "+data.weather[0].description+"</h5>"+
           "<h5><strong>Temperature</strong>: "+data.main.temp+"&#8457</h5>"+
           "<h5><strong>Pressure</strong>: "+data.main.pressure+"</h5>"+
           "<h5><strong>Humidity</strong>: "+data.main.humidity+"</h5>"+
           "<h5><strong>Temp Max</strong>: "+data.main.temp_max+"&#8457</h5>"+
           "<h5><strong>Temp Min</strong>: "+data.main.temp_min+"&#8457</h5>"+
           "<h5><strong>Wind speed</strong>: "+data.wind.speed+"</h5>"+
           "<h5><strong>Wind direction</strong>: "+data.wind.deg+"</h5>";
};
