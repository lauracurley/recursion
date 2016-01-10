// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj, array) {
  var result = '';
  if (typeof obj === 'number'){
  	return result + obj;
  } else if ( obj === null){
  	return 'null';
  } else if (typeof obj === 'boolean'){
  	return result + obj.toString();
  } else if (typeof obj === 'string'){
  	return '\"' + obj.toString() + '\"';
  } else if (typeof obj === 'undefined' || typeof obj === 'function'){
  	return result + '';
  } else if (Array.isArray(obj)){
  	var baseArray = array || [];
  	// Base Case:  obj.length === 0
  	if (obj.length === 0){
  		if (baseArray.length === 0){
  			return '[]';
  		} 
  	} else {
  		baseArray.push( stringifyJSON(obj.shift()) );
  		stringifyJSON(obj, baseArray);
  	}
  	result += "\[" + baseArray.join(",") + "\]";
  } else if (typeof obj === 'object'){
  		if (Object.keys(obj).length === 0){
  			return '{}';
  		}
  		result += '\{';
  		for (var key in obj){
  			if (typeof obj[key] === 'function' || obj[key] === undefined){
  				result += '';
  			} else {
  				result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
  			}	
  		}
  		result = result.substring(0, result.length -1);
  		result.length > 1 ? result += '\}' : result = '{}';
  } 
  return result;
};
