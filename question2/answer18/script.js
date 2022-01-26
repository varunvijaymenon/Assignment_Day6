let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
  if(countdown == 1){
      console.log("bomb disarmed")
      break;
  }
}
//bomb disarmed