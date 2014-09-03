app.controller('toDoController',
    function($scope, todoService) {
        $scope.totalTodos = 5;
        var todo1 = { Done: false, Text: "learn Angular" };
        $scope.todoes = [];
        $scope.formNewTodoTask = "";
        $scope.todoes.push(todo1);

        $scope.addTodo = function() {
            var newtodo = {
                Done: false,
                text: $scope.formNewTodoTask
            };
            todoService.addTodo(newtodo);
        }
    }
);