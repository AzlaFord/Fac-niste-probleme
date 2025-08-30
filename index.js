function countNegNum(arr){
    let arrNeg = [0,0]
    let arrPos = [0,0]

    for(let i = 0 ; i <arr.length;i++){
        if(arr[i] >= 0){
            arrNeg[0] += arr[i]
            arrNeg[1]+=1
        }
        if(arr[i] <= 0){
            arrPos[0] += arr[i]
            arrPos[1]++
        }
    }
    return [arrNeg,arrPos]
}
console.log(countNegNum([1,-2,4,-6,7,-1,3]))

function reverse(arr){
    let k =0
    for(let i = arr.length-1;k<=i;i--){
        [arr[i], arr[k]] = [arr[k], arr[i]];
        k++
    }
    return arr
}

console.log(reverse([1,2,3,4,5,6,7]))

function thirdMost(arr){
    let max3 = [-Infinity,-Infinity,-Infinity]

    for(let i = 0 ; i<arr.length;i++){
        if(max3[0] < arr[i]){
            max3[2] = max3[1]
            max3[1] = max3[0]
            max3[0] = arr[i]
        }else if(max3[1] < arr[i] && arr[i] < max3[0]){
            max3[2] = max3[1]
            max3[1] = arr[i]
        }else if(max3[2]<arr[i] && arr[i] < max3[1]){
            max3[2] = arr[i]
        }
    }
    return max3
}
console.log(thirdMost([3,4,5,8,9,1,2,7,10,0]))

function thirdMinOdd(arr){
    min = [Infinity,Infinity,Infinity]
    for(let i = 0;i<arr.length;i++){
        if(arr[i] % 2 != 0){
            if(min[0] > arr[i]){
                min[2] = min[1]
                min[1] = min[0]
                min[0] = arr[i]
            }else if(min[1] > arr[i] && arr[i] > min[0]){
                min[2] = min[1]
                min[1] = arr[i]
            }else if(min[2] > arr[i] && arr[i] > min[1] ){
                min[2] = arr[i]
            }
        }
    }
    return min
}
console.log(thirdMinOdd([3,5,1,8,9,2,7,10,11,0]))

function thirdMaxEven(arr){
    max = [-Infinity,-Infinity,-Infinity]
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i] %2 == 0){
            if(max[0] < arr[i]){
                max[2] = max[1]
                max[1] = max[0]
                max[0] = arr[i]
            }else if(arr[i]>max[1] && max[1] <max[0]){
                max[2] = max[1]
                max[1] = arr[i]
            }else if(arr[i]>max[2] && max[2]<max[1]){
                max[2] = arr[i]
            }
        }
    }
    return max
}

console.log(thirdMaxEven([3,5,1,8,9,2,7,10,13]))

function maxOddAndEven(arr){
    let maxEven = -Infinity
    let maxOdd = -Infinity
    for(let j = 0 ;j<arr.length;j++){
        if(arr[j]%2==0 && maxEven < arr[j]){
            maxEven = arr[j]
        }
    }
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i]%2!=0 && arr[i] >maxOdd && arr[i] <maxEven){
            maxOdd = arr[i]
        }
    }
    return [maxEven,maxOdd]
}
console.log(maxOddAndEven([3,5,1,8,9,2,7,10,13]))

function diapazon(arr,start,end){
    let sum = 0
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i] >= start && arr[i]<=end){
            sum+=arr[i]
        }
    }
    return sum
}

console.log(diapazon([2,-1,6,4,-3,7,-2,0,9,2],-2,4))

function diference(arr){
    max = -Infinity
    min = Infinity
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i]>max){
            max= arr[i]
        }
    }
    return max-min
}

console.log(diference([35,78,30,200,42]))

function monstFrequent(arr){
    let k 
    let count=0
    for(let i =0; i<arr.length;i++){
        let num = arr[i]
        let countinterior =0
        for(let j =0 ;j<arr.length;j++){
            if(num == arr[j]){
                countinterior++
                if(countinterior> count){
                    count = countinterior
                    k = num
                }
            }
        }
    }
    return [k,count]
}
console.log(monstFrequent([1,2,3,2,5,2,5]))

function noDubl(arr){
    let result =[]
    let count = []
    let index = 0
    for (let i = 0;i<arr.length;i++){
        let exists = false
        for(let j =0;j<index;j++){
            if(arr[i] == result[j]){
                exists= true
                count[j]++
            }
        }
        if(!exists){
            result[index] = arr[i]
            count[index] = 1
            index++
        }
    }
    for (let i = 0; i < count.length - 1; i++) {
        for (let j = 0; j < count.length - i - 1; j++) {
            if (count[j] < count[j + 1]) { // schimbă sensul comparației
                // schimbăm count
                let tempCnt = count[j];
                count[j] = count[j + 1];
                count[j + 1] = tempCnt;

                // schimbăm și valorile din result
                let tempVal = result[j];
                result[j] = result[j + 1];
                result[j + 1] = tempVal;
            }
        }
    }

    return [result, count];
}

