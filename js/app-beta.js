
//All element which need to target on start
const addBtn = document.getElementById("addTaskButton");
const taskFile = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const editTasksButton = document.querySelector(".editTasksButton");
const saveTasksButton = document.querySelector(".saveTasksButton");
const clearTasksButton = document.querySelector(".clearTasksButton");
const doneList = document.querySelector("#doneList");

//function to create the task. It's making li with span / input / button - up - down - done - delate
function createLi(text){
    function createElement(elementName ,property ,value ) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }
    
    function appendToLi(elementName ,property ,value) {
        const element = createElement(elementName ,property ,value);
        li.appendChild(element);
        if (element.innerText === 'Done'){
          element.classList.add('done');
        } else if (element.innerText === 'Delate'){
          element.classList.add('delate');
        } else if (element.innerText === 'Up'){
		  element.classList.add('up');
		} else if (element.innerText === 'Down'){
		  element.classList.add('down');
		}
        return element;
    }
    
const li = document.createElement('li');
appendToLi('span' , 'textContent' , text);
appendToLi('label' , 'textContent' , '').appendChild(createElement('input' , 'type' , 'checkbox'));
appendToLi('button' , 'textContent' , 'Up');
appendToLi('button' , 'textContent' , 'Down');
appendToLi('button' , 'textContent' , 'Done');
appendToLi('button' , 'textContent' , 'Delate');

return li;
};

function offCheckbox(){
	const liToEdit = taskList.children;
	for(li of liToEdit){
		let allInput = [];
		allInput.push(li.querySelector('[type=checkbox]'));
		
		for(checkedInput of allInput){
			checkedInput.classList.add("hidden");
    	 };
	};
};

function onCheckbox(){
	const liToEdit = taskList.children;
	for(li of liToEdit){
		let allInput = [];
		allInput.push(li.querySelector('[type=checkbox]'));
		
		for(checkedInput of allInput){
			checkedInput.classList.remove("hidden");
			checkedInput.checked = false;
		};
	};
};


//button which adding task creating li do ul. Also is checking does sentence has enought length.
addBtn.addEventListener('click', function(){
	const testValue = taskFile.value;
	if(testValue.length <= 6 ){
	alert("Your task description is to short !");
	} else if (testValue.length >= 50){
	alert("Your task description is to  long !");
	} else {
	const thingValue = taskFile.value;
    taskFile.value="";
    const newLi = createLi(thingValue);
    taskList.appendChild(newLi);
	};
});

//button which editing the task by adding class visible if you check checkbox.
editTasksButton.addEventListener('click', function(){

    const liToEdit = taskList.children;
    for(li of liToEdit){
		let newTask = li;
        const checkLi = li.querySelector('input');
        let doneButton = li.querySelector('.done');
        let delButton = li.querySelector('.delate');
		let upButton = li.querySelector('.up');
		let downButton = li.querySelector('.down')
        let allInput = [];
        allInput.push(li.querySelectorAll('input'));
		console.log(allInput);
      
        if(checkLi.checked === true){
			
			offCheckbox();
			let curr = newTask;
			console.log(curr);

            doneButton.classList.add('visible');
            delButton.classList.add('visible');
			upButton.classList.add('visible');
			downButton.classList.add('visible');

			doneButton.addEventListener('click', function(){
             let taskToSwitch = li.querySelector('span');
             doneList.appendChild(taskToSwitch);
             taskList.removeChild(li);
      		 });

 	       delButton.addEventListener('click', function(){
            taskList.removeChild(li);
    	    });

			upButton.addEventListener("click", () => {

				if (curr.previousSibling) {
			  let prev = curr.previousSibling;
			  taskList.insertBefore(curr, prev);
				};
	  		});

	  		downButton.addEventListener("click", () => {
			let curr = newTask;
			if (curr.nextSibling) {
			  let next = curr.nextSibling.nextSibling;
			  taskList.insertBefore(curr, next);
				};
	  		});
		};
    };	
});

//button which saving the changes on li (task)
saveTasksButton.addEventListener('click', function(){
	const liToEdit = taskList.children;
		for(li of liToEdit){
			const checkLi = li.querySelector('input');
			let doneButton = li.querySelector('.done');
      	  	let delButton = li.querySelector('.delate');
			let upButton = li.querySelector('.up');
			let downButton = li.querySelector('.down')
			
			onCheckbox();

			doneButton.classList.remove('visible');
			delButton.classList.remove('visible');
			upButton.classList.remove('visible');
			downButton.classList.remove('visible');
	};
});

//button which clearing the done task
clearTasksButton.addEventListener('click', function(){
    let doneList = document.querySelector('#doneList');
    let donelistChildren = doneList.querySelector('span');
    doneList.removeChild(donelistChildren);
});



