var arr = [10,50,76,30,25,19,4,20];
for(let i = 0; i < arr.length; i ++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[min] > arr[j]) 
            min = j;
        }
        if(min !== i) 
            [arr[i], arr[min]] = [arr[min], arr[i]];
}
console.log(arr)