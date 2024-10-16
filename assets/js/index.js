function confirmDownload(event) {
  const userConfirmed = confirm("Deseja realmente baixar o CV?");
  if (!userConfirmed) {
    event.preventDefault(); // Cancela o download
  }
  return userConfirmed; // Se 'true', o download prossegue, caso contrário, é cancelado
}
