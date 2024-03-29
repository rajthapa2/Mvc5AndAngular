﻿app.controller('toDoController',
    function ($scope, todoService) {

        $scope.todoes = [];
        $scope.ShowErrorMessage = false;

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

        $scope.addTodo = function() {
            if ($scope.formNewTodoTask == "") {
                $scope.ShowErrorMessage = true;
                return;
            } else {
                var newtodo = {
                    Done: true,
                    Text: $scope.formNewTodoTask
                };
                $scope.todoes.push(newtodo);
                todoService.addTodo(newtodo);
                $scope.ShowErrorMessage = false;
                $scope.formNewTodoTask = "";
            };
        }

        $scope.removeTodo= function(index, todo) {
            todoService.removeTodo(index, todo, handleRemoveSuccess);
        }

        $scope.updateTodo = function(index, todo) {
            todoService.updateTodo(index, todo);
        };

        function handleRemoveSuccess(index) {
            $scope.todoes.splice(index, 1);
        }

    }
);