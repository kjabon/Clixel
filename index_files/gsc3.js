

//Basically I don't really get yet where it draws the box on the page, and I'd like to change it so that when your mouse is on the right, the box gets drawn to the left of the mouse.


/*
     FILE ARCHIVED ON 5:47:20 Aug 6, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:45:17 Aug 24, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
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
var headerHeight = 65;


if (document.all){}
else document.captureEvents(Event.MOUSEMOVE);
document.onmousemove=mtrack;

function mtrack(e) {
	var lhs = 0;//(document.body.offsetWidth - 1333); //Changes where the search area starts for ad block. OffsetWidth supposedly display width of an area//
	var xcurs = 0;
	var ycurs = 0;

	if (navigator.appName == 'Netscape'){
		xcurs = e.pageX;
		ycurs = e.pageY;
//		showMode = false;
	} else {
		xcurs = event.clientX; //clientX supposedly gets the coordinates of the page//
		ycurs = event.clientY; //clientY supposedly gets the coordinates of the page//
	}

	var l_xcurs;
	var l_ycurs;

	if (navigator.appName == 'Netscape') {//we're not using netscape so I doubt this block matters much
		document.getElementById('d').style.left=xcurs + 10;
		document.getElementById('d').style.top=ycurs;
		l_xcurs = Math.ceil((xcurs - lhs)*.6575) + 6; //was  (xcurs - lhs)/10)+1(?), for 3 mill: ((xcurs - lhs)*1.262) + 12//
		l_ycurs = Math.ceil((ycurs - headerHeight)*.7266)-2; //was  ((ycurs - headerHeight)/10), for 3 mill: ((ycurs - headerHeight)*1.137)-3//
	} else {
		l_xcurs = Math.ceil((xcurs - lhs)/10) + 1;
		l_ycurs = Math.ceil((ycurs - headerHeight + document.body.scrollTop)/10);
		document.getElementById('d').style.top=ycurs + document.body.scrollTop - 5;
		document.getElementById('d').style.left=xcurs + 14 + document.body.scrollLeft;
	}



	if ((l_ycurs <= 0) || (l_ycurs > 800) || (l_xcurs <= 0) || (l_xcurs > 1250)){ //Used for hover info panel on empty pixels, for 3 million: ((l_ycurs <= 0) || (l_ycurs > 1250) || (l_xcurs <= 0) || (l_xcurs > 2400))//
		document.getElementById('d').style.display = "none";
	} else {
		document.getElementById('d').style.display = "";
		if (showMode) {
			document.getElementById('xcoord').innerHTML = "(" + l_xcurs + ",";
			document.getElementById('ycoord').innerHTML = l_ycurs + ")";
		} else {
			if (sTitle == "") {
				document.getElementById('xcoord').innerHTML = "Purchase these pixels using the link above!"; //Used for pixels with no ads
					document.getElementById('xcoord').innerHTML += " (" + l_xcurs + ",";
					document.getElementById('ycoord').innerHTML = l_ycurs + ")";
			} else {	
				document.getElementById('xcoord').innerHTML = sTitle;
				document.getElementById('ycoord').innerHTML = "";
			}//The previous 6 lines are for writing either the title, which contains the mouseover box's coordinates already, or the current location.
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