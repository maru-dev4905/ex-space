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

    // currentBtn = $(this).siblings("ul").find("button.active");

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

    // if(currentBtn.hasClass("streo-btn")){
    //     // ex3d
    //     popup.find(".video-kind-btn .ex3d-btn").addClass("active");
    //     popup.find(".video-kind-btn .streo-btn").removeClass("active");
        
    
    //     popupEx3dBtn.removeClass("active");
    //     popupStreoBtn.addClass("active");
    
    //     $(".video").eq(0).addClass("active");
    //     $(".video").eq(1).removeClass("active start");
    
    //     $(".video-container").removeClass("active");

    // }else{
    //     // streo
    //     popup.find(".video-kind-btn .streo-btn").addClass("active");
    //     popup.find(".video-kind-btn .ex3d-btn").removeClass("active");
    
    //     var video = $(".video.active").get(0);
    //     video.load();
    //     video.pause();
        
    //     var video = $(".video.active").get(0);
    //     video.load();
    //     video.pause();

    //     popupStreoBtn.removeClass("active");
    //     popupEx3dBtn.addClass("active");

    //     $(".video").eq(0).removeClass("active start");
    //     $(".video").eq(1).addClass("active");

    //     $(".video-container").removeClass("active");
    // }

    if($(this).parent(".swiper-slide").length > 0){
        openWayCheck = "swiper";
        
        $(".video").eq(0).addClass("active");
        $(".video").eq(1).removeClass("active start");
        
        popup.find(".video-kind-btn .streo-btn").addClass("active");
        popup.find(".video-kind-btn .ex3d-btn").removeClass("active");
    
    }else{
        openWayCheck = "list";
    }
    console.log(openWayCheck)
});

$(".swiper-slide .video").click(function(){
    var video = $(this).get(0);

    if($(this).hasClass("start")){

        $(".video-container").removeClass("active");
        $(this).removeClass("start");
        video.pause();

    }else{
        $(".video-container").addClass("active");
        $(this).addClass("start");
        video.play();
        
    }
});

dim.click(function(){
    
    $(".video-container").removeClass("active");
    closeBtn.removeClass("active");
    dim.removeClass("active");
    popup.removeClass("active");

    var video = $(".video.active").get(0);
    video.load();
    video.pause();
    $(".video.start").removeClass("start");

});

closeBtn.click(function(){
    $(".video-container").removeClass("active");
    $(this).removeClass("active");
    dim.removeClass("active");
    popup.removeClass("active");

    var video = $(".video.active").get(0);
    video.load();
    video.pause();
    $(".video.start").removeClass("start");

})

// $(".video").on("timeupdate", function() {
//     var myVideo = $(this)[0];
//     var value = (100 / myVideo.duration) * myVideo.currentTime;
//     $("#seek-bar").val(value);
// });

var popupStreoBtn = $(".popup .streo-btn");
var popupEx3dBtn = $(".popup .ex3d-btn");
var popupBtnCheck;

var st = $(".video-container .video.streo-video").get(0);
var ex = $(".video-container .video.ex3d-video").get(0);

popupEx3dBtn.click(function(){
    $(".popup .video.streo-video").removeClass("active start");
    $(".popup .video.ex3d-video").addClass("active");
    
    st.load();
    ex.load();

    st.pause();
    ex.currentTime = st.currentTime;
    ex.play();
    
    // var video = $(".popup .video.active").get(0);
    // video.load();
    // video.pause();

    popupStreoBtn.removeClass("active");
    popupEx3dBtn.addClass("active");


    $(".video-container").removeClass("active");
    
    // if(openWayCheck == "list"){
    
    //     for(var i = 0 ; i < $(".video-open-btn").length; i++){
    //         if(videoData == $(".video-open-btn").eq(i).data("videoname")){
    //             $(".video-open-btn").eq(i).siblings("ul").find(".ex3d-btn").addClass("active");
    //             $(".video-open-btn").eq(i).siblings("ul").find(".streo-btn").removeClass("active");
    //             $(".video-open-btn").eq(i).find("img").eq(0).addClass("active");
    //             $(".video-open-btn").eq(i).find("img").eq(1).removeClass("active");
    //         }
    //     }
    // }else{
    //     return false;
    // }
});

popupStreoBtn.click(function(){
    
    $(".popup .video.streo-video").addClass("active");
    $(".popup .video.ex3d-video").removeClass("active start");

    st.load();
    ex.load();

    ex.pause();
    st.currentTime = ex.currentTime;
    st.play();

    popupEx3dBtn.removeClass("active");
    popupStreoBtn.addClass("active");


    $(".video-container").removeClass("active");
    
    // if(openWayCheck == "list"){
    //     for(var i = 0 ; i < $(".video-open-btn").length; i++){
    //         if(videoData == $(".video-open-btn").eq(i).data("videoname")){
    //             $(".video-open-btn").eq(i).siblings("ul").find(".ex3d-btn").removeClass("active");
    //             $(".video-open-btn").eq(i).siblings("ul").find(".streo-btn").addClass("active");
    //             $(".video-open-btn").eq(i).find("img").eq(1).addClass("active");
    //             $(".video-open-btn").eq(i).find("img").eq(0).removeClass("active");
    //         }
    //     }
    // }else{

    //     return false;
    // }

});
