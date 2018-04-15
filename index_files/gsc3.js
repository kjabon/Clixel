

//Basically I don't really get yet where it draws the box on the page, and I'd like to change it so that when your mouse is on the right, the box gets drawn to the left of the mouse.


/*
     FILE ARCHIVED ON 5:47:20 Aug 6, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:45:17 Aug 24, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var total = 1731.87;
var totalwithcommas = total.toLocaleString();

var bH = false;
var bZ = false;
var showMode = false;
function tn() {
	da();
	document.getElementById('neg').style.display="block";
	document.getElementById('sn').src = "img-pix/btnneg1.gif";
	showMode = true;
}
function th() {
	da();
	document.getElementById('f').style.display="block";
	bH = true;
}
function tz() {
	da();
	document.getElementById('sz').src = "img-pix/btnzoom1.gif";
	bZ = true;
	document.getElementById('een').style.display="block";
	showMode = true;
}
function da2() {
	da();
	document.getElementById('so').src = "img-pix/btnnor1.gif";	
	showMode = false;
}
function da() {
	document.getElementById('f').style.display="none";
	document.getElementById('een').style.display="none";
	document.getElementById('neg').style.display="none";
	document.getElementById('sn').src = "img-pix/btnneg0.gif";
	document.getElementById('sz').src = "img-pix/btnzoom0.gif";
	document.getElementById('so').src = "img-pix/btnnor0.gif";
	bH = false;
}

function amoeContinue(){
	document.getElementById("amoebtncontinue").style.display="none";
	document.getElementById("amoebtnclose").style.display="none";
	document.getElementById("textbeforeamoe").style.display="block";
	document.getElementById("amoebtn").style.display="block";
}

function amoeClose(){
	location.reload();
}

//start popup window code//

var popupWindow = null;
function centeredPopup(url,winName,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url,winName,settings)
}

//end popup window code//

var headerHeight = 44; //Changes start (top) of ad board//

var l_xcurs;
var l_ycurs;
var l_xcurs_random=Math.floor(Math.random() * 1000) + 1;
var l_ycurs_random=Math.floor(Math.random() * 1000) + 1;

function randomCompare(){
	
		if (l_xcurs > 1000){
			l_xcurs = 1000
		}
		if (l_xcurs < 1){
			l_xcurs = 1
		}
		if (l_ycurs > 1000 ){
			l_ycurs = 1000
		}
		if (l_ycurs < 1){
			l_ycurs = 1
		}
		if (l_xcurs == l_xcurs_random && l_ycurs == l_ycurs_random) {
		alert("You picked correctly but this still needs work. Sorry!")
		}
		else {
			alert("I'm sorry, but you chose (" + l_xcurs + "," + l_ycurs + ") and the winning pixel was (" + l_xcurs_random + "," + l_ycurs_random + ").\nYou were " + Math.round(Math.sqrt((Math.pow(l_xcurs - l_xcurs_random, 2) + Math.pow(l_ycurs - l_ycurs_random, 2)))) + " pixels away from the winning pixel.");
			location.reload();
		}
} //compares the randomly selected number to the one the participant chose//

function winnerexample(){

		var node1 = document.getElementById("maybewinner");
		var node2 = document.getElementById("winnerexample");
		var a = document.createAttribute("hidden");
		var b = document.createAttribute("hidden");
		node1.setAttributeNode(a);
		node2.setAttributeNode(b);

		if (document.getElementById("winner").hasAttribute("hidden")) {
			(document.getElementById("winner").removeAttribute("hidden"))
		}
		else{
		}

}

// turns total into 10% and adds appropriate commas //
var tenpercent = (total / 10);
var tenpercentwithcommas = tenpercent.toLocaleString(undefined, {maximumFractionDigits:2})

function fractionfunction(){
	alert("The money will be credited to your account.");
	window.location.reload();
}

var oneintwentywinningvar = Math.floor(Math.random() * 20) + 1;

function oneintwenty(value){
	var oneintwentyvar = value;
	if (oneintwentyvar == oneintwentywinningvar){
		alert("You picked correctly! Congratulations! The money will be credited to your account!");
		window.location.reload();
	}
	else{
		alert("I'm sorry, but you chose " + oneintwentyvar + " and the winning button was " + oneintwentywinningvar + ".");
		window.location.reload();
	}
}  

var l_xcurs_faux=Math.floor(Math.random() * 1000) + 1;
var l_ycurs_faux=Math.floor(Math.random() * 1000) + 1;

function amoeButton(){

	document.getElementById("amoebtn").disabled = true;
	
    setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 8"}, 0);
	
	setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 7"}, 1000);
	
	setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 6"}, 2000);
	
	setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 5"}, 3000);
	
	setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 4"}, 4000);
	
	setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 3"}, 5000);
	
	setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 2"}, 6000);
	
	setTimeout(function(){
        document.getElementById("amoebtn").value = "Discover if you've won in 1"}, 7000);

	setTimeout(function(){
		if (l_xcurs_faux == l_xcurs_random && l_ycurs_faux == l_ycurs_random) {
		alert("Congratulations! You've won!");
	}
	else{
		alert("I'm sorry, but you chose (" + l_xcurs_faux + "," + l_ycurs_faux + ") and the winning pixel was (" + l_xcurs_random + "," + l_ycurs_random + ").\nYou were " + Math.round(Math.sqrt((Math.pow(l_xcurs_faux - l_xcurs_random, 2) + Math.pow(l_ycurs_faux - l_ycurs_random, 2)))) + " pixels away from the winning pixel.")
		location.reload()
	}}, 8000);
}

if (document.all){}
else document.captureEvents(Event.MOUSEMOVE);
document.onmousemove=mtrack;

function mtrack(e) {
	var lhs = (document.body.offsetWidth-1000)/2; //(used to be -1000) Changes where the search area starts for ad block. OffsetWidth supposedly display width of an area//
	var xcurs = 0;
	var ycurs = 0;

if ($carry == false){ //boolean found in modal.js
	if (navigator.appName == 'Netscape'){
		$xxx = event.pageX;
		$yyy = event.pageY;
//		showMode = false;
}
	 else {
		$xxx = event.clientX; //clientX supposedly gets the coordinates of the page//
		$yyy = event.clientY; //clientY supposedly gets the coordinates of the page//
	}
	if (navigator.appName == 'Netscape') {
		document.getElementById('d').style.left=$xxx + 11; //Changes ad hover display box start//
		document.getElementById('d').style.top=$yyy;
		l_xcurs = Math.ceil(($xxx - lhs)) + 1; //Changes search width for ad board//
		l_ycurs = Math.ceil(($yyy - headerHeight)); //Changes search height for ad board//
		
	}	else {
		l_xcurs = Math.ceil(($xxx - lhs)/10) + 1;
		l_ycurs = Math.ceil(($yyy - headerHeight + document.body.scrollTop)/10);
		document.getElementById('d').style.top=$yyy + document.body.scrollTop - 5;
		document.getElementById('d').style.left=$xxx + 14 + document.body.scrollLeft;
	}

	if ((l_ycurs <= 0) || (l_ycurs > 1000) || (l_xcurs <= 0) || (l_xcurs > 1000)){ //Used for hover info panel on empty pixels//
		document.getElementById('d').style.display = "none";
	} else {
		document.getElementById('d').style.display = "";
		if (showMode) {
			document.getElementById('xcoord').innerHTML = "(" + l_xcurs + ",";
			document.getElementById('ycoord').innerHTML = l_ycurs + ")";
		} else {
			if (sTitle == "") {
				document.getElementById('xcoord').innerHTML = ""; //Used for pixels with no ads
					document.getElementById('xcoord').innerHTML += " (" + l_xcurs + ",";
					document.getElementById('ycoord').innerHTML = l_ycurs + ")";
			} else {	
				document.getElementById('xcoord').innerHTML = sTitle + " " + "(" + l_xcurs + "," + l_ycurs + ")"; //Changed to display coord also//
				document.getElementById('ycoord').innerHTML = "";
			}
		}
	}
}
else {

if (navigator.appName == 'Netscape') {
		document.getElementById('d').style.left=$xxx + 11; //Changes ad hover display box start//
		document.getElementById('d').style.top=$yyy;
		l_xcurs = Math.ceil(($xxx - lhs)) + 1; //Changes search width for ad board//
		l_ycurs = Math.ceil(($yyy - headerHeight)); //Changes search height for ad board//

	} else {
		l_xcurs = Math.ceil(($xxx - lhs)/10) + 1;
		l_ycurs = Math.ceil(($yyy - headerHeight + document.body.scrollTop)/10);
		document.getElementById('d').style.top=$yyy + document.body.scrollTop - 5;
		document.getElementById('d').style.left=$xxx + 14 + document.body.scrollLeft;
	}

	if ((l_ycurs <= 0) || (l_ycurs > 1000) || (l_xcurs <= 0) || (l_xcurs > 1000)){ //Used for hover info panel on empty pixels//
		document.getElementById('d').style.display = "none";
	} else {
		document.getElementById('d').style.display = "";
		if (showMode) {
			document.getElementById('xcoord').innerHTML = "(" + l_xcurs + ",";
			document.getElementById('ycoord').innerHTML = l_ycurs + ")";
		} else {
			if (sTitle == "") {
				document.getElementById('xcoord').innerHTML = ""; //Used for pixels with no ads
					document.getElementById('xcoord').innerHTML += " (" + l_xcurs + ",";
					document.getElementById('ycoord').innerHTML = l_ycurs + ")";
			} else {	
				document.getElementById('xcoord').innerHTML = sTitle + " " + "(" + l_xcurs + "," + l_ycurs + ")"; //Changed to display coord also//
				document.getElementById('ycoord').innerHTML = "";
			}
		}
	}

}

	if (!bZ) {
		return;
	}
	var x,y,x1,x2,y1,y2,dx=0,dy=0;
	fact=2;
	opp=100;

	x=event.x;
	y=event.y;
	   
	dx=window.document.body.scrollLeft;
	dy=window.document.body.scrollTop;

	x1=-opp+(x+dx)*fact;	//left
	y1=-opp+(y+dy)*fact - (document.body.scrollTop*fact);	//top
	x2=+opp+(x+dx)*fact;	//right
	y2=+opp+(y+dy)*fact - (document.body.scrollTop*fact);	//bottom

	document.getElementById('een').style.left=(x+dx)*(1-fact);
	document.getElementById('een').style.top=(y+dy)*(1-fact) + document.body.scrollTop;
	document.getElementById('een').style.clip="rect(" +y1 +"px," +x2 +"px," +y2 +"px,"+x1 +"px)";

}

function h(iL, iT, iW, iH) {
	if (!bH) {return;}
	document.getElementById('f').style.left=iL - 1;
	document.getElementById('f').style.top=64+iT;
	document.getElementById('f').style.width=iW + 4;
	document.getElementById('f').style.height=iH + 4;
}

var sTitle="";
function d(o) {

	sTitle = o.title;
}
function e(o) {
	sTitle = "";	
}