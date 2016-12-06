var app=angular.module('myapp',[]);//定义入口

app.controller("wrap",function($scope){
    $scope.msg='S购'
})

//内容图片
function pic($scope,$rootScope){
    //$rootScope是跟作用域，他作用于整个项目中而不是当前控制器
    $rootScope.arr=[
        {img:"./images/2.png",tit:'韩都衣舍韩版2014韩都衣舍韩版2014',money:99,xin:686},
        {img:"./images/17.png",tit:'韩都衣舍韩版2014韩都衣舍韩版2014',money:99,xin:686}
    ];
    $rootScope.arr2=[
        {img:"./images/3.png",tit:'艾路丝婷2014新款艾路丝婷2014新款',money:29.00,xin:206},
        {img:"./images/5.png",tit:'艾路丝婷2014新款艾路丝婷2014新款',money:29.00,xin:206},
        {img:"./images/5.png",tit:'艾路丝婷2014新款艾路丝婷2014新款',money:29.00,xin:206}
    ];
}
angular.module('myapp')
       .controller('pic',pic)