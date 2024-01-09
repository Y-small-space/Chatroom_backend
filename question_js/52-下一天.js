Date.prototype.nextDay = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}



const date = new Date("2014-06-20");
console.log(date.nextDay()); // "2014-06-21"
