
var data;

$(document).ready(

			function()
			{
				//alert('jquery working');
				$.ajax({
					url:"asia.json",
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
	$('#h21').append("<center>"+"<h1><a href='home.html' class='ui-btn ui-btn-inline ui-shadow ui-corner-all ui-icon-home ui-btn-icon-notext' target='_self'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+cn+"</h1>"+"</center>");
	$('#a').append('<ul data-role="listview" data-inset="true" id="countries" data-theme="a"></ul>');
	$('#a').trigger('create');
	$('#countries').append('<li><a href="india.html" target="_self"><h2>'+p1+'</h2></a></li>');
	$('#countries').append('<li><a href="uae.html" target="_self"><h2>'+p2+'</h2></a></li>');
	$('#countries').append('<li><a href="china.html" target="_self"><h2>'+p3+'</h2></a></li>');
	$('#countries').append('<li><a href="singapore.html" target="_self"><h2>'+p4+'</h2></a></li>');
	$('#countries').listview('refresh');  	
}