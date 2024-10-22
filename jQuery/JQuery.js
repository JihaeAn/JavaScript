$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    })

    $("button").click(function (){
        $("div").fadeIn("slow");
    })

    $(".btn").click(function (){
        $("p").slideUp(1000);
    })

    $("input").click(function(){
        console.log($(".kunhee").val("0916"));
    })

    $("#love").change(function(){
        console.log("변경 감지");
    })

    $("#love").hover(function(){
        // 마우스 올라갔을 때
        console.log("마우스 올라감")
    },function (){
        // 마우스 내려갔을 때
        console.log("마우스 내려감")
    })
})
