
var data; 
$(document).ready(

function()
{
$.ajax({
url:"login.json",
dataType:"text",
success:function(data)
{
	json=$.parseJSON(data);
	setHomeContent(json);
},
error:function()
{
    alert("wrong file");
}
});

$('body').on('click','#but1',function()
{
	alert('Login Successful');
	var username= document.getElementById("user").value;
	var passw= document.getElementById("pass").value;
	if(username=="NMIT" && passw=="N1234"){
	
    	window.open("home.html");
     
}
else
	alert("wrong entry"); 
	window.location="login.html";
});
});

 
$(function () 
{
    var body = $('#f1');
    var backgrounds = [
	'url(b1.jpg)',
    'url(b2.jpg)',
	'url(b3.jpg)'];
    var current = 0;

   function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);
        body.css(
            'background-size',
        "cover");
       // setTimeout(nextBackground, 5000);
    }
    setInterval(nextBackground, 3000);
    body.css('background', backgrounds[0]); 



});

function setHomeContent(json)
{
	var cn=json.header.name;
 
	$("#h1").append('<h3><center>'+cn+'</center></h3>');
 
	$("#c1").append('<form><center><br><br>Log In: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Enter Username" id="user" ><br><br>Password:<input type="password" placeholder="Enter Password" id="pass"><br><button id="but1" class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-icon="star" class="circle">LOGIN</button></form>');
 
 
}