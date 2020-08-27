var dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];

function diasSemana() {
    console.log('Los días pares de la semana son: ');
    for (let i=0; i<dias.length; i++) {
        if (i===(dias.length-1)) {
            console.log(`El ${dias[i]} es el último y séptimo día de la semana`)
        }
        else if(i%2 != 0) {
            console.log(`${dias[i]} (${[i+1]})`)
        }
    }
}
