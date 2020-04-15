function bubbleSort(nums){
    let sorted = nums.length;
    let isSorted = true;
    while(isSorted){
        isSorted=false;
        for(let j=0;j<sorted-1;j++){
            if(nums[j]<nums[j+1]){
                let temp = nums[j+1];
                nums[j+1]=nums[j];
                nums[j]=temp;
                isSorted=true;
            }
        }
        sorted--;
    }
    return nums;
}

console.log(bubbleSort([0,1,2,3,1]));
