function solution(priorities, location) {
    var answer = [];
    const queue = priorities.map((p, index) => [p, index])
    
    while (queue.length > 0) {
        // 첫번째 요소 꺼내기
        const current = queue.shift();
        // 첫번째 요소 보다 우선순위가 더 높은 프로세스가 있는지 확인
        if(queue.some((p) => p[0] > current[0])) {
            queue.push(current); // 있는 경우 제거 후 다시 넣기
        } else {
            answer.push(current); // 없는 경우 실행 후 제거
        }
    }
    
    return answer.findIndex((p) => p[1] === location) + 1;
}