$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;
//var $l_xcurs;
//var $l_ycurs;
//var $xcurs = 0;
//var $ycurs = 0;
//var $headerHeight = 44; 
//var $lhs = parseInt(this.offsetWidth)
//var $lhs = (document.body.offsetWidth-1000)/2;
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
    $xxx = event.pageX;
	$yyy = event.pageY;
    alert($xxx + ' , ' + $yyy);
    //$l_xcurs = Math.ceil((xcurs - lhs))+1; //Changes search width for ad board//
	//$l_ycurs = Math.ceil((ycurs - headerHeight)); 
});
console.log($videoSrc);

// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
})
  
  
// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc);
    $("#maybewinner").prop("disabled", true);
    $("#maybewinner").text("Please wait");
})


// Have random compare "winner" button appear after time//
$( "#support" ).click(function() {
	$("#maybewinner").prop("disabled", true);
        setTimeout(function(){
        	$("#maybewinner").text("Wait 7")}, 1000);

        setTimeout(function(){
        	$("#maybewinner").text("Wait 6")}, 2000);

        setTimeout(function(){
        	$("#maybewinner").text("Wait 5")}, 3000);

        setTimeout(function(){
        	$("#maybewinner").text("Wait 4")}, 4000);
        
        setTimeout(function(){
        	$("#maybewinner").text("Wait 3")}, 5000);

        setTimeout(function(){
        	$("#maybewinner").text("Wait 2")}, 6000);

        setTimeout(function(){
        	$("#maybewinner").text("Wait 1")}, 7000);
        
        setTimeout(function(){
        	$("#maybewinner").prop("disabled", false); $("#maybewinner").text("Winner?")}, 8000);
        
		});
  
// document ready  
});