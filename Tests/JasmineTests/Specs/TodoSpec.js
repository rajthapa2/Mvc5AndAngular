﻿describe("todo", function () {
    beforeEach(function () {
        module('myApp');
    });
    describe("todos", function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('toDoController', {
                '$scope': scope
            });
        }));

        describe("todoes", function () {
            it('should have the total todoes in the array', function () {
                expect(scope.todoes.length).toBe(0);
            });
        });
        
        describe("addToDo", function() {

            it('should call addTodo in service layer', function () {
               
            });
        });
    });
});