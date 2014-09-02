app.service("todoService", function ($http, $q) {
    return ({ addTodo: addTodo });

    function addTodo(todo) {
        var request = $http({
            method: "addToDo",
            url: "/api/todoApi/Add",
            params: {
                action: "Add",
            },
            data: {
                todo: todo
            }
        });
    }
});