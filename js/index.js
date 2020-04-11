// Navigation toggle
function show() {
    document.querySelector('.navigation').classList.toggle('active');
};

// KAKAO MAP
new daum.roughmap.Lander({
    "timestamp" : "1586588048930",
    "key" : "xvj6",
    "mapWidth" : "700",
    "mapHeight" : "360"
}).render();
