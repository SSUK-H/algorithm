function solution(prices) {
    var answer = [];
    // 인덱스 1부터 차례대로 끝까지 값을 비교
    for (let i = 0; i < prices.length; i++) {
        let stack = 0;
        for (let j = i + 1; j < prices.length; j++) {
            stack += 1
            if(prices[i] > prices[j]) break
        }
        // 최종값 푸시
        answer.push(stack);
    }
    
    return answer;
}