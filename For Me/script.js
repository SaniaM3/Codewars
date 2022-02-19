//тернарное выражение 3 условий

function checkSign(num) {
    return (num == 0) ? "zero" : (num < 0) ? "negative" : "positive";
  }
  
  checkSign(10);

  //тернарное выражение 3 условий

function checkSign(num) {
  return (num == 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

checkSign(10);
checkSign(101);
checkSign(1011);
checkSign(109);
checkSign(1011223);
checkSign(11110);