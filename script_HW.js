const helperP = (arr, start, end) => {
    let p = arr[end];
    let i = start;
    j=0;
    for (j = start; j<=end; j++) {
        if(arr[j]<p){
            swap (arr, i, j);
            j++;  
        }
    }
}

const swap =(source, i, j)=>{
    let x = source[i];
    source[i] = source[j];
    source[j] = x;
}

const quickSort = (arr, start, end) => {
    if (start < end) {
        let p = helperP (arr, start, end)
        quickSort(arr, start, p-1)
        quickSort(arr, p+1, end)
    }
}
    const arr = [5,6,-6,8,3,-7,-2,10,1,0];
    console.log(arr);
    quickSort( arr, 0, arr.length-1)
    console.log(arr);