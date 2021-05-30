$(document).ready(function() {

	//Для запоминания вопросов и ответов
	/*const DATA=[
	{
		question:'Вопрос 1',
		ansewrs:[
			{
				id:'1',
				value:'Ответ 1',
				correct: true
			},
		ansewrs:[
			{
				id:'2',
				value:'Ответ 2',
				correct: false
			},
		ansewrs:[
			{
				id:'3',
				value:'Ответ 3',
				correct: false
			},
		]
	}];*/

	window.vars={
		SelB: "",
		newActB:""
	};

	var num_q=1;//номер вопроса
	var num_b=1;//номер блока
	var act_b=1;//активный блок
	document.getElementById("numOfQ").value="Вопрос "+num_q;

	var num_bq=[];
	//console.log ($(num_q).lenght);
	function createVars(q){
		for (var i=1; i<=q; i++ )
    	{
        	num_bq[i] = i;
        	//console.log (num_bq[i]);
    	}
    	console.log (num_bq);
	};
	

	let center=document.getElementById("center");
	//let mainBlock=document.querySelector(".mainBlock");
	//let block=document.querySelector(".block");
	//let forAll=document.getElementById("ForAll");
	//let Spi="";

	document.querySelector(".center").addEventListener('click', function(e){
		let tar_b=e.target;
		let block__=tar_b.querySelector(".block__");
		let contains_1=tar_b.contains(block__);
		if (contains_1==true){
			window.vars.newActB=tar_b;
			window.vars.SelB=window.vars.newActB.querySelector("#Selection");
		};
		if (tar_b==window.vars.SelB){
			Choose(window.vars.newActB);
		}
		//forAct.classList.remove('hidden');
		//forAct.classList.add('act_b');
		//forAct.remove("#active");
	});
	function Choose(cho){
		//console.log(cho);
		//let nw=cho.querySelector("#Selection");
		window.vars.SelB.addEventListener('change', function(b){
			ChangeBlock(b.target.value);
			console.log("TRUE");
		});
	};
	
	//СМЕНА БЛОКА
	
	let ChangeBlock=(index) => {
		console.log("change block");

		let NBl=window.vars.newActB.querySelector("#ForAll");
		console.log(index);
		console.log(NBl);
		if (index==1){
			NBl.innerHTML=`
			<div class="radio_text">
        		<p class="text">Правильный ответ:</p>
        		<input class="input_text" type="text">
   			</div>`
		}
		else if (index==2){
			NBl.innerHTML=`
			<div class="one_from_the_list">
        		<div class="form_radio">
            		<input id="radio-1" type="radio" name="radio" >
            		<label for="radio-1"><input class="descript margin_bottom" value="Вариант 1" type="text"></label>
        		</div>
        		<div class="form_radio">
            		<input id="radio-2" type="radio" name="radio" >
            		<label for="radio-2"><input class="descript margin_bottom" value="Вариант 2" type="text"></label>
        		</div>
        		<button class="add_form_radio "> 
            	Добавить вариант
        		</button>
    		</div>`
		}
		else if (index==3){
			NBl.innerHTML=`
			<div class="a_few_from_the_list">
        		<div class="form_checkbox">
            		<input id="checkbox-1" class="checkbox" type="checkbox" name="checkbox" >
            		<label for="checkbox-1"><input class="descript margin_bottom" value="Вариант 1" type="text"></label>
        		</div>
        		<div class="form_checkbox">
            		<input id="checkbox-2" class="checkbox" type="checkbox" name="checkbox" >
            		<label for="checkbox-2"><input class="descript margin_bottom" value="Вариант 2" type="text"></label>
        		</div>          
        		<button class="add_form_checkbox "> 
            		Добавить вариант
        		</button>     
    		</div>`
		}
		else if (index==4){
			NBl.innerHTML=`
			<div class="scale">
        		<div class="variants">
            		<select name="" id="" class="option option_margin">
                		<option class="option__" value="0">0</option>
                		<option class="option__" value="1">1</option>
            		</select>
            		<span class="atribut">—</span>
            		<select name="" id="" class="option option_margin">
                		<option class="option__" value="0">2</option>
                		<option class="option__" value="1">3</option>
                		<option class="option__" value="1">4</option>
                		<option class="option__" value="1">5</option>
                		<option class="option__" value="1">6</option>
                		<option class="option__" value="1">7</option>
                		<option class="option__" value="1">8</option>
                		<option class="option__" value="1">9</option>
                		<option class="option__" value="1">10</option>
            		</select>
        		</div>          
        		<div class="scale__">
            		<p class="scale_atribut">1</p>
            		<input class="descript margin_bottom" value="Вариант 1" type="text">
        		</div>
        		<div class="scale__">
            		<p class="scale_atribut">2</p>
            		<input class="descript margin_bottom" value="Вариант 2" type="text">
        		</div>
    		</div>`
		}
		else if (index==5){
			NBl.innerHTML=`
			<div class="Grid_one-per-row">
        		<div class="left">
            		<p class="caption caption_margin">Строки:</p>
            		<div class="scale__">
                		<p class="scale_atribut">1.</p>
                		<input class="descript margin_bottom" value="Строка1" type="text">
            		</div>
            		<div class="scale__">
                		<p class="scale_atribut">2.</p>
                		<input class="descript margin_bottom" value="Строка 2" type="text">
            		</div>
            		<button class="add_form_radio ">Добавить строку</button>
        		</div>
        		<div class="right">
            		<p class="caption caption_margin">Столбцы:</p>
            		<div class="form_radio">
                		<input id="radio-1" type="radio" name="radio" >
                		<label for="radio-1"><input class="descript margin_bottom" value="Вариант 1" type="text"></label>
            		</div>
            		<div class="form_radio">
                		<input id="radio-2" type="radio" name="radio" >
                		<label for="radio-2"><input class="descript margin_bottom" value="Вариант 2" type="text"></label>
            		</div>
            		<button class="add_form_radio ">Добавить столбец</button>
        		</div>
    		</div>`
		}
		else if (index==6){
			NBl.innerHTML=`
			<div class="Grid_multiple-in-a-row">
            	<div class="left">
                	<p class="caption caption_margin">Строки:</p>
                	<div class="scale__">
                    	<p class="scale_atribut">1.</p>
                    	<input class="descript margin_bottom" value="Строка1" type="text">
                	</div>
                	<div class="scale__">
                    	<p class="scale_atribut">2.</p>
                    	<input class="descript margin_bottom" value="Строка 2" type="text">
                	</div>
                	<button class="add_form_radio ">Добавить строку</button>
            	</div>
            	<div class="right">
                	<p class="caption caption_margin">Столбцы:</p>
                	<div class="form_checkbox">
                	<input id="checkbox-1" class="checkbox" type="checkbox" name="checkbox" >
                	<label for="checkbox-1"><input class="descript margin_bottom" value="Вариант 1" type="text"></label>
            	</div>
            	<div class="form_checkbox">
                	<input id="checkbox-2" class="checkbox" type="checkbox" name="checkbox" >
                	<label for="checkbox-2"><input class="descript margin_bottom" value="Вариант 2" type="text"></label>
            	</div>
                	<button class="add_form_radio ">Добавить столбец</button>
        	</div>`
		}

	};

	//РАЗДЕЛЕНИЕ БЛОКОВ
	let que=document.getElementById("que");
	let button=document.getElementById("but");

	//ДОБАВЛЕНИЕ БЛОКА
	$("#add").click(function(){
		num_q+=1;
		num_b+=1;
		const newBlock =
		`<div class="block newB">
            <div id="" class="block__ hidden">
                <span class="fa fa-circle"></span>
                <span class="fa fa-circle"></span>
                <span class="fa fa-circle"></span>
            </div>
            <div class="label">
                <input type="text" class="caption descript numOfQ" id="numOfQ" value="">
                <div class="mandatory-question">
                    <p class="caption">Обязательный вопрос</p>
                    <input class="question" type="checkbox" >
                </div>
            </div>
            <select name="variant" id="Selection" class="option" size="1">
                <option class="option__" id="op_1" value="1" selected="selected">Текст (строка)</option>
                <option class="option__" id="op_2" value="2" >Один из списка</option>
                <option class="option__" id="op_3" value="3" >Несколько из списка</option>
                <option class="option__" id="op_4" value="4" >Шкала</option>
                <option class="option__" id="op_5" value="5" >Сетка (один в строке)</option>
                <option class="option__" id="op_6" value="6" >Сетка (несколько в строке)</option>    
            </select>
            <div class="allBLOCK" id="ForAll">
                <div class="radio_text">
                    <p class="text">Правильный ответ:</p>
                    <input class="input_text" type="text">
                </div>                        
            </div>
        </div>`;
        $(center).append(newBlock);
        $(".newB").wrapAll(`<div class="mainBlock" id='${num_b}'/>`).animated("fadeInDown","fadeOutUp");
        $(".newB").removeClass('newB');
		document.querySelector(".numOfQ").value="Вопрос "+num_q;
		$(".numOfQ").removeClass('numOfQ');
		createVars(num_q);
	});

	//УДАЛЕНИЕ БЛОКА
	$(document).on('click', '#del', function() {
 		$(que).parent().remove();
	});
	

});