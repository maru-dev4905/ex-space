var dim             = $(".dim");
var popup           = $(".popup");
var closeBtn        = $(".popup-close-btn-container");

var regex = /[^0-9]/g;

var POPUP_TEXT      = "Compare the sound of";

var videoOpenBtn    = $(".video-open-btn");
var videoData;
var videoNumber;

var videoNumberEl   = $(".popup-text h3");
var videoTitleEl    = $(".popup-text strong");

var videoPoster;

var currentBtn;

var openWayCheck;

videoOpenBtn.click(function(){

    closeBtn.addClass("active");
    dim.addClass("active");
    popup.addClass("active");
    
    videoData   = $(this).data("videoname");
    videoNumber = $(this).data("videonumber");

    var number = videoNumber.replace(regex, "");
    number = "00"+number;
    stereoVideoPoster = number + "_stereo.png";
    ex3dVideoPoster = number + "_ex-3d.png";
    var stereoPosterURL = "./images/thumbnail/" + stereoVideoPoster;
    var ex3dPosterURL = "./images/thumbnail/" + ex3dVideoPoster;

    popup.find("video.streo-video").attr('poster',stereoPosterURL);
    popup.find("video.ex3d-video").attr('poster',ex3dPosterURL);

    var streoURL = `./mp4/${number}_${videoData}_Stereo.mp4`;
    var ex3dURL = `./mp4/${number}_${videoData}_EX-3D.mp4`;

    videoNumberEl.text(POPUP_TEXT);
    videoTitleEl.text(videoNumber + videoData);
    
    popup.find("video.streo-video source").attr('src',streoURL);
    popup.find("video.ex3d-video source").attr('src',ex3dURL);

    if($(this).parent(".swiper-slide").length > 0){
        openWayCheck = "swiper";
        
        $(".video").eq(0).addClass("active");
        $(".video").eq(1).removeClass("active start");
        
        popup.find(".video-kind-btn .streo-btn").addClass("active");
        popup.find(".video-kind-btn .ex3d-btn").removeClass("active");
    
    }else{
        openWayCheck = "list";
    }
    
    st = $(".popup .video").eq(0).get(0).load();
    ex = $(".popup .video").eq(1).get(0).load();
});

$(".popup .video-container").click(function(){
    var th = $(this).find("video.active");

    if(th.hasClass("start")){
        th.removeClass("start");
        th.get(0).pause();
        th.parent().removeClass("active");
    }else{
        th.addClass("start");
        th.get(0).play();
        th.parent().addClass("active");
    }
});

dim.click(function(){
    
    $(".video-container").removeClass("active");
    closeBtn.removeClass("active");
    dim.removeClass("active");
    popup.removeClass("active");

    st = $(".popup .video").eq(0).get(0);
    ex = $(".popup .video").eq(1).get(0);

    st.load();
    ex.load();

    st.pause();
    ex.pause();
    
    $(".video.start").removeClass("start");

});

closeBtn.click(function(){
    $(".video-container").removeClass("active");
    $(this).removeClass("active");
    dim.removeClass("active");
    popup.removeClass("active");

    st = $(".popup .video").eq(0).get(0);
    ex = $(".popup .video").eq(1).get(0);

    st.load();
    ex.load();

    st.pause();
    ex.pause();
    
    $(".video.start").removeClass("start");

})


var popupStreoBtn = $(".popup .streo-btn");
var popupEx3dBtn = $(".popup .ex3d-btn");
var popupBtnCheck;

var st;
var ex;

popupEx3dBtn.click(function(){
    $(".popup .video.streo-video").removeClass("active start");
    $(".popup .video.ex3d-video").addClass("active start");
    
    st = $(".popup .video.streo-video").get(0);
    ex = $(".popup .video.ex3d-video").get(0);

    st.pause();
    ex.currentTime = st.currentTime;
    ex.play();

    popupStreoBtn.removeClass("active");
    popupEx3dBtn.addClass("active");
    
    $(".video-container").addClass("active");
    
    range.val(ex.currentTime);
});

popupStreoBtn.click(function(){
    $(".popup .video.streo-video").addClass("active start");
    $(".popup .video.ex3d-video").removeClass("active start");
    
    st = $(".popup .video.streo-video").get(0);
    ex = $(".popup .video.ex3d-video").get(0);

    ex.pause();
    st.currentTime = ex.currentTime;
    st.play();

    popupEx3dBtn.removeClass("active");
    popupStreoBtn.addClass("active");


    $(".video-container").addClass("active");

    range.val(st.currentTime);
    
});


var playBtn = $(".popup .play-btn");

playBtn.click(function(){
    var th = $(this);
    var thisVideo = th.parent().siblings(".video-container").find("video.active");
    
    if(th.hasClass("active")){
        th.removeClass("active");
        thisVideo.get(0).play();
        thisVideo.addClass("start");
        $(".video-container").addClass("active");
    }else{
        th.addClass("active");
        thisVideo.get(0).pause();
        thisVideo.removeClass("start");
        $(".video-container").removeClass("active");
    }
});

var prevBtn = $(".popup .prev-btn");

