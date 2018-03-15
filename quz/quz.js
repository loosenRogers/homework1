/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
// function dcate(A, B) {
//   var L;
//   for (L = A; L !== null; L = L.tail) {
//     if (L.tail === null) {
//       L.tail = B;
//       break;
//     }
//   }
//   return A;
// }

function dcate(A, B){
  // 边界条件
  if (typeof A !== "object" || A.constructor != List || typeof B !== "object" || B.constructor != List) {
    return List.list([]);
  }
  var tmp = A;
  // 循环遍历直至链表的最后一项
  while (tmp.tail) {
    tmp = tmp.tail;
  }
  // 将 A 链表的最后一项与 B 相连接
  tmp.tail = B;
  return A;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
  /*
  *  思路：L.toString()，先把List对象转换成字符串，再拆分成数组
  *  截取数组对应部分subArray
  *  然后通过List.list(array)方法将数组转换成list对象
   */
  var listToArray = L.toString().split(' ');
  // 去除数组头尾
  listToArray.pop();
  listToArray.shift();
  try{
    var array = listToArray.splice(start,len)
  }catch(err){
    throw Error(err.message)
  }
  return List.list(array)
}