console.log(noDubl([45,30,45,35,67,35,30,89,90,35]))


function twoSum(arr, num) {
    let result = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) { // începe de la i+1
            if (arr[i] + arr[j] === num) {
                result[index] = [i+1, j+1];
                index++;
            }
        }
    }

    return result;
}

console.log(twoSum([4, 2, 3, 5, 1, 3, 8], 6));

function twoSum2(arr,num){
    let index = 0
    let result = []
    for(let i =0 ; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === num){
                result[index] = [i,j]
                index++
            }
        }
    }
    return result
}
console.log(twoSum2([4, 2, 3, 5, 1, 3, 8], 6));

function twoSum3(arr,num){
    let index = 0
    let result = []
    for(let i = 0 ;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === num){
                result[index] = [i,j]
                index++
            }
        }
    }
    return result
}
console.log(twoSum3([4, 2, 3, 5, 1, 3, 8], 6));

function closestToZero(arr){
    let closestsum = Infinity
    let result = []
    for(let i =0 ;i <arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let sum = arr[i] + arr[j]
            if(Math.abs(sum) < Math.abs(closestsum)){
                closestsum = sum
                console.log(closestsum)
                result = [arr[i], arr[j]];
            }
        }
    }
    return result
}

console.log(closestToZero([8,3,1,9,-4,7,10,3,9]))

// function closestToZero2(arr){
//     let result = []
//     let closestSum = Infinity
//     for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             let sum = arr[i] + arr[j]
//             if(Math.abs(sum) < Math.abs(closestSum)){
//                 closestSum = sum
//                 result = [arr[i], arr[j]]
//             }
//         }
//     }
//     return result
// }
// console.log(closestToZero2([8,3,1,9,-4,7,10,3,9]))

// function closesttozero3(arr){
//     let result = []
//     let closestSum = Infinity
//     for(let i =0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             let sum = arr[i] + arr[j]
//             if(Math.abs(sum) < Math.abs(closestSum)){
//                 closestSum = sum
//                 result = [arr[i],arr[j]]
//             }
//         }
//     }
//     return result
// }

// console.log(closestToZero2([8,3,1,9,-4,7,10,3,9]))

// function close0(arr){
//     let result = []
//     let closesum = Infinity
//     for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             let sum = arr[i] + arr[j]
//             if(Math.abs(sum) < Math.abs(closesum)){
//                 closesum = sum
//                 result = [arr[i],arr[j]]
//             }
//         }
//     }
//     return result
// }

// console.log(close0([8,3,1,9,-4,7,10,3,9]))


// deci pril lucru fac un result si o variaibla care sotcheaza temporar  suma cea mai aorpope de 0 dupa fac 2 forloopuri si al doilea incepe cu o interatie peste prima screz o varaibila suma care va faci primul numa din primul for loop + al doilea nr din aldoilea foor lop sa se calculeze o suma se verifica cu Math.abs in coparatie cu closes sum care e tot in math abs si daca e mai mica  ca curentasum atunci se schimba valoarea cam atat

function deleteNumber(arr,num){
    let k = arr.length
    let found = false
    for(let i = 0 ; i<k;i++){
        if(arr[i] === num && !found ){
            found = true
        }
        if(found){
            arr[i] = arr[i + 1];
        }
    }
    if (found) {
        arr.length--
    }
    return arr
}

console.log(deleteNumber([35,30,89,76,155,123],76))

function deleteNumb(arr,num){
    let found = false
    for(let i =0 ;i<arr.length;i++){
        if(arr[i] === num && !found){
            found = true
        }
        if(found){
            arr[i] = arr[i+1]
        }
    }
    if(found){
        arr.length--
    }
    return arr
}
console.log(deleteNumb([35,30,89,76,155,123],155))


function deleteNum(arr,num){
    let found = false
    for(let i =0 ;i<arr.length;i++){
        if(arr[i] === num && !found){
            found = true
        }
        if(found){
            arr[i] = arr[i +1]
        }
    }
    if(found){
        arr.length--
    }
    return arr
}
console.log(deleteNum([35,30,89,76,155,123],35))

// deci in problema asta trebuie de facut o variabila boolean cu valaorea false ianfara cilculuio for iar in cilu vom veririfca fiecare iteratie cu num daca e egal cu numarul dorit de ster daca da setam found ca true iar dupa daca found e true vor face ca fiecare inetratie de arr sa fie egala cu urmatoarea la iseriea din bucla for vom face inca o verificare la found ca e  adevarat atunci vom scade marimea la array cu -1 arr.length -1

