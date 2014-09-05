app.service("todoService", function ($http, $q) {
    return ({
        addTodo: addTodo,
        getTodos: getTodos
    }
    );

    function addTodo(todo) {
        var request = $http({
            method: "post",
            url: "/api/todoApi/Add",
            data: {
                Done: todo.Id,
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
       return (request.then(getSuccess, getError));
    }

    function getSuccess(response) {
        console.log(response);
        return response.data;
    }

    function getError() {
        
    }

    function handleSuccess(response) {
        return (response.data);
    }

    function handleError(response) {
        console.log(response);
    }
});