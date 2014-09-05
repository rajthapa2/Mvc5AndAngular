app.controller('toDoController',
    function ($scope, todoService) {

        $scope.todoes = [];

        function applyRemoteData(newTodoes) {
            $scope.todoes = newTodoes;
        }

        var loadRemoteData = function () {
            todoService.getTodos().then(function (todos) {
                applyRemoteData(todos);
            });
        };

        loadRemoteData();
        $scope.formNewTodoTask = "";

        $scope.addTodo = function () {
            var newtodo = {
                Done: true,
                Text: $scope.formNewTodoTask
            };
            todoService.addTodo(newtodo);
        }
    }
);