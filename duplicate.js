//duplicate by this way it will be sorted also
 
function duplicate(arr){
    console.time();
    let obj = {};
    let arrNew = [];
    for(let i=0; i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]=ob[arr[i]]++;
        }else{
            obj[arr[i]]=0;
        }
    }

    for(let key in obj){
        if(obj[key]===0){
            arrNew.push(key);
        }
    }
    console.timeEnd();
    return arrNew;
}
var dup = duplicate([1,8,23,54,1, 3, 8, 6, 7, 8,0,1]);
console.log(dup);