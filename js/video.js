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
    var th = $(this).find("video");

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

$(".controll-range").val(1);

$(".popup .video.active").on("timeupdate", function() {
    var myVideo = $(this)[0];
    var value = (100 / myVideo.duration) * myVideo.currentTime;
    $(".controll-range").val(value);
});

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
    
});

popupStreoBtn.click(function(){
    $(".popup .video.streo-video").addClass("active start");
    $(".popup .video.ex3d-video").removeClass("active start");
    
    st = $(".popup .video.streo-video").get(0);
    ex = $(".popup .video.ex3d-video").get(0);

    ex.pause();
    st.currentTime = st.currentTime;
    st.play();

    popupEx3dBtn.removeClass("active");
    popupStreoBtn.addClass("active");


    $(".video-container").addClass("active");
    
});


var playBtn = $(".popup .play-btn");

playBtn.click(function(){
    var th = $(this);
    var thisVideo = th.parent().siblings(".video-container").find("video.active");
    thisVideo.get(0).pause();
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
        
    var streoURL; 
    var ex3dURL; 

    if(number == 1){

        stereo.attr("poster",`./images/thumbnail/00${videoLength}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${videoLength}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(videoLength - 1).find("button").data("videoname");
        
        streoURL = `./mp4/00${videoLength}_${data}_Stereo.mp4`;
        ex3dURL = `./mp4/00${videoLength}_${data}_EX-3D.mp4`;
        
        stereo.find("source").attr('src',streoURL);
        ex3d.find("source").attr('src',ex3dURL);

        stereo.get(0).load();
        ex3d.get(0).load();
    }else{
        
        stereo.attr("poster",`./images/thumbnail/00${number - 1}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${number - 1}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(number - 2).find("button").data("videoname");
        
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

        stereo.attr("poster",`./images/thumbnail/00${1}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${1}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(0).find("button").data("videoname");
        
        streoURL = `./mp4/00${1}_${data}_Stereo.mp4`;
        ex3dURL = `./mp4/00${1}_${data}_EX-3D.mp4`;
        
        stereo.find("source").attr('src',streoURL);
        ex3d.find("source").attr('src',ex3dURL);

        stereo.get(0).load();
        ex3d.get(0).load();
    }else{
        stereo.attr("poster",`./images/thumbnail/00${number + 1}_stereo.png`);
        ex3d.attr("poster",`./images/thumbnail/00${number + 1}_ex-3d.png`);
        
        data = $(".music-list .list-title li").eq(number).find("button").data("videoname");
        
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