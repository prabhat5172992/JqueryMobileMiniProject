function slideshow()
{
  
	var arrr=["am1.jpg","am2.jpg","am3.jpg","am4.jpg","am5.jpg","am6.jpg",
	"am7.jpg","am8.jpg","am9.jpg","am10.jpg"];
	var ran=Math.floor(Math.random()*10);
	document.images[0].src=arrr[ran];
	document.getElementById('demo').innerHTML=arrr[ran];
}
setInterval(slideshow,1000);