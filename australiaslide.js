function slideshow()
{
  
	var arrr=["au1.jpg","au2.jpg","au3.jpg","au4.jpg","au5.jpg","au6.jpg",
	"au7.jpg","au8.jpg","au9.jpg","au10.jpg"];
	var ran=Math.floor(Math.random()*10);
	document.images[0].src=arrr[ran];
	document.getElementById('demo').innerHTML=arrr[ran];
}
setInterval(slideshow,1000);