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


function checkBtnKind(el){
    if(el.hasClass(EX3D)){
        toggleBtn(el);
    }else if(el.hasClass(STREO)){
        toggleBtn(el);
    }
};

function toggleBtn(el){
    var otherBtn = el.parent("li").siblings().find("button");
    
    if(otherBtn.hasClass("active")){
        otherBtn.removeClass("active");
    }

    if(el.hasClass("active")){
        el.removeClass("active");
    }else{
        el.addClass("active");
    }
    
};