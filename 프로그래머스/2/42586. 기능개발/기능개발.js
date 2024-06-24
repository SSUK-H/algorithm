function solution(progresses, speeds) {
    const answer = [];
    
		// 각 배포 가능 날짜
    const daysToComplete = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

    let count = 0;
    let prevDay = daysToComplete[0];
    
    for (let i = 0; i < daysToComplete.length; i++) {
        if (prevDay >= daysToComplete[i]) { // 이전 배포 가능 날짜보다 현재 배포 가능 날짜가 늦을 때
            count++;
        } else {
            answer.push(count);
            count = 1;
            prevDay = daysToComplete[i];
        }
    }
    
    answer.push(count);
    
    return answer;
}