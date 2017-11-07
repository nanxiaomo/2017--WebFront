/* 函数一节一节学习代码 */
 function sumargument() {
 	var sum = 0;
 	var arglength = arguments.length;
 	for (var i = 0; i < arglength; i++) {
 		sum += arguments[i];
 	}
    return sum;
 	// body...
 }

// 全局变量和局部变量实践

var global = 1;
function foo() {
	var local = 2;
	global++;
	return global;
	// body...
}
// 测试输入
/******
*foo()
*local
*/
// 局部变量覆盖问题
var a = 2;
function test() {
	alert(a);
	var a = 1;
	alert(a);
	// body...
}

/******测试输入
*test()
*/
/* 测试结果
* undefined
* 1
*/
/* 如果相输出全局的a
var a = 2;
function test() {
	alert(this.a);
	var a = 1;
	alert(a);
	// body...
}
*/
// 函数标识记法
function f() {
	return "this is function f";
}
var h = function () {
	return "i am function";
}
/******测试输入
*typeof f
*typeof h
*/
// 回调函数

function add1(add1) {
	return add1;
}
function add2(add2) {
	return add2;
}
function sum(a1,a2) {
	return a1 + a2;
	// body...
}
/******测试输入
*
*sum(add1(1),add2(2))
*/
// callback 回调函数
 function multiplyByTwo(a, b, c, callback) {
 	var i = 0, ar = [];
 	for(;i < 3; i++){
 		ar[i] = callback(arguments[i] * 2);
 	}
 	return ar;
 }
 function addOne(a){
 	return a + 1;
 }
 /******测试输入
*
*multiplyByTwo(4, 5, 6, addOne)
*/
// 自调函数 立即执行
( function sayhellp(name){
	alert("hello " + name + " !")
	})("wnagfei");
/* 会立即执行 */