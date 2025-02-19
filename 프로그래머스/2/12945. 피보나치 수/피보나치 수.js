function solution(n) {
    if (n < 2) return n; 
    
    let prev = 0, curr = 1;
    for (let i=2; i<=n; i++) {
        let next = (prev + curr) % 1234567;
        prev = curr;
        curr = next;
    }
    return curr;
}