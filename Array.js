function getSecondLargest(nums) 
{
    nums.sort(function(a, b){return b - a});
    
    for (let i=0; i<nums.length; i++) 
    {
        if (nums[i] < nums[0]) {
            return nums[i];
            break;
        }
    }
}
