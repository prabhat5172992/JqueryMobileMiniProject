
var data;

$(document).ready(

			function()
			{
				//alert('jquery working');
				$.ajax({
					url:"australia.json",
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
	$('#h21').append("<center>"+"<h1><a href='home.html' class='ui-btn ui-btn-inline ui-shadow ui-corner-all ui-icon-home ui-btn-icon-notext' target='_self'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+cn+"</h1>"+"</center>");
	$('#a').append('<ul data-role="listview" data-inset="true" id="countries" data-theme="a"></ul>');
	$('#countries').append('<li><a href="aust.html" target="_self"><h2>'+p1+'</h2></a></li>');
	$('#a').trigger('create');
}