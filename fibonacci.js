function fibonacciGenerator (n) {

    var result = [];
    var count;
    if (n === 2){
      result.push(0);
      result.push(1);
    }else if (n === 1) {
      result.push(0);
    }else{
      result.push(0);
      result.push(1);
      for(var i = 2; i < n; i++){
          count = result.push(result[result.length -2] + result[result.length -1]);

      }
    }
    return(result);
}
fibonacciGenerator(60);
