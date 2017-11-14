/**
 * Created by hxsd on 2016/10/12.
 */

myapp.controller('productionCtrl',function($scope){
    $scope.data=[
        {
            "name":"阁楼上的木头人",
            "photo":"images/pic_02.jpg",
            "hobby":"木艺爱好者",
            "type":"艺术",
            "title":"对木制手工品的喜欢,陪伴的温暖(一)",
            "text":"木项链的质朴,长陪伴在身边,就像恋人的陪伴,时刻不分离。",
            "image":"images/production_02.jpg",
            "fans":337,
            "praise":498
        },
        {
            "name":"木子君 ",
            "photo":"images/pic_04.jpg",
            "hobby":"生活梦想家 ",
            "type":"布艺",
            "title":"以草木染布，拼布为巾(二)",
            "text":"谦和素净的风格，如同茶人的麻衣，致认真生活的你。",
            "image":"images/production_04.jpg",
            "fans":598,
            "praise":985
        },
        {
            "name":"阁楼上的木头人",
            "photo":"images/pic_02.jpg",
            "hobby":"木艺爱好者",
            "type":"艺术",
            "title":"对木制手工品的喜欢,陪伴的温暖(一)",
            "text":"木项链的质朴,长陪伴在身边,就像恋人的陪伴,时刻不分离。",
            "image":"images/production_02.jpg",
            "fans":337,
            "praise":498
        },
        {
            "name":"木子君 ",
            "photo":"images/pic_04.jpg",
            "hobby":"生活梦想家 ",
            "type":"布艺",
            "title":"以草木染布，拼布为巾(二)",
            "text":"谦和素净的风格，如同茶人的麻衣，致认真生活的你。",
            "image":"images/production_04.jpg",
            "fans":598,
            "praise":985
        }
    ];


    //点击标题滑出副标题导航栏
    $scope.subheadOn=function(){
        $('#subhead_production').slideToggle()
    };


});