var MyCalendar = function() {
   var head = null;
   this.length = 0;
};
var Calender = function(startTime,endTime){
        this.startTime = startTime;
        this.endTime = endTime;
        this.next = null;
}
/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    var calender = new Calender(start,end);
    if(this.head == null){
        this.head = calender;
        this.length++;
        return true;
     }else{
        var current = this.head;
         var prenode;
        for(var i = 0; i < this.length; i++){
            prenode = current;
            if (i < this.length -1) {
            	if(calender.startTime < prenode.start && calender.endTime < prenode.next.endTime){
                current = current.next; 
            	}else{
                	calender.next = prenode.next;
                	prenode.next = calender;
              		this.length++;
                	return true;
            	}
            }else{
            	if(calender.startTime >= prenode.endTime){
                	calender.next = prenode.next;
               	 	prenode.next = calender;
              		this.length++;
                	return true;
            	}else{
            		return false;
            	}
            }
        }
       return false;  
     }
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */