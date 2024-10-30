function solution(clothes) {
    var answer = {};
    
    // 카테고리별로 분리
    for (let [item, category] of clothes) {
        if (!answer[category]) {
            answer[category] = [];
        }
        answer[category].push(item); 
    }
    
    // 경우 수 계산
    let result = 1;
    for (let c of Object.values(answer)) {
        result *= (c.length + 1);
    }   
    return result -= 1
}