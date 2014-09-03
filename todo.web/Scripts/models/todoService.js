app.service("todoService", function ($http, $q) {
    return ({ addTodo: addTodo });

    function addTodo(todo) {
        var request = $http({
            method: "post",
            url: "/api/todoApi/Add",
            data: {
                Todo: todo
            }
        });
        return (request.then(handleSuccess, handleError));
    }

    function handleSuccess(response) {
        return (response.data);
    }

    function handleError(response) {
        console.log(response);
    }
});