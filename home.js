
var data;

$(document).ready(

			function()
			{
				//alert('jquery working');
				$.ajax({
					url:"home.json",
					dataType: "text",
					success:function(data) {
						//alert('file loaded');
						json=$.parseJSON(data);
						setHomeContent(json);
					},
					error:function(){
							alert('wrong file');
					}
				});
});

function setHomeContent(json)
{ 
	//alert('it is parsed');
	var cn=json.header.name;
	var p1=json.content[0];
	var p2=json.content[1];
	var p3=json.content[2];
	var p4=json.content[3];
	$('#h21').append("<center>"+"<h1>"+cn+"</h1>"+"</center>");
	$('#a').append('<ul data-role="listview" data-inset="true" id="countries" data-theme="a"></ul>');
	$('#a').trigger('create');
	$('#countries').append('<li><a href="asia.html" target="_self"><img src="asia2hm.jpg"/> <h2>'+p1+'</h2><p>Biggest Continent</p></a></li>');
	$('#countries').append('<li><a href="europe.html" target="_self"><img src="europe2hm.jpg"/> <h2>'+p2+'</h2><p>Continent</p></a></li>');
	$('#countries').append('<li><a href="America.html" target="_self"><img src="americahm1.jpg"/> <h2>'+p3+'</h2><p>Continent</p></a></li>');
	$('#countries').append('<li><a href="Australia.html" target="_self"><img src="aushm123.jpg"/> <h2>'+p4+'</h2><p>Smallest Continent</p></a></li>');
	$('#countries').listview('refresh');  
}