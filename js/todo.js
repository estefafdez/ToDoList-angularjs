function showLista(){
	if(document.getElementById("contenedor").style.display == "none" || document.getElementById("contenedor").style.display == ""){
		document.getElementById("contenedor").style.display = 'block';
		document.getElementById("show_hide_info").value = 'Ocultar toda la lista';
	}else{
		document.getElementById("contenedor").style.display = 'none';
		document.getElementById("show_hide_info").value = 'Mostrar toda la lista';
	}

	return false;
};

angular.module('todoApp', []).controller('TodoCtrl', ['$scope', function($scope) {
  
  $scope.todos = [
   ];
 
  $scope.addTodo = function() {
    var text = ($scope.todoText || '').trim();
    if (!text) return;
    $scope.todos.push({text:text, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.borrar = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}]);
