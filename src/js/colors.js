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

    colorRamdomSimple() {
        let colores = [
            "red",      "blue",     "green",    "yellow",   "orange",   "purple",   "pink",
            "brown",    "black",    "white",    "gray",     "turquoise","cyan",     "magenta",
            "beige",    "fuchsia",  "lilac",    "wine",     "gold",     "silver"
        ];    
        let r = this.r(colores);
        return colores[r];
    }
    
}