prevBtn.click(function(){
    var th              = $(this);
    
    var thisVideo       = th.parent().siblings(".video-container").find("video.active");
    thisVideo.get(0).pause();

    var stereo          = th.parent().siblings(".video-container").find("video.streo-video");
    var ex3d            = th.parent().siblings(".video-container").find("video.ex3d-video");

    var stereoPosterURL = stereo.attr("poster");
    var ex3dPosterURL   = ex3d.attr("poster");

    var videoLength     = $(".music-list-inner .list-container > li").length;

    var number = stereoPosterURL.replace(regex, "");

    var data;
    
    var videoNumber;

    var streoURL; 
    var ex3dURL; 

    if(number == 1){

        videoNumber = $(".music-list .list-title li").eq(videoLength - 1).find("button").data("videonumber");
        
        stereo.attr("poster",`./images/thumbnail/00${videoLength}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${videoLength}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(videoLength - 1).find("button").data("videoname");
        
        videoTitleEl.text(videoNumber + data);

        streoURL = `./mp4/00${videoLength}_${data}_Stereo.mp4`;
        ex3dURL = `./mp4/00${videoLength}_${data}_EX-3D.mp4`;
        
        stereo.find("source").attr('src',streoURL);
        ex3d.find("source").attr('src',ex3dURL);

        stereo.get(0).load();
        ex3d.get(0).load();
    }else{

        videoNumber = $(".music-list .list-title li").eq(number - 2).find("button").data("videonumber");
        
        stereo.attr("poster",`./images/thumbnail/00${number - 1}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${number - 1}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(number - 2).find("button").data("videoname");
        
        videoTitleEl.text(videoNumber + data);

        streoURL = `./mp4/00${number - 1}_${data}_Stereo.mp4`;
        ex3dURL = `./mp4/00${number - 1}_${data}_EX-3D.mp4`;
    
        stereo.find("source").attr('src',streoURL);
        ex3d.find("source").attr('src',ex3dURL);

        stereo.get(0).load();
        ex3d.get(0).load();
    }
    $(".video-container").removeClass("active");
    $(".popup .video").removeClass("start");
});

var nextBtn = $(".popup .next-btn");

nextBtn.click(function(){
    var th              = $(this);
    
    var thisVideo       = th.parent().siblings(".video-container").find("video.active");
    thisVideo.get(0).pause();

    var stereo          = th.parent().siblings(".video-container").find("video.streo-video");
    var ex3d            = th.parent().siblings(".video-container").find("video.ex3d-video");

    var stereoPosterURL = stereo.attr("poster");
    var ex3dPosterURL   = ex3d.attr("poster");

    var videoLength     = $(".music-list-inner .list-container > li").length;

    var number = stereoPosterURL.replace(regex, "");
    number = Number(number);

    var data;
        
    var streoURL; 
    var ex3dURL; 

    if(number == videoLength){

        videoNumber = $(".music-list .list-title li").eq(0).find("button").data("videonumber");
        
        stereo.attr("poster",`./images/thumbnail/00${1}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${1}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(0).find("button").data("videoname");
        
        videoTitleEl.text(videoNumber + data);

        streoURL = `./mp4/00${1}_${data}_Stereo.mp4`;
        ex3dURL = `./mp4/00${1}_${data}_EX-3D.mp4`;
        
        stereo.find("source").attr('src',streoURL);
        ex3d.find("source").attr('src',ex3dURL);

        stereo.get(0).load();
        ex3d.get(0).load();
    }else{
        
        videoNumber = $(".music-list .list-title li").eq(number).find("button").data("videonumber");
        
        stereo.attr("poster",`./images/thumbnail/00${number + 1}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${number + 1}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(number).find("button").data("videoname");
        
        videoTitleEl.text(videoNumber + data);
        
        streoURL = `./mp4/00${number + 1}_${data}_Stereo.mp4`;
        ex3dURL = `./mp4/00${number + 1}_${data}_EX-3D.mp4`;
    
        stereo.find("source").attr('src',streoURL);
        ex3d.find("source").attr('src',ex3dURL);

        stereo.get(0).load();
        ex3d.get(0).load();

    }
    
    $(".video-container").removeClass("active");
    $(".popup .video").removeClass(" start");
});

var speakerBtn = $(".popup .speaker-btn");

speakerBtn.click(function(){
    var th              = $(this);
    
    var thisVideo       = th.parent().siblings(".video-container").find("video");
    
    if(th.hasClass("active")){
        thisVideo.prop('muted',false)
        th.removeClass("active");
    }else{
        thisVideo.prop('muted',true)
        th.addClass("active");
    }
});



var rangeCheck;
var rangeCheck2;
var range = $(".controll-range");

var myVideo = $(".popup .video");

myVideo.on("timeupdate", timeUpdate);

function timeUpdate(){
    var myVideo = $(".popup .video.active").get(0)
    var value = (range.attr("max") / myVideo.duration) * myVideo.currentTime;

    rangeCheck = "update";
    
    range.attr("max",myVideo.duration)

    if(rangeCheck2 == "mousedown"){
        
        return false;
    }else{
        rangeCheck2 = "mouseup";
        rangeChangeFuc(value, myVideo, rangeCheck);
    }
}

var rangeVal;
var currentVal;

range.mousedown(function(){
    rangeCheck2 = "mousedown";
});
range.mouseup(function(){
    rangeCheck2 = "mouseup";
});

range.on('input',function(){
    
    var th          = $(this);

    var thisVideo   = th.parent().siblings(".video-container").find("video.active");
    
    currentVal = $(this).val();

    thisVideo = thisVideo.get(0);

    rangeCheck = "clickChange";

    rangeChangeFuc(currentVal, thisVideo, rangeCheck);
})

function rangeChangeFuc(value, video, check){
     
    if(check == "update"){

        // video.currentTime = value;
        if(rangeCheck2 == "mousedown"){
            
            // range.val(value);
            
            return false;
        }else if(rangeCheck2 == "mouseup"){

            range.val(value);
        }
    }else if(check == "clickChange"){
        video.currentTime = value;

        range.val(value);
    }
    
}