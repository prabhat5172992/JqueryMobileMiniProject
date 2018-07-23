function slideshow()
{
  
	var arrr=["asia1.jpg","asia2.jpg","asia3.jpg","asia4.jpg","asia5.jpg","asia6.jpg",
	"asia7.jpg","asia8.jpg","asia9.jpg","asia10.jpg","asia11.jpg","asia12.jpg","asia13.jpg",
	"asia14.jpg","asia15.jpg","asia16.jpg","asia17.jpg","asia18.jpg","asia19.jpg","asia20.jpg"];
	var ran=Math.floor(Math.random()*20);
	document.images[0].src=arrr[ran];
	document.getElementById('demo').innerHTML=arrr[ran];
}
setInterval(slideshow,1000);