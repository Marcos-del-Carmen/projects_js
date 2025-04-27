
class Global {
    constructor(){}
    
    calculoDias(fecha) {
        let hoy = moment().startOf('day'); 
        let fin = moment(fecha).startOf('day');
        let diasRestantes = hoy.diff(fin, 'days');
    
        return diasRestantes === 0 ? 'Creado hoy': `Creado hace ${diasRestantes} días`;
    }

    numRamdom(num) {
        return Math.floor(Math.random() * num)
    }
}