var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log("Your todo list is empty");
    } else {
        console.log("My Todos:");  
        for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }  
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos(); //this is outside the scope, should we also put others outside the scope they've been declared in?
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){ 
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //Get number of completed todos
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++
      }      
    }
    
    //Case 1: If everything is true, make everything false
    if(completedTodos === totalTodos){
      for (var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
      this.displayTodos();
    }
  }
};

// var displayTodosButton = document.getElementById("displayTodosButton");
// var tgogleAllButton = document.getElementById("toggleAllButton");


// displayTodosButton.addEventListener("click", function() {
//   todoList.displayTodos();
// });

// toggleAllButton.addEventListener("click", function() {
//   todoList.toggleAll();
// });


var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for(var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      
      var todoTextWithCompletion = "";
      if(todo.completed === true){
        todoTextWithCompletion = "(X) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      
      // todoLi.textContent = todoList.todos[i].todoText; replaced by line 121
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};