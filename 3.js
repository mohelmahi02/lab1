// File with functions to add, remove and display items in an array
let tasks = [];

//adding a task to my array
let addTask = (newTask)=> {
    // pushed new task onn my array
    tasks.push(newTask);
    // indicates that it has been succesfully added
    console.log("New Task" +  newTask  + "- Succesfully added");
    //printing out the new length
    console.log("New length of array is: " +tasks.length);

}
//Adding Mohammad to the array
addTask("Mohammad")

//listing all the tasks in the array
let listAllTasks = () => 
    console.log("Listing all tasks in the array:");
 
    tasks.forEach((item)=>{
    console.log(item)

})

    
//calling arrow function to list all tasks
listAllTasks();



//removing a task from the array
let deleteTask = (value) => {
    //finding the index of the chosen value
 let index = tasks.indexOf(value);
 //splicing(removing) the item from the array
 //case to catch if the value is actually valid
 if(index > -1)
 {
    tasks.splice(index,1)
 }

 //notifying the user that the task is complete
 console.log("Item has been deleted");
//printing new length
 console.log("New Length of array is:" + tasks.length);

}
//calling arrow function to list all tasks
addTask("Mohammad");
listAllTasks();// lists all elements in array
deleteTask("Mohammad"); // removes Mohammad from array
