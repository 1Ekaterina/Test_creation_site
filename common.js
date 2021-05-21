$(document).ready(function() {

	//количество вопросов
	var num_q=1;
	var num_b=1;
	var act_b=1;
	document.getElementById("numOfQ").value="Вопрос "+num_q;
	

	$(".paragraph").addClass('hidden');

	$(".mainBlock").click(function(){
		$(".block__").removeClass('act_b');
		$(".block__").addClass('hidden');
	});
	var f_b=document.getElementById("active");
	f_b.classList.remove("hidden");
	f_b.classList.add("act_b");
	//$(".block__").removeClass('hidden');
	//$(".block__").addClass('act_b');


	document.querySelector('#Selection').addEventListener('change', function(e){
		if (e.target.value == 1){
			$(".radio_text").removeClass('hidden');
			$(".one_from_the_list").addClass('hidden');
			$(".a_few_from_the_list").addClass('hidden');
			$(".scale").addClass('hidden');
			$(".Grid_one-per-row").addClass('hidden');
			$(".Grid_one-per-row").removeClass('flex');
			$(".Grid_multiple-in-a-row").addClass('hidden');
			$(".Grid_multiple-in-a-row").removeClass('flex');
		}
		else if (e.target.value == 2){
			$(".radio_text").addClass('hidden');
			$(".one_from_the_list").removeClass('hidden');
			$(".a_few_from_the_list").addClass('hidden');
			$(".scale").addClass('hidden');
			$(".Grid_one-per-row").addClass('hidden');
			$(".Grid_one-per-row").removeClass('flex');
			$(".Grid_multiple-in-a-row").addClass('hidden');
			$(".Grid_multiple-in-a-row").removeClass('flex');
		}
		else if (e.target.value == 3){
			$(".radio_text").addClass('hidden');
			$(".one_from_the_list").addClass('hidden');
			$(".a_few_from_the_list").removeClass('hidden');
			$(".scale").addClass('hidden');
			$(".Grid_one-per-row").addClass('hidden');
			$(".Grid_one-per-row").removeClass('flex');
			$(".Grid_multiple-in-a-row").addClass('hidden');
			$(".Grid_multiple-in-a-row").removeClass('flex');
		}
		else if (e.target.value == 4){
			$(".radio_text").addClass('hidden');
			$(".one_from_the_list").addClass('hidden');
			$(".a_few_from_the_list").addClass('hidden');
			$(".scale").removeClass('hidden');
			$(".Grid_one-per-row").addClass('hidden');
			$(".Grid_one-per-row").removeClass('flex');
			$(".Grid_multiple-in-a-row").addClass('hidden');
			$(".Grid_multiple-in-a-row").removeClass('flex');
		}
		else if (e.target.value == 5){
			$(".radio_text").addClass('hidden');
			$(".one_from_the_list").addClass('hidden');
			$(".a_few_from_the_list").addClass('hidden');
			$(".scale").addClass('hidden');
			$(".Grid_one-per-row").removeClass('hidden');
			$(".Grid_one-per-row").addClass('flex');
			$(".Grid_multiple-in-a-row").addClass('hidden');
			$(".Grid_multiple-in-a-row").removeClass('flex');
		}
		else if (e.target.value == 6){
			$(".radio_text").addClass('hidden');
			$(".one_from_the_list").addClass('hidden');
			$(".a_few_from_the_list").addClass('hidden');
			$(".scale").addClass('hidden');
			$(".Grid_one-per-row").addClass('hidden');
			$(".Grid_one-per-row").removeClass('flex');
			$(".Grid_multiple-in-a-row").removeClass('hidden');
			$(".Grid_multiple-in-a-row").addClass('flex');
		};
	});

	var que=document.getElementById("que");
	var center=document.getElementById("center");
	var button=document.getElementById("but");
	const $block = $('#que').clone();
	$('#que').wrapAll('<div id="qs"/>');
	document.getElementById("que").id="main";
	document.getElementById("qs").id=num_b;


	$("#add").click(function(){
		num_q+=1;
		num_b+=1;
		$(button).before($block.clone());
		$('#que').wrapAll('<div id="qss"/>');
		document.getElementById("qss").id=num_b;
		document.getElementById("que").id=num_b;
		document.getElementById("numOfQ").id="numOfQ"+1;
		//document.getElementById("que").id=num_b;
		document.getElementById("numOfQ").value="Вопрос "+num_q;
	});
	$(document).on('click', '#del', function() {
 		$(que).parent().remove();
	});
	

});