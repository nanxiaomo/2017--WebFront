// 内部私有函数 
function functionout(num) {
	function functionin(num) {
		return num*2;				
	}
	return "this is functionout': " + functionin(num);
}
/*输入测试
* functionout(5);
* functionin(2);
*/
// 返回值是函数
function a() {
	alert("a");
	return function () {
		alert("b");
	}
}
/*输入测试
* a();
* a()();
*/
/* 理解 ，他返回的是一个函数，那么执行函数就是 a()();
*/
// 如果返回值是是正常的呢
function a1() {
	alert("a1");
	return 2;
}
/*输入测试
* a1(); 
*/
// 综合例子
var callMeUp = function (){
	function someSetUp() {
		var setup = "done";
	}
	function actualWork() {
		alert("work ,work");
	}
	someSetUp();
	return actualWork;
}();
/* 输入测试
* callMeUp();
* callMeUpp;
*/
// 闭包-- 词法作用域

function f1() {
	var testa = 1;
	return f2();						
}
function f2() {
	return testa;
}
/* 输入测试
* f1() // testa is undefined
*/
/* 增加全局变量
var testa = 2;
function f1() {
	var testa = 1;
	return f2();						
}
function f2() {
	return testa;
}
*  f1() // 2
*/
// 闭包第二节 返回值提升
function btest2(){
	var btestvar = "hello";
	var f1 = function (){
		return btestvar;
	}
	 btestvar = "shememem"
	return f1();
}
/* 输入测试
*  btest2()
*/
// 闭包第三节节 全局占位符
var n;
function btest3(){
	var btestvar = "hello";
	n = function (){
		return btestvar;
	}
}

/* 输入测试
*  n()
*  btest3()
*/
// 闭包第四节 
function btest4(arg){
	var n1 = function (){
		return arg;
	}
	arg++;
	return n1;
}
/* 输入测试
* btest4(123)
* btest4(123)()
*/
(function(x){
	return function(){
		return x;
	}
})(1);
// 闭包学习四
function btest5(){
	var arr = [];
	var i;
	for (var i = 0; i < 3; i++) {
		arr[i] = function () {
			return i;
		}
	}
	return arr;
}
/* 输入测试
* var test8 = btest5()
* 
*test8[0]()
*test8[1]()
*test8[2]()
*/
// 闭包的值
function btest6(){
	var arr = [];
	var i;
	for (var i = 0; i < 3; i++) {
		arr[i] = function (x) {
			return function (){
				return x;
			}
		}(i)
	}
	return arr;
}
/* 输入测试
* var test9 = btest6()
* 
*test9[0]()
*test9[1]()
*test9[2]()
*/
// 闭包的值