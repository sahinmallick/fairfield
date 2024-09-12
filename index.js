function loadApp() {
    var flipbook = $('.flipbook');
    var flipSound = document.getElementById('flipSound');

    if (flipbook.width() == 0 || flipbook.height() == 0) {
        setTimeout(loadApp, 10);
        return;
    }

    $('.flipbook .double').scissor();

    flipbook.turn({
        elevation: 50,
        gradients: true,
        autoCenter: true,
        display: 'single',
    });

    flipbook.bind('turning', function(event, page, view) {
        flipSound.currentTime = 0; 
        flipSound.play(); 
    });

    $(window).on('click', function() {
        flipbook.turn('next');
    });
}

yepnope({
    test: Modernizr.csstransforms,
    yep: ['lib/turn.min.js'],
    nope: ['lib/turn.html4.min.js'],
    both: ['lib/scissor.min.js', 'index.css'],
    complete: loadApp
});