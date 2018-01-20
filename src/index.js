module.exports = function groupBy(mapper = item => item) {
    let answer = {};
    this.forEach(element => {
        let key = mapper(element);
        let arr;
        if(answer[key]) {
            arr = answer[key]
        } else {
           answer[key] = arr = [];
        }
        arr.push(element);
    });
    return answer;
}
