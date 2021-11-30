let alarmArray = process.argv.slice(2); //this is an array; 

if (alarmArray.length >= 1) {
  for (let alarmNumber of alarmArray) {
    alarmNumber = Number(alarmNumber)
    //console.log(alarmNumber);
    if (Math.sign(alarmNumber)) {
      //console.log(alarmNumber)
      setTimeout(() => {
        process.stdout.write('\x07'); // makes the sound
      }, alarmNumber * 1000)
    }
  }

} else {
  return;
}