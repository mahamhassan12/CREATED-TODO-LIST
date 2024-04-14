#!/usr/bin/env node

import inquirer from "inquirer";
import ListPrompt from "inquirer/lib/prompts/list.js";

let todos :string[] = ["maham","aliza"]

 async function createtodo(arr:string[]){

    do {
    let ans = await inquirer.prompt({
        type:"list",
        message:"Select an opeartion ",
        name:"Select",
        choices:["Add","Update","View","Delete"]
    
 })
   if(ans.Select ==="Add"){
    let addTodo = await inquirer.prompt({
        type:"input",
        message:"WHAT DO YOU WANT TO ADD ?",
        name:"addtodo"

    })
    arr.push(addTodo.addtodo)
    console.log(todos)
   }
   if(ans.Select ==="Update"){
    let updateTodo = await inquirer.prompt({
        type:"list",
        message:"WHAT DO YOU WANT TO UPDATE?",
        name:"updtodo",
        choices:todos.map(item => item)
    });
    let addTodo = await inquirer.prompt({
        type:"input",
        message:"WHAT DO YOU WANT TO ADD ?",
        name:"addtodo"

   });
   let newTodo = todos.filter(val => val !== updateTodo.updtodo)
   todos = [...newTodo,addTodo.addtodo]
   console.log(todos)

   }
   if(ans.Select ==="View"){
    console.log(todos)
   }
   if(ans.Select ==="Delete"){
    let deleteTodo = await inquirer.prompt({
        type:"list",
        message:"WHAT DO YOU WANT TO UPDATE?",
        name:"updtodo",
        choices:todos.map(item => item)
    });
    let newTodo = todos.filter(val => val !== deleteTodo.updtodo)
    todos = [...newTodo]
    console.log(todos)
   }
} while(true);
}

createtodo(todos)