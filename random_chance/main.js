function Quarters(quart){
    var chance, win;
    for (var i = quart; i >0; i--) {
        win = Math.trunc(Math.random() *51) +50;
        chance = Math.trunc(Math.random() *100);
        if (chance === 49) {
            return quart+win;
        }
    }
    return 0;
}
console.log(Quarters(50));