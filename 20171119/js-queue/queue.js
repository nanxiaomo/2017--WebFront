function Queue() {
	var items = [];

	this.enqueue = function(element) {
		items.push(element);
	};

	this.dequeue = function() {
		return items.shift();
	};

	this.front = function() {
		return items[0];
	};

	this.isEmpty = function() {
		return items.length == 0;
	};

	this.size = function() {
		return items.length;
	};

	this.print = function() {
		console.log(items.toString());
	};

	this.clear = function() {
		items = [];
	};
}
var classment = new Queue();
/* 测试输入
* classment.enqueue("wangfei");
* classment.enqueue("libei");
* classment.enqueue("tangxiaoshu");
*/
// 优先队列

function PriorityQueue() {
	var items = [];

	function QueueElement(element,priority) {
	 	this.element = element;
	 	this.priority = priority;
	} 

	this.enqueue = function(element,priority) {
		var queueElment = new QueueElement(element,priority);

		if (items.length == 0) {
			items.push(queueElment);
		}else {
			var added = false;
			for (var i = 0; i < items.length; i++) {
				if (queueElment.priority < items[i].priority) {
					items.splice(i, 0, queueElment)
					added = true;
					break;
				}
			}
		}
		if (!added) {
			items.push(queueElment);
		}
	}

	this.dequeue = function() {
		return items.shift()
	}
}

var patient = new PriorityQueue();