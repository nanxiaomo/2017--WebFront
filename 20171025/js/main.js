var p = document.getElementsByClassName('result');
var result = ""
function getDemoClient() {
	var demo = document.getElementsByClassName('demo');
	var demoClientHeight = demo[0].clientHeight;
	var demoClientWidth = demo[0].clientWidth;
	result = "demo1 的 clientHeight 为：" + demoClientHeight 
	         + ",demo1的clientWidth 为：" + demoClientWidth;
	p[0].innerHTML = result;
}
function getContainerClient() {
	var container = document.getElementsByClassName('container');
	var containerClientHeight = container[0].clientHeight;
	var containerClientWidth = container[0].clientWidth;
	result = "demo1 包含器的 clientHeight 为：" + containerClientHeight
	 		+ ",demo1 包含器的clientWidth 为：" + containerClientWidth;
	p[0].innerHTML = result;
}
function getBodyClient() {
	var body = document.getElementsByTagName('body');
	var bodyClientHeight = body[0].clientHeight;
	var bodyClientWidth = body[0].clientWidth;
	result = "body的 clientHeight 为：" + bodyClientHeight
	 		+ ",body包含器的clientWidth 为：" + bodyClientWidth;
	p[0].innerHTML = result;
}