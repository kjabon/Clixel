var total = 1731.87;
var totalwithcommas = total.toLocaleString();

var showMode = false;

function amoeContinue(){
	document.getElementById("amoebtncontinue").style.display="none";
	document.getElementById("amoebtnclose").style.display="none";
	document.getElementById("textbeforeamoe").style.display="block";
	document.getElementById("amoebtn").style.display="block";
}

function amoeClose(){
	location.reload();
}

var headerHeight = 44; //Changes start (top) of ad board//

var l_xcurs;
var l_ycurs;
var l_xcurs_random=Math.floor(Math.random() * 1000) + 1;
var l_ycurs_random=Math.floor(Math.random() * 1000) + 1;

 //compares the randomly selected number to the one the participant chose//
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
			alert("You picked correctly! Congratulations! A new window will now load.")
			document.getElementById("winner").click();
		}
		else {
			alert("I'm sorry, but you chose (" + l_xcurs + "," + l_ycurs + ") and the winning pixel was (" + l_xcurs_random + "," + l_ycurs_random + ").\nYou were " + Math.round(Math.sqrt((Math.pow(l_xcurs - l_xcurs_random, 2) + Math.pow(l_ycurs - l_ycurs_random, 2)))) + " pixels away from the winning pixel.");
			location.reload();
		}
}

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
		if (l_xcurs_faux == l_xcurs_faux && l_ycurs_faux == l_ycurs_faux) {
			alert("Congratulations! A new window will now load.");
        	document.getElementById("winner").click();
		}
		else{
			alert("I'm sorry, but you chose (" + l_xcurs_faux + "," + l_ycurs_faux + ") and the winning pixel was (" + l_xcurs_random + "," + l_ycurs_random + ").");
			location.reload()
	}}, 8000);
}

document.onmousemove = mouseinfo;

var sTitle="";
function d(o) {
sTitle = o.title;
}

function mouseinfo() {
	
	//WORK HERE DOWN//

	var lhs = (document.body.getBoundingClientRect().width)/2; //Changes where the search area starts for ad block. OffsetWidth supposedly display width of an area//
	
	//WORK HERE UP//

	if ($carry == false){ //boolean found in modal.js
			$xxx = event.pageX;
			$yyy = event.pageY;
	}
	
	//WORK HERE DOWN//

	document.getElementById('d').style.left=$xxx + 10; //Changes mouse hover display box start////
	document.getElementById('d').style.top=$yyy + 18;

	if (((lhs % 1) * 10) < 5) {
		l_xcurs = Math.ceil(($xxx - lhs + 500)) + 1;
	}
	else {
		l_xcurs = Math.floor(($xxx - lhs + 500)) + 1;
	}
	
	l_ycurs = Math.ceil(($yyy - headerHeight)); //Changes search height for ad board//

	//WORK HERE UP//

	if ((l_ycurs <= 0) || (l_ycurs > 1000) || (l_xcurs <= 0) || (l_xcurs > 1000)){ //Used for hover info panel on empty pixels//
		document.getElementById('d').style.display = "none";
	}
	else {
		document.getElementById('d').style.display = "";
		document.getElementById('xcoord').innerHTML = sTitle + " " + "(" + l_xcurs + "," + l_ycurs + ")";
		document.getElementById('ycoord').innerHTML = "";
	}
}