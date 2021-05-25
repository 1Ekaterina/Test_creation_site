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
	};
	


	var blockID="";
	var center=document.getElementById("center");
	var mainBlock=document.querySelector(".mainBlock");
	var block__=document.querySelector(".block__");
	$(center).focusin(function(){
		block__.classList.add('act_b');
	});
	var cl_b=0;

	document.querySelector(".mainBlock").addEventListener('click',changeAct);
	function changeAct(){
		newActB=this;
		console.log(newActB);
		if (newActB.contains(block__)){
			block__.classList.remove('hidden');
			block__.classList.add('act_b');
		}
	}

	/*center.addEventListener("focusin", () => 
		{
			console.log("focus");
			//var p=this.id;
			
			for (var j=1; j<=num_q; j++ ){
				if (this.id==num_bq[j]){
					console.log(this);
					//this === document.activeElement;
					cl_b=j;
					console.log(cl_b);
					console.log("true");
				}
			}
		});*/
		//this.block__.classList.remove('hidden'));
	//center.addEventListener("focusin", () => this.block__.classList.add('act_b'));
	//center.addEventListener("focusout", () => this.block__.classList.remove('act_b'));
  	//center.addEventListener("focusout", () => this.block__.classList.add('hidden'));
	/*$(center).onclick=function(){
		var blockID= this.id;
		console.log(blockID);
	}*/
	/*$(bb).click(function(){
		var blockID=this.id;
		console.log(blockID);
	});*/
	/*$(".center").onfocus=function(){
		var blockID=this.id;
		console.log(blockID);
		//$(".block__").removeClass('act_b');
		//$(".block__").addClass('hidden');
	};*/
	var f_b=document.getElementById("active");
	f_b.classList.remove("hidden");
	f_b.classList.add("act_b");
	//$(".block__").removeClass('hidden');
	//$(".block__").addClass('act_b');

	//СМЕНА БЛОКА
	
	const forAll=document.getElementById("ForAll");
	document.querySelector('#Selection').addEventListener('change', function(e){
		
		ChangeBlock(e.target.value);
	});
	const ChangeBlock=(index) => {
		if (index==1){
			forAll.innerHTML=`
			<div class="radio_text">
        		<p class="text">Правильный ответ:</p>
        		<input class="input_text" type="text">
   			</div>`
		}
		else if (index==2){
			forAll.innerHTML=`
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
			forAll.innerHTML=`
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
			forAll.innerHTML=`
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
			forAll.innerHTML=`
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
			forAll.innerHTML=`
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
	const que=document.getElementById("que");
	
	var button=document.getElementById("but");

	//ДОБАВЛЕНИЕ БЛОКА
	$("#add").click(function(){
		num_q+=1;
		num_b+=1;
		const newBlock =
		`<div class="block newB">
            <div id="active" class="block__ hidden">
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
        $(".newB").wrapAll(`<div class="mainBlock" id='${num_b}'/>`);
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