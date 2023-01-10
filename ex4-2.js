let score = prompt('score?');
const gradeAssigner = (score) => {
    if (score <= 64) {
        return "F";
    } else if (score >= 65 && score < 70 ) {
        return "D";
    } else if (score >= 69 && score < 80 ) {
        return "C";
    } else if (score >= 79 && score < 90 ) {
        return "B";
    } else if (score >= 89 && score <= 100 ) {
        return "A";
    }
}

console.log(`your score is ${gradeAssigner(score)}`);