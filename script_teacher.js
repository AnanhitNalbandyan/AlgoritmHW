
    function sortQuick(arr, left, right) {
        let i = left;
        let j = right;
        let pivot = arr[parseInt((left + right) / 2)];
        // let pivot = arr[parseInt(Math.floor(Math.random() * (right - left) + left))];
        //let pivot = arr[right];
        while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j) {
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
            i++; j--;
        }
        }
        if (left < j) sortQuick(arr, left, j);
        if (i < right) sortQuick(arr, i, right);
        return arr;
    }

    // let numbers = [1, 5, 1, 9, 9, 4, 10, 1];
    let numbers = [2, -2, 4, 1, -4, 5, 0, 6, 7];
    document.write(`${numbers} <br>`);
    document.write(sortQuick(numbers, 0, numbers.length - 1) + "<br>");
