function bmiCalculator(weight,height){
    var we = weight;
    var he = height;
    var bmi;

    bmi = Math.round((we / Math.pow( (he/100), 2 )).toFixed(1));
    if(bmi < 18.5){
      alert("Underweith");
    }
    if(bmi > 18.5 && bmi < 24.9){
      alert("Normal");
    }
    if(bmi > 25 && bmi < 29.9){
      alert("Overweith");
    }
    if(bmi > 30 && bmi < 34.9){
      alert("Overweith");
    }
    if(bmi > 35){
      alert("Overweith");
    }
}
