function anagrama(palabra1, palabra2) {
    let condicion = palabra1 === palabra2 ? false : true;
    if (condicion == true) {
        for (let i = 0; i < palabra1.length; i++) {
            condicion = palabra2.toLowerCase().includes(palabra1[i].toLowerCase());
            if (condicion == false) {
                break;
            }
        }
    }
    return condicion;
}
let pal1 = 'roma', pal2 = 'amor';
let condicion = anagrama(pal1, pal2);
let mensaje = condicion ? 'Es anagrama' : 'No es anagrama';
console.log('palabra 1:', pal1,'    palabra 2:', pal2);
console.log(mensaje);

