function LinkedList() {
	// 定义节点
	var Node = function(element) {
		this.element = element;
		this.next = null;
	} 
    // 头结点
	var head = null;
	// 列表长度
	var length = 0;
	// 在列表队尾添加元素
	this.append = function(element) {
		var node = new Node(element);
		var current = head;
		if(head == null){
			head = node;
		}else {
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++
	};
    
    //在指定位置插入元素
  this.insert = function(element,position) {
  	if (position >= 0 && position <= length) {
  		var node = new Node(element);
  		var positionNode;
  		var current = head; // 这里是浅拷贝，随意不可以让其直接等于head
  		if(position == 0){
  			node.next = current;
  			head = node; 
  		}else{
  			for (var i = 0; i < position; i++) {
  				positionNode = current;
  				current = current.next;
  			}
  			node.next = current;
  			positionNode.next = node;
  		}
  		length++;
  		return true;
	}else {
		return false;
	}
  };

  // 删除特定位置的元素

 	this.removeAt = function(position) {
 		if (position > -1 && position <length) { // 越界检查
 			var current = head;
 			var preNode;

 			if (position == 0) {
 				head = current.next;
 			}else {
 				for (var i = 0; i <position; i++) {
 					preNode = current;
 					current = current.next;	
 				}
 				preNode.next = current.next;
 			}
 			length--;
 			return current.element;
 		} else {
 			return null;
 		}
	};

	// 删除最后一个元素
	this.remove = function () {
		var current = head;
		var preNode;
		if (head == null) {
			return null;
		}else{
			while(current.next){
				preNode = current;
				current = current.next;
			}
			preNode.next = null;
			length--;
			return current.element;
		}
	};

  // 是否含有该元素，如果含有返回坐标，不含有返回-1
	this.indexOf = function(element) {
		var current = head;
		if (head == null) {
			return -1;
		}else {
			for (var i = 0; i < this.length; i++) {
				current = current.next;
				if (current.element == element) {
					return i;
				} 
			}
		}
		return -1;
	};

	// 查看元素是否为空；
 	this.isEmpty = function() {
		if (length == 0) {
			return true;
		}else {
			return false;
		}
	};
   
  // 查看数目
  this.size = function() {
  	return length;
  }

  // 打印出东西

  this.toString = function() {
  	var current = head;
  	var string = '';
  	while (current) {
  		string += current.element;
  		current = current.next;
  	}
  	return string;
  }

}
var link = new LinkedList();