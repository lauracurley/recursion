// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var stack = [];
var getElementsByClassName = function(className, element){
  	
  	// The element being checked on the first iteration is document.body
  	var e = element || document.body;

  	// Reset the stack variable on the first iteration through the dom
   	if (e === document.body){
   		stack = [];
   	}

   	// If the element has a classlist that contains the search parameter,
   	// push it to the stack
   	if (e.classList){
	   	if ( _.contains(e.classList, className) ) {
	   		if (stack.indexOf(e) < 0){
	   			stack.push(e);
	   		} 
		}
	}

	/* Keep searching for childNodes on each element
	*  and execute the recursive case until there are 
	*  more childNodes
	*/
   	if (e.childNodes){
   		_.each(e.childNodes, function(item){
   			getElementsByClassName(className, item);
   		});
   	}
	return stack;
};
