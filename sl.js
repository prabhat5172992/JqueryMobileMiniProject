$(document).ready(

function()
{
$(function() {
	var body=$('body');
	var backgrounds= ['url("img1.jpg")',
	'url("img2.jpg")','url("img3.jpg")','url("img4.jpg")','url("img5.jpg")','url("img6.jpg")','url("img7.jpg")','url("img8.jpg")'];
	var current=0;
	
	function nextBackground() {
		body.css(
		'background',
		backgrounds[current= ++current % background.length]);
		setTimeout(nextBackground, 3000);
	}
	setTimeout(nextBackground, 3000);
	body.css('background', backgrounds[0]);
});
}
});