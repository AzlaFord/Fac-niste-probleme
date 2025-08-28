arr2 = [111,23,4,5,1,2,31]
min = arr2[0]
max = arr2[0]
for i in range(2,len(arr2)):
    if max < arr2[i]:
        max = arr2[i]
    if min > arr2[i]:
        min = arr2[i]
print(min,max)

def getAvgSum(arr):
    sum = 0
    for i in range(len(arr)):
        sum += arr[i]
    return [sum,sum/len(arr)]
print(getAvgSum([1,2]))

def countNr(arr,nr):
    arr2 = []
    for i in range(len(arr)):
        if arr[i] == nr:
            arr2.append(i+1)
    return arr2

print(countNr([1,2,3,2,5,3],3))

def countNegPos(arr):
    countNeg = 0
    countPos = 0
    sumNeg = 0
    sumPos = 0
    for i in range(len(arr)):
        if arr[i] >= 0:
            sumPos += arr[i]
            countPos+=1
        if arr[i] <=0:
            sumNeg += arr[i]
            countNeg+=1
    return [countNeg,sumNeg,countPos,sumPos]

print(countNegPos([1,-2,4,-6,7,-1,3]))



def reverse(arr):
    return arr[::-1]
print(reverse([1,2,3,4,5,6,7]))


def thirdMax(arr):
    arr2 = []
    arr2.append(arr[0])
    arr2.append(arr[0])
    arr2.append(arr[0])

    for i in range(len(arr)):
        if(arr2[0] < arr[i]):
            arr2[2] = arr2[1]
            arr2[1] = arr2[0]
            arr2[0] = arr[i]
        elif arr2[1] < arr2[0] and arr2[1] < arr[i]:
            arr2[2] = arr2[1]
            arr2[1] = arr[i]
        elif arr2[2] < arr2[1] and arr2[2] < arr[i]:
            arr2[2] = arr[i]
    return arr2    

print(thirdMax([3,4,5,8,9,1,2,7,10,0]))

def removeDublications(arr):
    result = []
    for i in range(len(arr)):
        exists = False
        for j in range(len(result)):
            if arr[i] == result[j]:
                exists=True
        if not exists :
            result.append(arr[i])
    return result

print(removeDublications([45,30,45,35,67,35,30,89,90,35]))