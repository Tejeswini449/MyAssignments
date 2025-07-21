// let arr1 = [1,2,3,4,5]
// let arr2 = [3,4,5,6,7]

function arrayIntersect(arr1,arr2)
{
    let arr3 = []
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]===arr2[j])
                {
                    arr3.push(arr2[j])
                }
        }
    }

console.log(arr3)
}
arrayIntersect([1,2,3,4,5],[3,4,5,6,7])
arrayIntersect([2,2,3,4,5],[5,2,6,3,2])