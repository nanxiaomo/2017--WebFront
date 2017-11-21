function DoublyLinkedList() {
	var head = null; //头指针
	var tail = null; //尾指针
	var length = 0;

	var Node = function(item) {
		this.prev = null;
		this.item = item;
		this.next = null;
	}
  // 插入到指定位置
	this.insert = function(element,postion) {
		if (postion >= 0 && postion <= length) {
			var node = new Node(element);
			var current = head;
			var previous;
			
			if (postion == 0) {
				if(!head){
				  head = node;
				  tail = node;
				}else{
					node.next = current;
					head = node;
					node.prev = null;
				}
			}else if(postion ==length){
					current = tail;
					current.next = node;
					node.prev = current;
					tail = node;
			  }else {
			  	for (var i = 0; i < postion; i++) {
						previous = current;
						current = current.next;
					}
					node.next = current;
					previous.next = node;
					current.prev = node;
					node.prev = previous; 
			  }
			length++;
			return true;
		}else {
			return false;
		}
	};
	// 插入到最后
	this.append = function(element) {
		var node = new Node(element);
		var current = head;
		var previous;
		if(!head){
			head = node;
			tail == node;
		}else {
			current = tail;
			current.next = node;
			node.prev = current;
			tail = node;
		}
		length++;
	};

	// 删除链表的指定位置

	this.removeAt = function(position) {
		if (position > -1 && postion <length){
			var current = head;
			var previous;

			if (position ==0) {// 有可能只有一个元素
				head = current.next;
				if(length === 1){
					tail = null;
				}else{
					head.prev = null;
				}	
			}else if (position == length-1) { // 最后一个值得下标为length-1；
			  current = tail;
			  tail = current.prev;
			  tail.next = null; 
			} else {
				for (var i = 0; i < position; i++) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			length--;
			return current.item;
		}else{
			return null;
		}
	};
// 从尾部删除一个元素
	this.remove = function() {
		var current = head;
		var preNode;
		if (head == null) {
			return null;
		}else{
			current = tail;
			tail = current.prev;
			tail.next = null;
			length--;
			return current.item;
		}
	};
 	this.toString = function() {
  	var current = head;
  	var string = '';
  	while (current) {
  		string += current.item;
  		current = current.next;
  	}
  	return string;
  };
  
  this.size = function() {
  	return length;
  }
}
var doublyLinkedList = new DoublyLinkedList();