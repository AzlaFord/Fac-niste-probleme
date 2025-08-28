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