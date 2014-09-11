app.service("todoService", function ($http) {
    return ({
        addTodo: addTodo,
        getTodos: getTodos,
        removeTodo: removeTodo,
    }
    );

    function addTodo(todo) {
        var request = $http({
            method: "post",
            url: "/api/todoApi/Add",
            data: {
                Done: todo.Done,
                Text: todo.Text
            }
        });
        return (request.then(handleSuccess, handleError));
    }

    function getTodos() {
        var request = $http({
            method: "get",
            url: "/api/todoApi/Get",
        });
        return (request.then(handleSuccess, handleError));
    }

    function removeTodo(idx, todo, handleRemoveSuccess) {
        var request = $http({
            method: "post",
            url: "api/todoApi/Delete",
            data: {
                Done:todo.Done,
                Text: todo.Text
            }
        });
        return ((request).then(handleRemoveSuccess(idx), handleError));
    }

    function handleSuccess(response) {
        return (response.data);
    }

    function handleError(response) {
        console.log(response);
    }
});