function solution(nums) {
    const type = new Set(nums);
    const num = nums.length / 2;
    
    const answer = num > type.size ? type.size : num;
    
    return answer;
}