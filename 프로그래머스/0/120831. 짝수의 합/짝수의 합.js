function solution(n) {
    return Array(n).fill().map((_,i) => i+1).filter(value => value % 2 === 0).reduce((a,c) => a + c, 0);
}