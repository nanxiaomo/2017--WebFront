function funcTest1(age) {
	return "my age is " + age;
}
/* 输入测试
* funcTest1(15);
* funcTest1.length;
* funcTest1.constructor
*/
// 通过prototype 给对象添加属性和方法
function Gedget(name, color){
	this.name = name;
	this.color = color;
	this.talk = function (){
		return "my name is " + this.name + " and i like " + this.color;
	}
}
/* 输入测试
* var gedget = new Gedget ("Tom", "red");
* gedget.talk();
*  
*/
Gedget.prototype.sex = "man";
Gedget.prototype = { // 
	birth: 1995,
	likeBook: 'hehe',
	sayLikeBook: function() {
	   return "i like " + this.likeBook;
	},
	get: function(what) {
		return this[what];
	}
}
/* 输入测试
* gedget.get("name");
* gedget.constructor;
* gedget.constructor.prototype;
*  
*/
// 自己的属性高于原型属性
/* 输入测试
* Gedget.prototype.name = "jone";
* var andy = new Gedget("andy","blue");
*  
*/
// mdn 学习原型
function Employee(name,dept) {
	this.name = name || "liu";
	this.dept = dept || "general" ;
}
 function Manager(reports, name, dept) {
 	Employee.call(this, name, dept);
 	this.reports = reports||[];
 }
 Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
	Employee.call(this);
 	this. projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
	WorkerBee.call(this);
	this.dept = 'sales';
	this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
	WorkerBee.call(this);
	this.dept = 'engineer';
	this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype);

/* 测试用例
* var li = new Employee("li");
* var liu = new Employee();
* var wang = new Manager(["navigator", "javascript"],"wang","loader");
* var yang =new  Manager(["navigator", "javascript"]);
*/