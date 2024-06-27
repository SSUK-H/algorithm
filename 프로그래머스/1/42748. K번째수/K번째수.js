function solution(array, commands) {
    const result = [];
    
    commands.map((command) => {
        // [i, j, k]를 원소로 가진 2차원 배열
        const [i, j, k] = command;
        // array의 i번째 숫자부터 j번째 숫자까지 자름
        const sliceArr = array.slice(i-1, j);
        // sliceArr 정렬
        sliceArr.sort((a,b) => a - b);
        // k번째에 있는 수
        result.push(sliceArr[k-1])
    });
    
    return result;
}