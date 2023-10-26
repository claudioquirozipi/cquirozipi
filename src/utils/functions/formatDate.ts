export function formatDate(date: Date) {
    // Asegurarse de que la entrada sea una instancia válida de Date
    if (!(date instanceof Date)) {
      return "Fecha inválida";
    }
  
    // Obtener día, mes y año
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const year = date.getFullYear();
  
    // Formatear los componentes de la fecha como cadenas de texto
    const dayStr = day < 10 ? `0${day}` : day.toString();
    const monthStr = month < 10 ? `0${month}` : month.toString();
  
    // Construir la fecha formateada
    const fechaFormateada = `${dayStr}-${monthStr}-${year}`;
  
    return fechaFormateada;
  }
  