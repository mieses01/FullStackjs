function isLeapYears(year){
  if (year % 4 === 0){
    if (year % 100 === 0){
      if (year % 400 === 0){
        return("A leap Year");
      }else{
        return("Not  leap year");
      }
    }else{
      return("Not  leap year");
    }
  }else{
    return("Not leap year");
  }
}
