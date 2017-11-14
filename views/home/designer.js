/**
 * Created by hxsd on 2016/10/12.
 */

myapp.controller('designerCtrl',function($scope,$ionicSideMenuDelegate){
    $scope.data=[
        {
            "head":"images/pic_01.jpg",
            "name":"金灿灿",
            "time":"2016.08.11",
            "title":"傳統的東西比機器有著更多的溫度和美感",
            "text":"一直想做纯粹的东西，偏执、独立、不张扬，用更多被遗忘的材料和手艺去完成一个新式的表达，坚持手造，相信手上的...",
            "pic":"images/designer_01.jpg",
            "attention":1654,
            "comment":268
        },
        {
            "head":"images/pic_02.jpg",
            "name":"蜗牛",
            "time":"2016.08.15",
            "title":"安安静静地生活",
            "text":"我从来不觉得做什么东西要有意义，它只是我正常生活的一个部分，一个小店。”充好每一天的咖啡，认真生活于此，足以5...",
            "pic":"images/designer_02.jpg",
            "attention":856,
            "comment":138
        },
        {
            "head":"images/designer_ico_03.jpg",
            "name":"姜穹",
            "time":"2016.07.15",
            "title":"做一个安静的铁匠",
            "text":"  生--出生、生长、生命 姜---创始人的姓氏 「生姜」 代表出生于并且记录着 设计师生命成长的历程 也代表设计...",
            "pic":"images/designer_03.jpg",
            "attention":468,
            "comment":68
        },
        {
            "head":"images/pic_04.jpg",
            "name":"金秀泫",
            "time":"2016.08.18",
            "title":"我的设计承载了对美好生活的愿望",
            "text":"对于器皿上素雅安静的条纹，用最简单的竖条来装饰，伸展着古典优雅，希望自己的东西是简单的，耐看的，简单就是好...",
            "pic":"images/designer_04.jpg",
            "attention":646,
            "comment":354
        },
        {
            "head":"images/pic_05.jpg",
            "name":"阿莱",
            "time":"2016.07.10",
            "title":"融进每一个环境，不争不抢",
            "text":"我觉得每个东西都应该有他的气质，本子也是。是锋芒毕露还是大智若愚，我喜欢后者，而自然造物的东西，它讲究一点...就是，顺其自然。",
            "pic":"images/designer_05.jpg",
            "attention":786,
            "comment":465
        },
        {
            "head":"images/pic_06.jpg",
            "name":"不语陌",
            "time":"2016.07.05",
            "title":"做一个安静的铁匠",
            "text":"凡是讲究个招牌，对自己做一辈子的行当不能马虎，那是面子，以匠人的态度为中国人做一份讲究的“中国礼”。让世界...",
            "pic":"images/designer_06.jpg",
            "attention":4546,
            "comment":768
        }
    ];
    $scope.changePerson=function(index){
        $scope.person=$scope.data[index];
        angular.forEach($scope.data,function(item){
            item.checked=false;
        });
        $scope.data[index].checked=true;
    };
    $scope.changePerson(2);

    //点击标题滑出副标题导航栏
    $scope.subheadOn=function(){
        $('#subhead_designer').slideToggle()
    };


});