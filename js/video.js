var dim             = $(".dim");
var popup           = $(".popup");

var regex = /[^0-9]/g;

var POPUP_TEXT      = "Compare the sound of";

var videoOpenBtn    = $(".video-open-btn");
var videoData;
var videoNumber;

var videoNumberEl   = $(".popup-text h3");
var videoTitleEl    = $(".popup-text strong");

var videoPoster;

videoOpenBtn.click(function(){
    
    dim.addClass("active");
    popup.addClass("active");
    
    videoData   = $(this).data("videoname");
    videoNumber = $(this).data("videonumber");

    var number = videoNumber.replace(regex, "");
    number = "00"+number;
    videoPoster = number + "_stereo.png";
    var posterURL = "./images/thumbnail/" + videoPoster;

    popup.find("video.active").attr('poster',posterURL);

    var streoURL = `./mp4/${number}_${videoData}_Stereo.mp4`;
    var ex3dURL = `./mp4/${number}_${videoData}EX-3D.mp4`;

    videoNumberEl.text(POPUP_TEXT);
    videoTitleEl.text(videoNumber + videoData);
    
    popup.find("video.streo-video source").attr('src',streoURL);
    popup.find("video.ex3d-video source").attr('src',ex3dURL);
});

$(".video").click(function(){
    var video = $(this).get(0);

    if($(this).hasClass("start")){

        video.load();
        $(".video-container").removeClass("active");
        $(this).removeClass("start");
        $(this).addClass("stop");
        video.pause();

    }else{
        video.load();
        $(".video-container").addClass("active");
        $(this).removeClass("stop");
        $(this).addClass("start");
        video.play();
        
    }
});

dim.click(function(){
    
    $(".video-container").removeClass("active");
    dim.removeClass("active");
    popup.removeClass("active");

    var video = $(".video.active").get(0);
    video.load();
    video.pause();
    $(".video.start").removeClass("start");

});

// $(".video").on("timeupdate", function() {
//     var myVideo = $(this)[0];
//     var value = (100 / myVideo.duration) * myVideo.currentTime;
//     $("#seek-bar").val(value);
// });