function printRange(startP,endP,skipP) {
    for (var i= startP; i<endP; i = i + skipP) {
        console.log(i);
    }
}
printRange(-2,10,3);