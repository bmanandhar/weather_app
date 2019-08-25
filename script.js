$(document).ready(function(){
    $(".reset").click(function(){
        history.go(0);
    });
  
    var now = new Date();
    console.log(now);
    console.log('now is', typeof now);
    var timestamp = now.getTime()
    console.log(timestamp);
    console.log(typeof timestamp);
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(`${time}`);
    $(".imperial").click(function(){
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
                var widget = imperial(data);
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
  //Imperial
  function imperial(data){
      var now = new Date();
      var timestamp = now.getTime()
      var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      return 
        (
            `<img style="background-color:skyblue" src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'/><br>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Temperature: <b>${data.main.temp}</b>&#8457</p>
            <p>Temp Max: <b>${data.main.temp_max}</b>&#8457</p>
            <p>Temp Min: <b>${data.main.temp_min}</b>&#8457</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind speed: ${data.wind.speed} mile/hr</p>
            <p>Wind direction: ${data.wind.deg}&#176</p>
            <p style="color:blue">[ ${data.name}, ${data.sys.country}]<p>
            <p>Time in this city: ${time}</p>`
        );
    }
  
  $(document).ready(function(){
    $("#reset").click(function(){
        location.reload();
    });
    $(".metric").click(function(){
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
                var widget = metric(data);
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
  
  //Metric
  function metric(data){
      var now = new Date();
      var timestamp = now.getTime()
      var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      return 
        (
            `<img style="background-color:skyblue" src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'/><br>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Temperature: <b>${data.main.temp}</b>&#8451</p>
            <p>Temp Max: <b>${data.main.temp_max}</b>&#8451</p>
            <p>Temp Min: <b>${data.main.temp_min}</b>&#8451</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind speed: ${data.wind.speed} km/hr</p>
            <p>Wind direction: ${data.wind.deg}&#176</p>
            <p style="color:blue">[ ${data.name}, ${data.sys.country}]<p>
            <p>Time in this city: ${time}</p>`
        );
    }
    