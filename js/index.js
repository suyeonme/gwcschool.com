
/////////////////////////////////////
// NAVIGATION TOGGLE
function show() {
    document.querySelector('.navigation').classList.toggle('active');
};

/////////////////////////////////////
// BACKGROUND CHANGE WHILE SCROLLING
$(window).ready(function () {
    var wHeight = $(window).height();

    $('.slide')
        .height(wHeight)
        .scrollie({
            scrollOffset: -50,
            scrollingInView: function (elem) {
                var bgColor = elem.data('background');

                $('body').css('background-color', bgColor);
            }
        });
});

/////////////////////////////////////
// KAKAO MAP
new daum.roughmap.Lander({
    "timestamp": "1587986189284",
    "key": "y5rn"
}).render();


/////////////////////////////////////
// WAYPOINTS
$('#wp-1').waypoint(function (direction) {
    $('#wp-1').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('#wp-2').waypoint(function (direction) {
    $('#wp-2').addClass('animated fadeIn');
}, {
    offset: '80%'
});

// Barista
$('#wp-3').waypoint(function (direction) {
    $('#wp-3').addClass('animated fadeIn');
}, {
    offset: '60%'
});

$('#wp-4').waypoint(function (direction) {
    $('#wp-4').addClass('animated fadeIn');
}, {
    offset: '60%'
});

$('#wp-5').waypoint(function (direction) {
    $('#wp-5').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('#wp-6').waypoint(function (direction) {
    $('#wp-6').addClass('animated fadeIn');
}, {
    offset: '60%'
});

$('#wp-7').waypoint(function (direction) {
    $('#wp-7').addClass('animated fadeIn');
}, {
    offset: '60%'
});

// fadeInUp
$('#wp-16').waypoint(function (direction) {
    $('#wp-16').addClass('animated fadeInUp');
}, {
    offset: '70%'
});

$('#wp-17').waypoint(function (direction) {
    $('#wp-17').addClass('animated fadeInUp');
}, {
    offset: '60%'
});

$('#wp-18').waypoint(function (direction) {
    $('#wp-18').addClass('animated fadeInUp');
}, {
    offset: '60%'
});

$('#wp-19').waypoint(function (direction) {
    $('#wp-19').addClass('animated fadeInUp');
}, {
    offset: '60%'
});


