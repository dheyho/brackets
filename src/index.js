module.exports = function check(str, bracketsConfig) {

  str.split(" ");
  let fuct1 = 0;
  let fuct2 = 0;
  let fuct3 = 0;
  let fuct4 = 0;
  let fuct5 = 0;
  let fuct6 = 0;
  let fuct7 = 0;
  
  for(let i = 0; i< str.length; i++){
  if(str[i]=="["){
  fuct1 ++;
  }
  
  if(str[i]=="]"){
  fuct2 ++;
  }
  
  if(str[i]=="{"){
  fuct3 ++;
  }
  
  if(str[i]=="}"){
  fuct4 ++;
  }
  
  if(str[i]=="("){
  fuct5 ++;
  }
  
  if(str[i]==")"){
  fuct6 ++;
  }
  
  if(str[i]=="|"){
  fuct7 ++;
  }
  }
  
  if((fuct1!=fuct2)||(fuct3!=fuct4)||(fuct5!=fuct6)){
  return false;
  }
  
  else if(fuct7 % 2 == 0){
  return true;
  }
  else
  return true;
  }