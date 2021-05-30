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
		newActB:"",
		ActLine:""
	};

	var num_q=1;//номер вопроса
	var num_b=1;//номер блока
	var act_b=1;//активный блок
	document.getElementById("numOfQ").value="Вопрос "+num_q;
	window.vars.ActLine=document.getElementById("active");

	var num_bq=[];
	function createVars(q){
		for (var i=1; i<=q; i++ )
    	{
        	num_bq[i] = i;
    	}
    	console.log (num_bq);
	};
	
	let center=document.getElementById("center");
	let que=document.getElementById("que");


	//ОТСЛЕЖИВАНИЕ НАЖАТИЯ
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
		};
		//СМЕНА АКТ БЛОКОВ
		if ((window.vars.ActLine!=block__)&&(contains_1==true)){
			window.vars.ActLine.classList.remove('act_b');
			window.vars.ActLine.classList.add('hidden');
			block__.classList.remove('hidden');
			block__.classList.add('act_b');
			window.vars.ActLine=block__;
		};
	});

	function Choose(cho){
		window.vars.SelB.addEventListener('change', function(b){
			ChangeBlock(b.target.value);
		});
	};


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
		window.vars.ActLine.classList.remove('act_b');
		window.vars.ActLine.classList.add('hidden');
		let b_1=document.getElementById(num_b);
		let newBlock__=b_1.querySelector(".block__");	
		newBlock__.classList.remove('hidden');
		newBlock__.classList.add('act_b');
		window.vars.ActLine=newBlock__;
	});
	

	//СМЕНА БЛОКА
	let ChangeBlock=(index) => {
		let NBl=window.vars.newActB.querySelector("#ForAll");
		if (index==1){
			NBl.innerHTML=
			`<div class="radio_text">
        		<p class="text">Правильный ответ:</p>
        		<input class="input_text" type="text">
   			</div>`
		}
		else if (index==2){
			NBl.innerHTML=`
			<div class="one_from_the_list">
				<div id="pole_2">
        			<div class="form_radio">
            			<input id="radio-1" type="radio" name="radio" >
            			<label for="radio-1"><input id="vars_2" class="descript margin_bottom" value="" type="text"></label>
        			</div>
        			<div class="form_radio">
            			<input id="radio-2" type="radio" name="radio" >
            			<label for="radio-2"><input id="vars_2" class="descript margin_bottom" value="" type="text"></label>
        			</div>
        		</div>
        		<button id="but_2" class="add_form_radio "> 
            		Добавить вариант
        		</button>
    		</div>`;
    		let arr_2=[];
    		let co_2=1;
    		arr_2=this.querySelectorAll("#vars_2");
    		for (var l=0; l<arr_2.length; l++ ){
    			arr_2[l].value="Вариант "+co_2;
    			co_2+=1;
    		};
    		console.log(NBl);
    		$("#but_2").click(function(){
    			const NewOp_2=`
    			<div class="form_radio">
            		<input id="radio-2" type="radio" name="radio" >
            		<label for="radio-2"><input id="vars_2" class="descript margin_bottom" value="" type="text"></label>
        		</div>`;
        		let pole_2=NBl.querySelector("#pole_2");
        		$(pole_2).append(NewOp_2);
        		let arr_2=[];
    			let co_2=1;
    			arr_2=NBl.querySelectorAll("#vars_2");
    			for (var l=0; l<arr_2.length; l++ ){
    				arr_2[l].value="Вариант "+co_2;
    				co_2+=1;
    			};	
    		});

		}
		else if (index==3){
			NBl.innerHTML=`
			<div class="a_few_from_the_list">
				<div id="pole_3">
        			<div class="form_checkbox">
            			<input id="checkbox-1" class="checkbox" type="checkbox" name="checkbox" >
            			<label for="checkbox-1"><input id="vars_3" class="descript margin_bottom" value="" type="text"></label>
        			</div>
        			<div class="form_checkbox">
            			<input id="checkbox-2" class="checkbox" type="checkbox" name="checkbox" >
            			<label for="checkbox-2"><input id="vars_3" class="descript margin_bottom" value="" type="text"></label>
        			</div>
        		</div>          
        		<button id="but_3" class="add_form_checkbox "> 
            		Добавить вариант
        		</button>     
    		</div>`;
    		let arr_3=[];
    		let co_3=1;
    		arr_3=this.querySelectorAll("#vars_3");
    		for (var l=0; l<arr_3.length; l++ ){
    			arr_3[l].value="Вариант "+co_3;
    			co_3+=1;
    		};
    		$("#but_3").click(function(){
    			const NewOp_3=`
    			<div class="form_checkbox">
            		<input id="checkbox-2" class="checkbox" type="checkbox" name="checkbox" >
            		<label for="checkbox-2"><input id="vars_3" class="descript margin_bottom" value="" type="text"></label>
        		</div>`;
        		let pole_3=NBl.querySelector("#pole_3");
        		$(pole_3).append(NewOp_3);
        		let arr_3=[];
    			let co_3=1;
    			arr_3=NBl.querySelectorAll("#vars_3");
    			for (var l=0; l<arr_3.length; l++ ){
    				arr_3[l].value="Вариант "+co_3;
    				co_3+=1;
    			};	
    		});
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

	//УДАЛЕНИЕ БЛОКА
	$(document).on('click', '#del', function() {
 		$(que).parent().remove();
	});
	

});