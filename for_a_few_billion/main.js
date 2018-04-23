var penny = 0.01;
for (var i = 1; i<30;i++){
    penny= penny*2;
}
console.log(penny);
penny =0.01;
for (var j = 1; j<30;j++){
    penny= penny*2;
    if (penny>10000){
        break;
    }
}
console.log(j);
penny=0.01;
var count=1;
while (penny<1000000000) {
    penny=penny*2;
    count++;
}
console.log(count);
penny=0.01;
count=1;
while (penny<Infinity) {
    penny=penny*2;
    count++;
}
console.log(count);