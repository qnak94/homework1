function start(){

    var i = 1000000;
    var arr1 = [];
    var tmp = 0;
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    var dateRandom = Date.now();
    while (i--){
        tmp = getRandomInt(+min, +max);
    arr1.push(tmp);
    }
    function getRandomInt(min, max)
    {
        var mR = Math.random();
        var rand = min + mR *(max + 1 - min);
        return Math.floor(rand);
    }
    dateRandom = Date.now()-dateRandom;
    document.getElementById("timeToRandom").innerHTML = ("Время на ренерацию массива: " + dateRandom + " мс");
    document.getElementById("arr1").innerHTML = ("Сгенерированный массив: " + arr1);
    console.log("Сгенерированный массив: " + arr1);
    console.log("Время на ренерацию массива: " + dateRandom + " мс");

    //SortMaxToMin
    dateRandom = Date.now();
    function compareMax(a,b){
        if(a<b)return 1;
        else return -1;
    }
    var arrSortMaxToMin = arr1.sort(compareMax);
    dateRandom = Date.now()-dateRandom;
    document.getElementById("maxToMin").innerHTML = ("MaxToMin массив: " + arrSortMaxToMin);
    document.getElementById("timeSortMaxToMin").innerHTML = ("Время на сортировку массива: " + dateRandom + " мс");
    console.log("MaxToMin массив: " + arrSortMaxToMin);
    console.log("Время на сортировку массива: " + dateRandom + " мс");


    //SortMinToMax
    dateRandom = Date.now();
    function compareMin(a,b){
        if(a>b)return 1;
        else return -1;
    }
    var arrSortMinToMax = arr1.sort(compareMin);
    dateRandom = Date.now()-dateRandom;
    document.getElementById("minToMax").innerHTML = ("MinToMax массив: " + arrSortMinToMax);
    document.getElementById("timeSortMinToMax").innerHTML = ("Время на сортировку массива: " + dateRandom + " мс");
    console.log("MinToMax массив: " + arrSortMinToMax);
    console.log("Время на сортировку массива: " + dateRandom + " мс");

    //Sum
    dateRandom = Date.now();
    var sum = arr1.reduce(function (tmp, current) {
        return tmp+current;
    });
    dateRandom = Date.now()-dateRandom;
    document.getElementById("Sum").innerHTML = ("Сумма элементов массива: " + sum);
    document.getElementById("timeToSum").innerHTML = ("Время на суммирование массива: " + dateRandom + " мс");
    console.log("Сумма элементов массива: " + sum);
    console.log("Время на суммирование массива: " + dateRandom + " мс");
}
///////////////////////////
///////////////////////////
function transport() {
    var matrixA = [60, 80, 100];
    var matrixB = [40, 60, 80, 60];
    var matrixRes = [[],[],[]];
    var i=0;
    var j=0;
while(i<4) {                           //matrixRes [3][4]==NaN ... знаю, не красиво получилось
    var cmp = matrixB[i] - matrixA[j]; //оправляем заказчику что есть
    if (cmp < 0) {                          //если переизбыток
        matrixRes[j][i] = matrixB[i];     //записываем столько сколько нужно было клиенту
        matrixA[j] = -cmp;                //записываем остачу поставщика
        i++;                            //переходим к следующему клиенту
    }
    else if (cmp > 0) {                     //если не хватило
        matrixRes[j][i] = matrixA[j];     //Записываем сколько есть
        matrixB[i] = cmp;                 //Запиваем сколько нужно еще клиенту
        j++;                            //переходим к следующему посставщику
    }
    else { ///cmp==0
        matrixRes[j][i] = matrixB[i];     //записываем столько сколько нужно было клиенту
        matrixA[j] = 0;                   //не осталось у поставщика
        matrixB[i] = 0;                   //не нужно клиенту
        i++;                            //переходим к следующему клиенту
        j++;                            //переходим к следующему посставщику
    }
}
    /**
for(i=0; i<matrixRes.length;i++){
    for(j=0; j<matrixRes[i].length;j++){
        if(matrixRes[i][j]===null){
            matrixRes[i][j]=' ';
        }
    }
}
     **/
document.getElementById("matrix").innerHTML=('Опорная матрица: <p>' + matrixRes[0]+ '</p>'+ '<p>' + matrixRes[1]+ '</p>'+'</p>'+ '<p>' + matrixRes[2]+ '</p>');
console.log("Опорная матрица: " + matrixRes);
}