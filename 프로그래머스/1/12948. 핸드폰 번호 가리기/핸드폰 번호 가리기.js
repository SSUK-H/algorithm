function solution(phone_number) {
    var answer = '';
    
    answer = phone_number.slice(0, -4).replace(/\d/g, "*") + phone_number.slice(-4)
    
    return answer;
}