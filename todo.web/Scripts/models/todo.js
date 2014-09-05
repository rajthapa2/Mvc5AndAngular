app.controller('toDoController',
    function ($scope, todoService) {

        $scope.todoes = [];

        var loadRemoteData = function () {
            todoService.getTodos().then(function (todos) {
                applyRemoteData(todos);
            });
        };

        function applyRemoteData(newTodoes) {
            $scope.todoes = newTodoes;
        }

        loadRemoteData();
        $scope.formNewTodoTask = "";

//        var todo1 = { Id: "", Done: false, Text: "learn Angular" };

//        $scope.todoes.push(todo1);

        $scope.addTodo = function () {
            var newtodo = {
                Id: "",
                Done: false,
                text: $scope.formNewTodoTask
            };
            todoService.addTodo(newtodo);
        }
    }
);