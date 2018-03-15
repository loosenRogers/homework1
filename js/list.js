/**
 * List
 * @author donaldyang
 */

function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

// Returns a new List containing the array.
List.list = function (array) {
	var sentinel = new List(),  //  初始化 sentinel = { head: 0, tail: null }
		len = array.length,
		p, i;

	p = sentinel;   // p和tail都指向new List()所分配的区域
	for (i = 0; i < len; i++) {
		/*  array = [4, 6, 7, 3, 8]
		*		i = 0, p.tail = new List(4)
		* so sentinel = { head: 0, tail: {head: 4, tail: null} }
		* 	改变p的指向，其变成p.tail的引用， 为{head: 4, tail: null}
		* 	i = 1, p.tail = new List(6)
		* so 	sentinel = { head: 0, tail: {head: 4, tail: {head: 6, tail: null}} }
		* 	改变p的指向，其变成p.tail的引用， 为{head: 6, tail: null}
		* 	循环直至最后一个元素
		 */
		p.tail = new List(array[i]);
		p = p.tail;
	}
	return sentinel.tail;
}

// Returns a readable String for THIS.
List.prototype.toString = function () {
	var res = '', L;
	res += '[';
	for (L = this; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
	// 假若数组为[1,2,3]  那么List.prototype.toString返回[ 1 2 3 ]
};
