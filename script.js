
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
            }




            })


        } else {
            $("#error").html("Field can not be empty")
        }

    });



});
