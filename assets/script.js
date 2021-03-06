
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
        function update(){
            $("#currentDay").html(moment().format("MMMM Do YYYY hh:mm:ss a"));
        }
        setInterval(update, 1000);

