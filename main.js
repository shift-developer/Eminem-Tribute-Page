
/* -------------SHOW FRAME WHEN ALBUM IMG CLICKED-------------*/

function showFrame(element) {
    var frame = document.getElementById(element.id+'-frame');

    if (frame.style.display == 'block') {
        frame.style.display = 'none';
    } else {
        frame.style.display = 'block';
    }
    
}

/* -------------BACK TO TOP BUTTON FUNCTIONALITIES--------------*/

// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#top').fadeIn("fast"); // Fade in the arrow
    } else {
        $('#top').fadeOut("fast"); // Else fade out the arrow
    }
});
$('#top').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
