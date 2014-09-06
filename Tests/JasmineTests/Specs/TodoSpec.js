describe("todo", function () {
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

        it('should have the total todoes in the array', function () {
            expect(scope.todos.length).toBe(0);
        });
    });
});