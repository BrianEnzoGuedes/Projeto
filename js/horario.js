function UpDateTime() {
    const now = new Date();
    const options = { 
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    document.getElementById('datatime').textContent = now.toLocaleString('pt-BR', options);
}
// Atualiza a cada segundo
setInterval(UpDateTime, 1000);
// Inicializa imediatamente
UpDateTime();