function slideshow()
{
  
	var arrr=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg"];
	var ran=Math.floor(Math.random()*8);
	document.images[0].src=arrr[ran];
	document.getElementById('demo').innerHTML=arrr[ran];
}
setInterval(slideshow,1000);