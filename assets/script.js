$(document).ready(function(){
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
        function update(){
            $("#currentDay").html(moment().format("MMMM Do YYYY hh:mm:ss a"));
        }
        setInterval(update, 1000);

    $(".saveBtn").on("click", function(){
        // get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        // the change from the html sibling html attribute
        var time = $(this).parent().attr("id");
        // change from the parent html id attribute
        console.log(text, time);
        // set the items in the local storage
        localStorage.setItem(time, text);

    })
 

})

