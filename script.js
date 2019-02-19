$(document).ready(function(){
    $("#reset").click(function(){
        location.reload();
    });
    $("#submit").click(function(){
        var city = $("#city").val();
        if (city != ""){
            $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}
                  &units=imperial&appid=8f236e524e673e139b0f6739b81a6eb4`,
            data: "",
            type: "get",
            dataType: "json",
            success:function(data){
                console.log(data);
                var widget = show(data);
                $("#show").html(widget);
                $(".conversion").css("display", "block");
            },
            error: function(response){
                $('#show').html("Either city name is incorrect or data not available.");
          },
            beforesend: "",
            complete: ""
        });
        } else {
            $("#show").html("<h3 style='color:red'><i>City name empty<i></h3>")
        }
    });
});

function show(data){
    return (
       `<img style="background-color:skyblue" src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'/><br>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} &#8457</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Temp Max: ${data.main.temp_max} &#8457</p>
        <p>Temp Min: ${data.main.temp_min} &#8457</p>
        <p>Wind speed: ${data.wind.speed} mile/hr</p>
        <p>Wind direction: ${data.wind.deg} &#176</p>`
        // <p style="color:blue">[ ${data.name}, ${data.sys.country}]<p>
        );
    }

/*Metric:-
$(document).ready(function(){
    $("#reset").click(function(){
        location.reload();
    });
    $(".conversion").click(function(){
        var city = $("#city").val();
        if (city != ""){
            $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}
                  &units=metric&appid=8f236e524e673e139b0f6739b81a6eb4`,
            data: "",
            type: "get",
            dataType: "json",
            success:function(data){
                console.log(data);
                var widget = show(data);
                $("#show").html(widget);
            },
            error: function(response){
                $('#show').html("Either city name is incorrect or data not available.");
          },
            beforesend: "",
            complete: ""
        });
        } else {
            $("#show").html("<h3 style='color:red'><i>City name empty<i></h3>")
        }
    });
});

function show(data){
    return (
       `<img style="background-color:skyblue" src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'/><br>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} &#8451</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Temp Max: ${data.main.temp_max} &#8451</p>
        <p>Temp Min: ${data.main.temp_min} &#8451</p>
        <p>Wind speed: ${data.wind.speed} km/hr</p>
        <p>Wind direction: ${data.wind.deg} &#176</p>
        <p style="color:blue">[ ${data.name}, ${data.sys.country}]<p>`
        );
    }


*/