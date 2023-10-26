export function formatDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    const dayStr = day < 10 ? `0${day}` : day.toString();
    const monthStr = month < 10 ? `0${month}` : month.toString();
  
    const fechaFormateada = `${dayStr}-${monthStr}-${year}`;
  
    return fechaFormateada;
  }
  