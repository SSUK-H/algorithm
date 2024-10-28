function solution(participant, completion) {
    var answer = new Map();
    
    // 참가자 기록
    for (let p of participant) {
        if (answer.has(p)){
            answer.set(p, answer.get(p) + 1);
        } else {
            answer.set(p, 1);
        }
    }
    // 완주자 기록
    for (let p of completion) {
        if (answer.has(p)) {
            answer.set(p, answer.get(p) - 1);
        }
    }
    // 찾기
    for (let [key, value] of answer) {
        if (value > 0) {
            return key;
        }
    }
}