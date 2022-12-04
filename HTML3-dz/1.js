function printTemp(cels, fahr){
    alert(`Цельсий: ${cels} Фаренгейт: ${fahr}`);
}
function calcFahr(cels){
    return (9/5*cels+32).toFixed(1);
}

const cels = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
const fahr = calcFahr(cels);
printTemp(cels, fahr);