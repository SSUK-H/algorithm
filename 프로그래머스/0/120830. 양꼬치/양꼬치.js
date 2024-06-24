function solution(n, k) {
    return ((12000*n) + 2000 * Math.max(0, k - Math.floor(n/10)));
}