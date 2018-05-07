var total = 1731.87;
var totalwithcommas = total.toLocaleString();

function sponsor(t){
	sponsortitle = t.title;
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

var headerHeight = 44; //Changes start (top) of ad board//

var x;
var y;
var x_random=Math.floor(Math.random() * 1000) + 1;
var y_random=Math.floor(Math.random() * 1000) + 1;

 //compares the randomly selected number to the one the participant chose//
function randomCompare(){
	
		if (x > 1000){
			x = 1000
		}
		if (x < 1){
			x = 1
		}
		if (y > 1000 ){
			y = 1000
		}
		if (y < 1){
			y = 1
		}
		if (x == x_random && y == y_random) {
			alert("You picked correctly! Congratulations! A new window will now load.")
			document.getElementById("winner").click();
		}
		else {
			alert("I'm sorry, but you chose (" + x + "," + y + ") and the winning pixel was (" + x_random + "," + y_random + ").\nYou were " + Math.round(Math.sqrt((Math.pow(x - x_random, 2) + Math.pow(y - y_random, 2)))) + " pixels away from the winning pixel.");
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

var x_faux=Math.floor(Math.random() * 1000) + 1;
var y_faux=Math.floor(Math.random() * 1000) + 1;

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
		if (x_faux == x_faux && y_faux == y_faux) {
			alert("Congratulations! A new window will now load.");
        	document.getElementById("winner").click();
		}
		else{
			alert("I'm sorry, but you chose (" + x_faux + "," + y_faux + ") and the winning pixel was (" + x_random + "," + y_random + ").");
			location.reload()
	}}, 8000);
}

document.onmousemove = mouseinfo;

function mouseinfo() {

	var coordstart = (document.body.getBoundingClientRect().width)/2; //Changes where the search area starts for ad block. OffsetWidth supposedly display width of an area//

	if ($carry == false){ //boolean found in modal.js
			$xxx = event.pageX;
			$yyy = event.pageY;
	}

	document.getElementById('mousedisplay').style.left=$xxx + 10; //Changes mouse hover display box start////
	document.getElementById('mousedisplay').style.top=$yyy + 18; //Changes mouse hover display box start////


	if (((coordstart % 1) * 10) < 5) {
		x = Math.ceil(($xxx - coordstart + 500)) + 1;
	}
	else {
		x = Math.floor(($xxx - coordstart + 500)) + 1;
	}
	
	y = Math.ceil(($yyy - headerHeight)); //Changes search height for ad board//
 
	
	if ((y <= 0) || (y > 1000) || (x <= 0) || (x > 1000)){ //Used for hover info panel on empty pixels//
		document.getElementById('mousedisplay').style.display = "none";
	}
	else {
		document.getElementById('mousedisplay').style.display = "";
		document.getElementById('displaytitle').innerHTML = sponsortitle + " ";
		document.getElementById('xylocation').innerHTML = "(" + x + "," + y + ")";
	}
}