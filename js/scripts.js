//All scripts loaded here
var navbottom = $('.overlay').offset().top + $('.overlay').height();

$(window).on('scroll',function(){
    // we round off here to reduce a little workload
    var stop = Math.round($(window).scrollTop());
    if (stop > navbottom) {
        $('.navigation').addClass('pastnav');
    } else {
        $('.navigation').removeClass('pastnav');
    }
});

function scrollservices(){
    $('#services').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        });
}
//The following invokes the click function when triggered
$('#toservices').click(function (){
    $('#services').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        });
});
$('#toteam').click(function (){
    $('#team').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        });
});
$('#tocontactus').click(function (){
    $('#contactus').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        });
});
//Scrolling effects for navigation menu
//var options[
//    {selector:'.navigation', offset:'800', callback:'changeColor()'}
//];
//function changeColor(){
//
//}
//Materialize.scrollFire(options);
