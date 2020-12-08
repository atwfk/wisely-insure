var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    // body...
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "show"
        })
        .when("/index-2", {
            templateUrl: "index-2.html",
            controller: "hide-footer",
        })
        .when("/index-3", {
            templateUrl: "index-3.html",
            controller: "hide",
        })
        .when("/index-4", {
            templateUrl: "index-4.html",
            controller: "hide",
        })
        .when("/index-5", {
            templateUrl: "index-5.html",
            controller: "hide",
        })
        .when("/index-6", {
            templateUrl: "index-6.html",
            controller: "hide",
        })
        .when("/index-7", {
            templateUrl: "index-7.html",
            controller: "hide",
        })
        .when("/index-8", {
            templateUrl: "index-8.html",
            controller: "hide",
        })
        .when("/index-9", {
            templateUrl: "index-9.html",
            controller: "hide",
        })
});
myApp.controller('hide', function () {
    $(".hide-1").css("display", "none");
    $("#contact").css("margin-right", "275px");
    $("footer .foot").css("display", "block");
    $("html,body").animate({
        scrollTop: 0
    }, 0);
})
myApp.controller('show', function () {
    $(".hide-1").css("display", "block");
    $("#contact").css("margin-right", "50px");
    $("footer .foot").css("display", "block");
})
myApp.controller('hide-footer', function () {
    $(".hide-1, footer .foot").css("display", "none");
    $("#contact").css("margin-right", "275px");
    $("html,body").animate({
        scrollTop: 0
    }, 0);
})
function scrl(a) {
    $("html,body").animate({
        scrollTop: a
    }, 1000);
}
function addclass(element, a1, a2, a3) {
    $("#" + a1).addClass("active")
    $("#" + a2).removeClass("active")
    $("#" + a3).removeClass("active")
}
function fpage() {
    $(".form-input, .next-page").css({ "display": "block" })
    $(".table-1, .table-2, .submit, .total, .loading").css({ "display": "none" })
    $(".next-page button").attr("onclick", "spage(),addclass(this, 'c2', 'c1', 'c3')");
}
function spage() {
    $(".table-1, .total, .loading, .next-page").css({ "display": "block" })
    $(".table-2, .submit, .form-input").css({ "display": "none" })
    $(".next-page button").attr("onclick", "tpage(),addclass(this, 'c3', 'c1', 'c2')");
}
function tpage() {
    $(".table-2").css({ "display": "block" })
    $(".submit").css({ "display": "flex" })
    $(".form-input, .next-page, .table-1, .total, .loading").css({ "display": "none" })
    $(".next-page button").attr("onclick", "spage()")
}
function show(a, b, c, d) {
    $(a).toggle(700)
    $(b).hide(700)
    $(c).hide(700)
    $(d).hide(700)
}