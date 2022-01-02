var listStreoBtn    = $(".list-container .streo-btn");
var listEx3dBtn     = $(".list-container .ex3d-btn");

var EX3D = "ex3d-btn";
var STREO = "streo-btn";

listStreoBtn.click(function(){
    checkBtnKind($(this));
});

listEx3dBtn.click(function(){
    checkBtnKind($(this));
});

var video  = $(".list-video-container video");

video.click(function(){
    var thisVideo = $(this).get(0);

    if($(this).parent().hasClass("start")){

        $(this).parent().removeClass("active start");
        thisVideo.pause();
        
    }else{
        $(this).parent().addClass("active start");
        thisVideo.play();
        
    }
    
});

function checkBtnKind(el){
    if(el.hasClass(EX3D)){
        toggleBtn(el);
        el.parent().parent().siblings(".list-video-container").find("video").eq(1).addClass("active");
        el.parent().parent().siblings(".list-video-container").find("video").eq(0).removeClass("active");

        var st = el.parent().parent().siblings(".list-video-container").find("video").eq(0).get(0);
        var ex = el.parent().parent().siblings(".list-video-container").find("video").eq(1).get(0);
        
        st.pause();
        ex.currentTime = st.currentTime;
        ex.play();

        el.parent().parent().siblings(".list-video-container").addClass("active start");

    }else if(el.hasClass(STREO)){
        toggleBtn(el);
        el.parent().parent().siblings(".list-video-container").find("video").eq(0).addClass("active");
        el.parent().parent().siblings(".list-video-container").find("video").eq(1).removeClass("active ");
    
        var st = el.parent().parent().siblings(".list-video-container").find("video").eq(0).get(0);
        var ex = el.parent().parent().siblings(".list-video-container").find("video").eq(1).get(0);
        
        ex.pause();
        st.currentTime = ex.currentTime;
        st.play();

        el.parent().parent().siblings(".list-video-container").addClass("active start");

    }
};

function toggleBtn(el){
    var otherBtn = el.parent("li").siblings().find("button");
    
    if(otherBtn.hasClass("active")){
        otherBtn.removeClass("active");
    }

    if(el.hasClass("active")){
        
    }else{
        el.addClass("active");
    }
    
};

