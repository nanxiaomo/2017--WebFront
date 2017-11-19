/**
 * @param {Array} nameList,{number} num;
 * @return {s}
 */

function hotPotato(nameList, num) {
	var queue = new Queue();

	for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
	}

	while(queue.size()>1){
		for (var i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(eliminated + '在击鼓传花游戏中被淘汰。'); 
	}
	return queue.dequeue();
}

