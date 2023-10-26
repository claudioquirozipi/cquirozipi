export function getDateDifference(lalstDate: Date) {

    const today = new Date();
    const differenceInMilliseconds = today.getTime() - lalstDate.getTime();
    const millisecondsInADay = 1000 * 60 * 60 * 24;
  
    let totalDays = Math.floor(differenceInMilliseconds/millisecondsInADay)
    const years = Math.floor(totalDays/365.25);
    totalDays -= years * 365.25;
    const months = Math.floor(totalDays/30.44);
    totalDays -= months * 30.44;
    const days = Math.floor(totalDays)
  
    return {
      years,
      months,
      days,
    };
  }