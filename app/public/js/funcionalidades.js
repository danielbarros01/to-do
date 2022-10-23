function formatear(date) {
    let fecha = new Date(date);
    let year = fecha.getFullYear()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    return `${day}/${month}/${year}`;
}

module.exports = { formatear }