/**
 * Created by Gedaym on 15/11/2015.
 */

var app=  angular.module('FirstMeanProject', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.posts= [
            {title: 'post 1',  upvote : 5},
            {title: 'post 2',  upvote : 3},
            {title: 'post 3',  upvote : 4}
        ];

        $scope.addPost = function() {
            if(!$scope.Mytitle || $scope.Mytitle === '' ){return;}
            $scope.posts.push({
                title: $scope.Mytitle,
                link: $scope.Mylink,
                upvote : 2
            });
            $scope.Mylink = '';
            $scope.Mytitle = '';
        };

        $scope.addVote = function(post) {
            post.upvote += 1;
        }
    }
]);