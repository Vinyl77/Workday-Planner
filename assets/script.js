
$(document).ready(function() {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
        function update(){
            $("#currentDay").html(moment().format("MMMM Do YYYY hh:mm:ss a"));
        }
        setInterval(update, 1000);

    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
        console.log(text, time)
        //set items in local storage.
        localStorage.setItem(time, text);
    })

    
    function timeUpdater(){
        //get current

var currentHr = parseInt(moment().format("HH"));
        //loop over each time block
        $(".time-block").each(function(){   //query parent, will give us access to the children
    // console.log(parseInt($(this).attr("id").split("r")[1]));
            var hourBlock = parseInt($(this).attr("id").split("r")[1]);
            console.log("compare this", currentHr, hourBlock);
            //check IF time block is in past, present, or future
            if (currentHr > hourBlock){
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present")
            }
            else if (hourBlock === currentHr){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");


            }
            


        })
        
    }
    
    
    timeUpdater();
    
    
    
    
    
    
    

    // possible solution to current arrangement with local storage.
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(`hour${arr[i]}`)
    //     console.log(localStorage.getItem(`hour${arr[i]}`))   
    //     var element = $(`#hour${arr[i]} .description`)

    //     element.val(localStorage.getItem(`hour${arr[i]}`))
    // }



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
     

})
