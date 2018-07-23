
var data;

$(document).ready(

			function()
			{
				
				$.ajax({
					url:"china.json",
					dataType: "text",
					success:function(data) {
						
						json=$.parseJSON(data);
						setHomecontent(json);
					},
					error:function(){
							alert('wrong file');
					}
				});
		$('body').on('click','.read',function(){
			
			var index=Number($(this).attr('id'));
			var file=json.content[index].file;
			var title=json.content[index].title;
			$.ajax({
					url: file,
					dataType: "text",
					success:function(data) {
						
						$('#h21').empty();
						$('#a').empty();
						$('#h21').html("<a id='bck' href='#' class='ui-btn ui-btn-inline ui-shadow ui-corner-all ui-icon-back ui-btn-icon-notext' target='_self'>back</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+title);
						$('#a').html(data);

					},
					error:function(){
							alert('wrong file');
					}
				});
		});
		$('body').on('click','#bck',function(){
			
		   location.reload();
		}
		);
				
});

$(document).ready(function() {
        $("#my_audio").get(0).play();
 });

function setHomecontent(json)
{ 
	
	var cn=json.header.name;

	$('#h21').append("<center>"+"<h1><a href='asia.html' class='ui-btn ui-btn-inline ui-shadow ui-corner-all ui-icon-back ui-btn-icon-notext' target='_self'>back</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+cn+"</h1>"+"</center>");
	for(var i=0;i<json.content.length;i++){
	
	
	$('#a').append('<a href="#" class="read" id="'+i+'"target="_blank"><img height=240 width=310 title="'+json.content[i].ohover+'" src="'+json.content[i].image+'"/></a><br>');
	}
	
}