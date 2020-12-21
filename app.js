let app = angular.module('my-app', ['ngSanitize']);
app.controller('myFun', function ($scope, $http) {
    $scope.test = 'Prueba';
    $http
        .get(
            'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed&decode=true&json=true'
        )
        .then((response) => {
            $scope.data = response.data;
            for (let i = 0; i < $scope.data.length; i++) {
                $scope.data[i].content = $scope.data[i].content
                    .replaceAll('&aacute;', 'á')
                    .replaceAll('&eacute;', 'é')
                    .replaceAll('&iacute;', 'í')
                    .replaceAll('&oacute;', 'ó')
                    .replaceAll('&uacute;', 'ú')
                    .replaceAll('&ntilde;', 'ñ')
                    .replaceAll('&lt;', '<')
                    .replaceAll('&gt;', '>')
                    .replaceAll('&quot;', '"')
                    .replaceAll('&iquest;', '¿')
                    .replaceAll('&ldquo;', '¡');
                console.log($scope.data[i]);
            }
        });
});
