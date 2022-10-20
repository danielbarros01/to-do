module.export = {
    formatearFecha(fecha) {
        let year = fecha.getFullYear()
        let month = fecha.getMonth()
        let day = fecha.getDate()

        return `${year}/${month}/${day}`;
    }
}