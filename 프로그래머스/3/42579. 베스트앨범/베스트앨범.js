function solution(genres, plays) {
    var answer = [];
    const map = {}
    const count = {}
    
    for (let i=0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if (!map[genre]) {
            map[genre] = [];
        }
        map[genre].push([i, play]);
        count[genre] = (count[genre] || 0) + play;
    }
    
    const sortedGenres = Object.keys(count).sort((a,b) => count[b] - count[a]);
    
    for (const g of sortedGenres) {
        const result = map[g].sort((a,b) => b[1] - a[1]);
        result.slice(0,2).forEach((item) => {
            answer.push(item[0]);
        });
    }
    
    return answer;
}