
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
    function createTask(elementName ,property ,value ) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }
    
    function appendToLi(elementName ,property ,value) {
        const element = createTask(elementName ,property ,value);
        li.appendChild(element);
        if (element.innerText === 'Done'){
          element.classList.add('done');
        } else if (element.innerText === 'Delate'){
          element.classList.add('delate');
        } 
        return element;
    }
    
const li = document.createElement('li');
appendToLi('span' , 'textContent' , text);
appendToLi('label' , 'textContent' , '').appendChild(createTask('input' , 'type' , 'checkbox'));
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
addBtn.addEventListener('click', () => {
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
editTasksButton.addEventListener('click', () =>{

    const liToEdit = taskList.children;
    
	for(li of liToEdit){

		const doneButton = li.querySelector('.done');
   		const delButton = li.querySelector('.delate');
        const checkLi = li.querySelector('input');
       
        if(checkLi.checked === true){
			
			offCheckbox();

            doneButton.classList.add('visible');
            delButton.classList.add('visible');

			doneButton.addEventListener('click', () => {
             let taskToSwitch = li.querySelector('span');
             doneList.appendChild(taskToSwitch);
             taskList.removeChild(li);
      		});

 	        delButton.addEventListener('click', () => {
             taskList.removeChild(li);
    	    });
		};	            
    };
});

//button which saving the changes on li (task)
saveTasksButton.addEventListener('click', () => {
	const liToEdit = taskList.children;
		for(li of liToEdit){

			let doneButton = li.querySelector('.done');
      	  	let delButton = li.querySelector('.delate');
			onCheckbox();


			doneButton.classList.remove('visible');
			delButton.classList.remove('visible');
	};
});

//button which clearing the done task
clearTasksButton.addEventListener('click', () => {
    let doneList = document.querySelector('#doneList');
    let donelistChildren = doneList.querySelector('span');
    doneList.removeChild(donelistChildren);
});



