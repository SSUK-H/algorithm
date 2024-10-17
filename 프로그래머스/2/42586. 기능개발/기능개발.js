function solution(progresses, speeds) {
    // 각 기능의 남은 일수
    const daysLeft = progresses.map((p, index) => Math.ceil((100 - p) / speeds[index]))
    
    var answer = [];
    let maxDay = daysLeft[0]; // 배포 기준
    let count = 0;
    
    
    // 완료된 일수 기능 중 배포 가능한 기능 묶기
    for (let i=0; i<daysLeft.length; i++) {
        if (daysLeft[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1; // 현재 기준 포함
            maxDay = daysLeft[i];
            console.log(answer,count,maxDay)
        }
    }
    
    // 배포
    answer.push(count);
    
    
    return answer;
}