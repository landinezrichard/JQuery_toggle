/*$("button").click(function(){		
	$("p").toggle();
});
*/
	/*	
$("p").toggle(function(){
	alert("algo");
	},
	function(){
	alert("nada");
});
*/

$("button").click(function(){		
	$("p").toggle(function(){
	alert("algo");
	},
	function(){
	alert("nada");
});
});
