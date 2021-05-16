$(document).ready(function() {


	//var SelectedObj=document.getElementById("Selection");

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
	

});