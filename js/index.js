
// NAVIGATION TOGGLE
function show() {
    document.querySelector('.navigation').classList.toggle('active');
};

// BACKGROUND CHANGE WHILE SCROLLING
$( window ).ready(function() {
    var wHeight = $(window).height();
    
    $('.slide')
    .height(wHeight)
    .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
        var bgColor = elem.data('background');
        
        $('body').css('background-color', bgColor);
        }
    });
});

// WAYPOINTS
$('#wp-1').waypoint(function (direction) {
    $('#wp-1').addClass('animated fadeIn');
}, {
    offset: '60%'
});


// KAKAO MAP
/*
new daum.roughmap.Lander({
    "timestamp" : "1586588048930",
    "key" : "xvj6",
    "mapWidth" : "700",
    "mapHeight" : "360"
}).render();
*/