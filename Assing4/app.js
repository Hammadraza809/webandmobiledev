//sticky navbar on scroll/shrink nav bar
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("logo").style.height = "50px";
        document.getElementById("navbar").style.transition = "0.4s"
        document.getElementById("logo").style.transition = "0.4s"
    } else {
        document.getElementById("logo").style.height = "120px";
    }
} //navbar function end