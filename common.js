$(document).ready(function() {

	//ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
	window.vars={
		SelB: "",
		newActB:"",
		mainActB:"",
		ActLine:""
	};

	var num_q=1;//номер вопроса
	var num_b=1;//номер блока
	document.getElementById("numOfQ").value="Вопрос "+num_q;
	window.vars.mainActB=document.getElementById("1");
	window.vars.ActLine=document.getElementById("active");

	//ОТСЛЕЖИВАНИЕ НАЖАТИЯ
	document.querySelector(".center").addEventListener('click', function(e){
		let pp=`
		<div id="side_menu" class="add">
	        <a href="#" class="fa fa-plus-circle fa-2x" id="add"></a>
	        <a href="#" class="parag">P</a>
	        <a href="#" class="fa fa-trash fa-2x" id="del"></a>
	    </div>`;
		let tar_b=e.target;
		let block__=tar_b.querySelector(".block__");
		let contains_1=tar_b.contains(block__);
		if (contains_1==true){
			let mainActB=window.vars.mainActB;
			mainActB.querySelector("#side_menu").remove();
			window.vars.newActB=tar_b;
			nID=window.vars.newActB.parentNode.id;
			window.vars.mainActB=document.getElementById(nID);
			mainActB=window.vars.mainActB;
			$(mainActB).append(pp);
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
		if (tar_b==document.getElementById("add")){
			AddBlock(tar_b);
		}
	});

	function Choose(cho){
		window.vars.SelB.addEventListener('change', function(b){
			ChangeBlock(b.target.value);
		});
	};

	//ДОБАВЛЕНИЕ БЛОКА
	function AddBlock(th){
		console.log("CLICK");
		num_q+=1;
		num_b+=1;
		let parID=th.parentNode.id;
		document.getElementById(parID).remove();
		const newBlock =
		`<div id="" class="mainBlock newB">
			<div class="block">
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
	        </div>
        </div>`;
        let pp=`
		<div id="side_menu" class="add">
	        <a href="#" class="fa fa-plus-circle fa-2x" id="add"></a>
	        <a href="#" class="parag">P</a>
	        <a href="#" class="fa fa-trash fa-2x" id="del"></a>
	    </div>`;
        let center=document.getElementById("center");
        $(center).append(newBlock);
        let newB=document.querySelector(".newB");
       	newB.id=num_b;
        $(".newB").animated("fadeInDown","fadeOutUp");
        $(".newB").removeClass('newB');
		document.querySelector(".numOfQ").value="Вопрос "+num_q;
		$(".numOfQ").removeClass('numOfQ');
		window.vars.ActLine.classList.remove('act_b');
		window.vars.ActLine.classList.add('hidden');
		let b_1=document.getElementById(num_b);
		$(b_1).append(pp);
		window.vars.mainActB=b_1;
		let newBlock__=b_1.querySelector(".block__");	
		newBlock__.classList.remove('hidden');
		newBlock__.classList.add('act_b');
		window.vars.ActLine=newBlock__;
	};

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
        			<p class="scale_text">1</p>
            		<!--<select name="" id="" class="option option_margin">
                		<option class="option__" value="1">1</option>
            		</select>-->
            		<span class="atribut">—</span>
            		<select name="" id="selection_scale" class="option option_margin">
                		<option class="option__" value="1">2</option>
                		<option class="option__" value="2">3</option>
                		<option class="option__" value="3">4</option>
                		<option class="option__" value="4">5</option>
            		</select>
        		</div>
        		<div id="pole_4">          
        			<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>
        			<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>
        		</div>
    		</div>`;
    		let arr_4=[];
    		let arr_p=[];
    		let co_4=1;
    		let numOp=1;
    		arr_4=this.querySelectorAll("#vars_4");
    		arr_p=this.querySelectorAll("#p_4");
    		for (var u=0; u<arr_p.length; u++ ){
    			arr_p[u].textContent=numOp+".";
    			numOp+=1;
    		};
    		for (var l=0; l<arr_4.length; l++ ){
    			arr_4[l].value="Вариант "+co_4;
    			co_4+=1;
    		};

    		let selection_scale=NBl.querySelector("#selection_scale");
    		selection_scale.addEventListener('change', function(c){
				addVars(c.target.value);
			});
			function addVars(quant){
				let pole_4=NBl.querySelector("#pole_4");
				let NewOp_4=`
				<div class="scale__">
            		<p id="p_4" class="scale_atribut"></p>
            		<input id="vars_4" class="descript margin_bottom" value="" type="text">
        		</div>`;
				if (quant==1){
					pole_4.innerHTML=`
					<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>
        			<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>`;
        			let arr_4=[];
    				let arr_p=[];
    				let co_4=1;
    				let numOp=1;
    				arr_4=NBl.querySelectorAll("#vars_4");
    				arr_p=NBl.querySelectorAll("#p_4");
    				for (var u=0; u<arr_p.length; u++ ){
    					arr_p[u].textContent=numOp+".";
    					numOp+=1;
    				};
    				for (var l=0; l<arr_4.length; l++ ){
    					arr_4[l].value="Вариант "+co_4;
    					co_4+=1;
    				};
				};
				if (quant==2){
					pole_4.innerHTML=`
					<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>
        			<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>`;
					max_len=3;
					for (var m=2; m<max_len; m++){
						$(pole_4).append(NewOp_4);
					};
					arr_4=[];
    				arr_p=[];
					numOp=1;
					co_4=1;
					arr_4=NBl.querySelectorAll("#vars_4");
    				arr_p=NBl.querySelectorAll("#p_4");
					for (var u=0; u<max_len; u++ ){
    					arr_p[u].textContent=numOp+".";
    					numOp+=1;
    				};
    				for (var l=0; l<max_len; l++ ){
    					arr_4[l].value="Вариант "+co_4;
    					co_4+=1;
    				};
				};
				if (quant==3){
					pole_4.innerHTML=`
					<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>
        			<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>`;
					max_len=4;
					for (var m=2; m<max_len; m++){
						$(pole_4).append(NewOp_4);
					};
					arr_4=[];
    				arr_p=[];
					numOp=1;
					co_4=1;
					arr_4=NBl.querySelectorAll("#vars_4");
    				arr_p=NBl.querySelectorAll("#p_4");
					for (var u=0; u<max_len; u++ ){
    					arr_p[u].textContent=numOp+".";
    					numOp+=1;
    				};
    				for (var l=0; l<max_len; l++ ){
    					arr_4[l].value="Вариант "+co_4;
    					co_4+=1;
    				};
				};
				if (quant==4){
					pole_4.innerHTML=`
					<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>
        			<div class="scale__">
            			<p id="p_4" class="scale_atribut"></p>
            			<input id="vars_4" class="descript margin_bottom" value="" type="text">
        			</div>`;
					max_len=5;
					for (var m=2; m<max_len; m++){
						$(pole_4).append(NewOp_4);
					};
					arr_4=[];
    				arr_p=[];
					numOp=1;
					co_4=1;
					arr_4=NBl.querySelectorAll("#vars_4");
    				arr_p=NBl.querySelectorAll("#p_4");
					for (var u=0; u<max_len; u++ ){
    					arr_p[u].textContent=numOp+".";
    					numOp+=1;
    				};
    				for (var l=0; l<max_len; l++ ){
    					arr_4[l].value="Вариант "+co_4;
    					co_4+=1;
    				};
				};
			};	
		}
		else if (index==5){
			NBl.innerHTML=`
			<div class="Grid_one-per-row">
        		<div class="left">
            		<p class="caption caption_margin">Строки:</p>
            		<div id="pole_5_1">
            			<div class="scale__">
                			<p id="p_5" class="scale_atribut"></p>
                			<input id="vars_5_1" class="descript margin_bottom" value="" type="text">
            			</div>
            			<div class="scale__">
                			<p id="p_5" class="scale_atribut"></p>
                			<input id="vars_5_1" class="descript margin_bottom" value="" type="text">
            			</div>
            		</div>
            		<button id="but_5_1" class="add_form_radio ">Добавить строку</button>
        		</div>
        		<div class="right">
            		<p class="caption caption_margin">Столбцы:</p>
            		<div id="pole_5_2">
            			<div class="form_radio">
                			<input id="radio-1" type="radio" name="radio" >
                			<label for="radio-1"><input id="vars_5_2" class="descript margin_bottom" value="" type="text"></label>
            			</div>
            			<div class="form_radio">
                			<input id="radio-2" type="radio" name="radio" >
                			<label for="radio-2"><input id="vars_5_2" class="descript margin_bottom" value="" type="text"></label>
            			</div>
            		</div>
            		<button id="but_5_2" class="add_form_radio ">Добавить столбец</button>
        		</div>
    		</div>`;

    		let NewOp_5_1=`
    		<div class="scale__">
                <p id="p_5" class="scale_atribut"></p>
                <input id="vars_5_1" class="descript margin_bottom" value="" type="text">
            </div>`;
            let NewOp_5_2=`
    		<div class="form_radio">
                <input id="radio-2" type="radio" name="radio" >
                <label for="radio-2"><input id="vars_5_2" class="descript margin_bottom" value="" type="text"></label>
            </div>`;
    		let pole_5_1=this.querySelector("#pole_5_1");
    		let pole_5_2=this.querySelector("#pole_5_2");
    		let arr_p5=[];
    		let arr_5_1=[];
    		let arr_5_2=[];
    		let co_5_1=1;
    		let co_5_2=1;
    		let numOp_5=1;
    		arr_p5=this.querySelectorAll("#p_5");
    		arr_5_1=this.querySelectorAll("#vars_5_1");
    		arr_5_2=this.querySelectorAll("#vars_5_2");
    		for (var u=0; u<arr_p5.length; u++ ){
    			arr_p5[u].textContent=numOp_5+".";
    			numOp_5+=1;
    		};
    		for (var l=0; l<arr_5_1.length; l++ ){
    			arr_5_1[l].value="Строка "+co_5_1;
    			co_5_1+=1;
    		};
    		for (var h=0; h<arr_5_2.length; h++ ){
    			arr_5_2[h].value="Вариант "+co_5_2;
    			co_5_2+=1;
    		};

    		$("#but_5_1").click(function(){
    			$(pole_5_1).append(NewOp_5_1);
    			let arr_p5=[];
    			let arr_5_1=[];
    			let co_5_1=1;
    			let numOp_5=1;
    			arr_p5=NBl.querySelectorAll("#p_5");
    			arr_5_1=NBl.querySelectorAll("#vars_5_1");
    			for (var u=0; u<arr_p5.length; u++ ){
    				arr_p5[u].textContent=numOp_5+".";
    				numOp_5+=1;
    			};
    			for (var l=0; l<arr_5_1.length; l++ ){
    				arr_5_1[l].value="Строка "+co_5_1;
    				co_5_1+=1;
    			};
    		});
    		$("#but_5_2").click(function(){
    			$(pole_5_2).append(NewOp_5_2);
    			let arr_5_2=[];
    			let co_5_2=1;
    			arr_5_2=NBl.querySelectorAll("#vars_5_2");
    			for (var h=0; h<arr_5_2.length; h++ ){
    				arr_5_2[h].value="Вариант "+co_5_2;
    				co_5_2+=1;
    			};
    		});
		}
		else if (index==6){
			NBl.innerHTML=`
			<div class="Grid_multiple-in-a-row">
            	<div class="left">
                	<p class="caption caption_margin">Строки:</p>
                	<div id="pole_6_1">
                		<div class="scale__">
                    		<p id="p_6" class="scale_atribut"></p>
                    		<input id="vars_6_1" class="descript margin_bottom" value="" type="text">
                		</div>
                		<div class="scale__">
                    		<p id="p_6" class="scale_atribut"></p>
                    		<input id="vars_6_1" class="descript margin_bottom" value="" type="text">
                		</div>
                	</div>
                	<button id="but_6_1" class="add_form_radio ">Добавить строку</button>
            	</div>
            	<div class="right">
                	<p class="caption caption_margin">Столбцы:</p>
                	<div id="pole_6_2">
                		<div class="form_checkbox">
                			<input id="checkbox-1" class="checkbox" type="checkbox" name="checkbox" >
                			<label for="checkbox-1"><input id="vars_6_2" class="descript margin_bottom" value="" type="text"></label>
            			</div>
            			<div class="form_checkbox">
                			<input id="checkbox-2" class="checkbox" type="checkbox" name="checkbox" >
                			<label for="checkbox-2"><input id="vars_6_2" class="descript margin_bottom" value="" type="text"></label>
            			</div>
            		</div>
                	<button id="but_6_2" class="add_form_radio ">Добавить столбец</button>
        	</div>`;

        	let NewOp_6_1=`
    		<div class="scale__">
                <p id="p_6" class="scale_atribut"></p>
                <input id="vars_6_1" class="descript margin_bottom" value="" type="text">
            </div>`;
            let NewOp_6_2=`
    		<div class="form_checkbox">
                <input id="checkbox-2" class="checkbox" type="checkbox" name="checkbox" >
                <label for="checkbox-2"><input id="vars_6_2" class="descript margin_bottom" value="" type="text"></label>
            </div>`;
    		let pole_6_1=this.querySelector("#pole_6_1");
    		let pole_6_2=this.querySelector("#pole_6_2");
    		let arr_p6=[];
    		let arr_6_1=[];
    		let arr_6_2=[];
    		let co_6_1=1;
    		let co_6_2=1;
    		let numOp_6=1;
    		arr_p6=this.querySelectorAll("#p_6");
    		arr_6_1=this.querySelectorAll("#vars_6_1");
    		arr_6_2=this.querySelectorAll("#vars_6_2");
    		for (var u=0; u<arr_p6.length; u++ ){
    			arr_p6[u].textContent=numOp_6+".";
    			numOp_6+=1;
    		};
    		for (var l=0; l<arr_6_1.length; l++ ){
    			arr_6_1[l].value="Строка "+co_6_1;
    			co_6_1+=1;
    		};
    		for (var h=0; h<arr_6_2.length; h++ ){
    			arr_6_2[h].value="Вариант "+co_6_2;
    			co_6_2+=1;
    		};

    		$("#but_6_1").click(function(){
    			$(pole_6_1).append(NewOp_6_1);
    			let arr_p6=[];
    			let arr_6_1=[];
    			let co_6_1=1;
    			let numOp_6=1;
    			arr_p6=NBl.querySelectorAll("#p_6");
    			arr_6_1=NBl.querySelectorAll("#vars_6_1");
    			for (var u=0; u<arr_p6.length; u++ ){
    				arr_p6[u].textContent=numOp_6+".";
    				numOp_6+=1;
    			};
    			for (var l=0; l<arr_6_1.length; l++ ){
    				arr_6_1[l].value="Строка "+co_6_1;
    				co_6_1+=1;
    			};
    		});
    		$("#but_6_2").click(function(){
    			$(pole_6_2).append(NewOp_6_2);
    			let arr_6_2=[];
    			let co_6_2=1;
    			arr_6_2=NBl.querySelectorAll("#vars_6_2");
    			for (var h=0; h<arr_6_2.length; h++ ){
    				arr_6_2[h].value="Вариант "+co_6_2;
    				co_6_2+=1;
    			};
    		});
		}

	};

	//УДАЛЕНИЕ БЛОКА
	$(document).on('click', '#del', function() {
		let pp=`
		<div id="side_menu" class="add">
	        <a href="#" class="fa fa-plus-circle fa-2x" id="add"></a>
	        <a href="#" class="parag">P</a>
	        <a href="#" class="fa fa-trash fa-2x" id="del"></a>
	    </div>`;
		window.vars.mainActB.remove();
		window.vars.mainActB=document.querySelector(".mainBlock");
		let mainActB=window.vars.mainActB;
		$(mainActB).append(pp);
		window.vars.ActLine=window.vars.mainActB.querySelector(".block__");
		window.vars.ActLine.classList.remove('hidden');
		window.vars.ActLine.classList.add('act_b');
		num_q-=1;
		num_b-=1;
	});

});