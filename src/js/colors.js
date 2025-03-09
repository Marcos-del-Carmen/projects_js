class Colors {
    r(array) {
        return Math.floor(Math.random() * array.length);
    }
    
    colorRandomHex() {
        let letras = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hex = '';
        
        for (let i = 0; i < 6; i++) {
            let r = this.r(letras)
            hex = hex + letras[r];
        }
        return '#' + hex;
    }
}