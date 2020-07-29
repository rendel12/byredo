$(document).ready(function() {
    
    
    $(window).scroll(function(){
    var sc_top=$(this).scrollTop();

    if(sc_top>130){
        $('.gnb').addClass('sc_option');
        $('.gnb_wrap').addClass('sc_div');
        $('.main_logo').addClass('dis_none');
        $('.lnb').addClass('dis_none');
        $('#header').removeClass('inner');
        
    }else if(sc_top==0){
        $('.gnb').removeClass('sc_option');
        $('.gnb_wrap').removeClass('sc_div');
        $('.main_logo').removeClass('dis_none');
        $('.lnb').removeClass('dis_none');
        $('#header').addClass('inner');
    }
    })
    
    
});
