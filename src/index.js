
exports.min = function min (array=[0]) {
  if (array.length==0) {
    return 0;
  }   
  var min=array[0];
  for(var i=0;i<array.length;i++){
    if(array[i]<min) {
      min=array[i];
    }
  }
  return min;
}

exports.max = function max (array=[0]) {
  if (array.length==0) {
    return 0;
  }   
  var max=array[0];
  for(var i=0;i<array.length;i++){
    if(array[i]>max) {
      max=array[i];
    }
  }
  return max;
}

exports.avg = function avg (array=[0]) {
  if (array.length==0) {
    return 0;
  }   
  var summ = 0;
  for(var i=0;i<array.length;i++){
    summ+=array[i]
    }
  return summ/array.length;
}
