describe("todo", function () {
    var scope, controller, mockedTodoService;

    beforeEach(function () {
        module('myApp');
    });


    describe("todos", function () {
        beforeEach(inject(function ($rootScope, $controller, todoService) {
            scope = $rootScope.$new();
            controller = $controller('toDoController', {
                '$scope': scope
            });
            mockedTodoService = todoService;
            spyOn(mockedTodoService, 'addTodo');
        }));

        describe("todoes", function () {
            it('should not have any todoes when loading for the first time', function () {
                expect(scope.todoes.length).toBe(0);
            });
        });
        
        describe("addToDo", function() {
            it('should call addTodo in todoService', function () {
                scope.formNewTodoTask = "new Todo";
                scope.addTodo();
                expect(mockedTodoService.addTodo).toHaveBeenCalled();
            });
            it('Should not call addTodo in service layer when formNewTodoTask is empty', function() {
                scope.formNewTodoTask = "";
                scope.addTodo();
                expect(mockedTodoService.addTodo).not.toHaveBeenCalled();
            });
            it('Should add a new todo in the todoes list', function() {
                var todo1 = {
                    Done: false,
                    Text: 'learn nodeJs'
                };
                var todo2 = {
                    Done: false,
                    Text: 'learn MEAN'
                };

                scope.todoes.push(todo1);
                scope.todoes.push(todo2);

                scope.formNewTodoTask = "new toDoTask";
                scope.addTodo();
                expect(scope.todoes.length).toBe(3);
            });
            it('should show error message when empty todo is tried to add', function() {
                scope.formNewTodoTask = "";
                scope.addTodo();
                expect(scope.ShowErrorMessage).toBe(true);
            });
            it('should not show error message if newTodo has a name', function () {
                scope.formNewTodoTask = "abc";
                scope.addTodo();
                expect(scope.ShowErrorMessage).toBe(false);
            });
            it('should clear the textbox after adding new todo', function() {
                scope.formNewTodoTask = "new todo1";
                scope.addTodo();
                expect(scope.formNewTodoTask).toBe("");
            });
        });

        describe("removeTodo", function() {
            it('should call removeTodo in todoService', function () {
                spyOn(mockedTodoService, 'removeTodo');
                scope.removeTodo();
                expect(mockedTodoService.removeTodo).toHaveBeenCalled();
            });
        });
    });
});