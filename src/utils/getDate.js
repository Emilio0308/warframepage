export const getDate = (fechaHora) => {
  const fechaHoraObjeto = new Date(fechaHora);

  // Formatear como desees
  const opcionesFormato = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const fechaHoraFormateada = fechaHoraObjeto.toLocaleString(
    "es-ES",
    opcionesFormato
  );

  return fechaHoraFormateada;
};
