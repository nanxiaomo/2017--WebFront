/* JavaScript面向对象设计第四章的内容 */ 
// 数组
var myColorArr = ['red', 'yellow', 'blue', 'purple'];
/* 输出测试
* myColorArr[0];
* myColorArr[1];
* myColorArr[2];
*/
// 对象定义
var person = {
	name: 'daxiong',
	age: 5,
	sex: 'man'
}
/* 输出测试
* person.name;
* person['age'];
*/
// 对象带属性方法
var personT = {
	name: 'daxiong',
	age: 5,
	sex: 'man',
	talk: function () {
		alert('hello, my name is ' + this.name);
	}
}
/* 输出测试
* personT.name;
* personT['age'];
* personT.talk();
*/
// 对象属性为对象时
var book = {
	title: '解忧杂货铺',
	author: '村上春树',
	published:{
		year: 2008,
		month: 1,
		day: 20
	}
};
/* 输出测试
* book.title;
* book.published.year;
*/
// 对象属相增，改，查
person.eeducation = 'college'; // 添加
person.age = 22;
delete person.sex;
/* 输出测试
* person.eeducation;
* person.age;
* person.sex;
* person
*/
// 构造器函数
function Staff(name) {
 	this.name = name;
 	this.talk = function () {
 		alert("my name is " + this.name);
 	}
 } 
 /* 输出测试
* var tom = new Staff("Tom");
* var jone = new Staff("jone");
* tom.talk();
* jone.talk();
* name
*/
// 构造器属性
var tom = new Staff("Tom");
 /* 输出测试
* tom.constructor
* tom.constructor.name
*/