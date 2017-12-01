/**
 * @param {num} nums
 * @return {String} "odd" "even"
 */
function getBinaryArr(num){
    return num.toString(2).split("");
}
var parityCount = function(num){
    var numArr = getBinaryArr(num);
    var f = numArr[0]
    for(var i=1;i<numArr.length;i++){
        f ^= numArr[i]
    }
    return f ?  "even":"odd";
}