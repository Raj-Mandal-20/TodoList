const add_task = document.querySelector('.add_task button');
const model = document.querySelector('.model');
const body = document.querySelector('body');
const to_do_container = document.querySelector('.to_do_container');
const container = document.querySelector('.container');
const task = document.querySelector('#task');
const create_task = document.querySelector('.create_task button');
const item_list = document.querySelector('.item_list');
const close = document.querySelector('.close');
let tasks = document.querySelectorAll('.item_list .tasks');
const edit = document.getElementsByClassName("edit");
const deletea = document.getElementsByClassName("delete");
const no_item = document.querySelector('.no_item');
console.log(no_item);
let n = 0;
const taskList = [];
const complited = [];

const test__item = () => {
    if (n === 0) {
        no_item.classList.remove('hide');
    } else {
        no_item.classList.add('hide');
    }
}

test__item();

function edit_btn() {
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener("click", () => {

            console.log(`${i} edit button clicked`);
            complited.push(taskList.splice(i, 1));
            taskList.splice(i, 1);
            test__item();

            item_list.textContent = "";
            // taskList.textContent = "";
            showList();
            console.log('Complited ', complited);
            // console.log(n);
        })
    }
}
function delete_btn() {
    for (let i = 0; i < deletea.length; i++) {
        deletea[i].addEventListener("click", () => {

            console.log(`${i} delete button clicked`);
            console.log(taskList[i]);
            complited.push(taskList[i]);
            taskList.splice(i, 1);
            n--;
            item_list.textContent = "";
            test__item();
            showList();
            console.log('Complited ', complited);
            // console.log(n);
        })
    }
}

console.log(edit);
console.log(deletea);
add_task.addEventListener('click', () => {
    console.log(`Hello`);
    // model.style.opacity = "1";
    // container.classList.add('fade');

})


// console.log(task.);


let str = "";
let taskInput = "";
task.addEventListener('input', function () {

    str = this.value;
    console.log(str);

});

function sortOn(arr, prop) {
    arr.sort(
        function (a, b) {
            if (a[prop] < b[prop]) {
                return -1;
            } else if (a[prop] > b[prop]) {
                return 1;
            } else {
                return 0;
            }
        }
    );
}
// console.log();
const addTaskToList = function (str) {
    const d = new Date();
    const timeAndTask = {
        task: String(str),
        time: d.toLocaleTimeString()
    }
    return timeAndTask;
}
console.log(taskInput);
const showList = () => {
    
    for (let i = 0; i < taskList.length; i++) {
        let taskContent = `<div class="tasks">
        <div class="toper"> 
            <div class="first"> ${taskList[i].task}</div>
            <div class="last">  ${taskList[i].time} </div>
        </div>
        <div class="bottemr">
           <!--- <div class="edit"  myedit="${i}" onclick="edit_btn()">
                <img src="https://static.thenounproject.com/png/2473159-200.png" alt="">
            </div> --->
            <div class="delete" mydelete="${i}" onclick="delete_btn()">
                <img src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" alt="">
            </div>
        </div>
        </div>`;
        item_list.insertAdjacentHTML('beforeend', taskContent);
    }
    
    console.log(taskList);
    console.log('value of n =',n);
}
create_task.addEventListener('click', () => {
    if (str === "") {
        alert('Please Enter Your Task');
    } else {

        taskList.push(addTaskToList(str));
        str = "";
        task.value = "";


        console.log('Btn Clicked');
        sortOn(taskList, "task");
        // console.log(taskInput);

        console.log();
        tasks.textContent = "";
        tasks = document.querySelectorAll('.item_list .tasks');
        item_list.textContent = "";
        // for (let i = 0; i < taskList.length; i++) {
        //     let taskContent = `<div class="tasks">
        //     <div class="toper"> 
        //         <div class="first"> ${taskList[i].task}</div>
        //         <div class="last">  ${taskList[i].time} </div>
        //     </div>
        //     <div class="bottemr">
        //         <button class="edit"  myedit="${i}" onclick="edit_btn()">
        //             <img src="https://static.thenounproject.com/png/2473159-200.png" alt="">
        //         </button>
        //         <button class="delete" mydelete="${i}" onclick="delete_btn()">
        //             <img src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" alt="">
        //         </button>
        //     </div>
        //     </div>`;
        //     item_list.insertAdjacentHTML('beforeend', taskContent);
        // }
        showList();
        
        n++;
        test__item();
        // console.log(tasks);
        console.log(tasks);
        console.log(edit.length);

    }
})


