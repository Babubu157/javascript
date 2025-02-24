// 2 dimension array

let arr2d = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
]
console.log(arr2d[0][0]);
console.log(arr2d[0][1]);
console.log(arr2d[0][2]);

for( let row=0; row<arr2d.length; row++){
    for(let col=0; col<arr2d.length; col++){
        console.log(arr2d[row][col]);
    }
}


// Bubble sort

let ar = [2,1,9,5,7];
for (let i=0; i < ar.length; i++){
    for(let j=i+1; j < ar.length; j++){
        if(ar[i] > ar[j]){
            let temp = ar[i];
            ar[i] =  ar[j];  
            ar[j] = temp;
        }
    }
}
console.log("sorted", ar);

// Object

