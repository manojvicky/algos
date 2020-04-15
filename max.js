//bubble sort max(max element of the array will go to last first thats why we can directly get the max element of an aaray at last index)(no duplicate items)
function maxBubbleSort(nums, max) {
    let sorted = nums.length;
    let i = 0;
    if (max > 0) {
        while (max > i) {
            for (let j = 0; j < sorted - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    let temp = nums[j + 1];
                    nums[j + 1] = nums[j];
                    nums[j] = temp;
                }
            }
            sorted--;
            i++;
        }
    }
    return max>0 ? nums[nums.length-max] : 'please enter index';
}

console.log(maxBubbleSort([0,2, 3, 1], 2));



//method 2

function max(nums) {
    let max = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
        }
}
return max;
}

console.log(max([0,2, 3, 1]));