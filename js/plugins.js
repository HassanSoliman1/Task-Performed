// Code Of Tabs
$(document).ready(function(){

    $('#my-tabs li ').click(function(){  
        // Get The Clicked li id And Store in myId Varible
        var myId = $(this).attr('id');
        $(this).removeClass("inactive").siblings().addClass("inactive");
        $('#tabs div').hide();

        $('#'+myId+ '-content').fadeIn(1000);
    })
})

// ===================

$(window).scroll( function(){

    let scrollValue = $(window).scrollTop()

    if( scrollValue >= 500)
    {
        $(".navbar").hide();
        
    }
    
    if(scrollValue <= 500)
    {
        $(".navbar").fadeIn(1000);
    }
})

// Scroll to top 
$(window).scroll( function() {

    if( $(this).scrollTop() > 300 ) {

        $('#arrow-up').fadeIn();
    }
    else
    {
        $('#arrow-up').fadeOut();
    }

});

$('#arrow-up').on('click',function(){

    $('html , body').animate ({

        scrollTop:0   

    } , 500);
});

// =================================

$(document).ready(function(){



    $('#click').click(function(){

        $('.dropDown ul li').toggle(1000);
        
    });
});


