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
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function timeUpdater(){
        //get current date and time

       var currentHr = parseInt(moment().format("HH"));
        //loop over each time block
        $(".time-block").each(function(){   //query parent, will give us access to the children
    // console.log(parseInt($(this).attr("id").split("r")[1]));
            var hourBlock = parseInt($(this).attr("id").split("r")[1]);
            console.log("compare this", currentHr, hourBlock);
            //check IF time block is in past, present, or future


            
