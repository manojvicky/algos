//bubble sort min(min element of the array will go to last first)(no duplicate items)
function maxBubbleSort(nums, min) {
    let sorted = nums.length;
    let i = 0;
    if (min > 0) {
        while (min > i) {
            for (let j = 0; j < sorted - 1; j++) {
                if (nums[j] < nums[j + 1]) {
                    let temp = nums[j + 1];
                    nums[j + 1] = nums[j];
                    nums[j] = temp;
                }
            }
            sorted--;
            i++;
        }
    }
    return min>0 ? nums[nums.length-min] : 'please enter index';
}

console.log(maxBubbleSort([0,2, 3, 1], 0));


//method 2 
function min(nums) {
    let min = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<min){
            min=nums[i];
        }
}
return min;
}

console.log(min([0,2,-3, 1]));