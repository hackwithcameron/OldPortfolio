function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 









/* jQuery */

/*-----------SLIDESHOW------------*/

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $("#slideshow > div:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#slideshow");
}, 3000);

$("#enter").click(function() {
    $('html, body').animate( {
        scrollBottom: $("#video-container").offset().top
    }, 500);
});


