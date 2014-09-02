app.controller('toDoController', [
    '$scope',
    function($scope, todoService) {
        $scope.totalTodos = 5;
        var todo1 = { done: false, text: "learn Angular" };
        $scope.todoes = [];
        $scope.formNewTodoTask = "";
        $scope.todoes.push(todo1);

        $scope.addTodo = function() {
            var newtodo = {
                done: false,
                text: $scope.formNewTodoTask
            };
            todoService.addTodo(newtodo);
        }
    }
]);