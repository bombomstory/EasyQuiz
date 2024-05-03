var totalscore = 0;
var maxscore = 2;

function checkAnswer(question, answer) {
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');

    if (question == 'question1'){
        if (answer === 'a') {
            result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
            result1.style.color = 'green';
            if (totalscore < maxscore ){
                totalscore = totalscore + 1;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'blue';
        } else {
            result1.textContent = "Incorrect! Try again.";
            result1.style.color = 'red';
            if (totalscore > 0){
                totalscore = totalscore - 1;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'red';
        }
    } else if (question == 'question2') {
        if (answer === 'b') {
            result2.textContent = "ชื่อย่อของมหาวิทยาลัยกาฬสินธุ์คือ KSU";
            result2.style.color = 'green';
            if (totalscore < maxscore ){
                totalscore = totalscore + 1;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'blue';
        } else {
            result2.textContent = "Incorrect! Try again.";
            result2.style.color = 'red';
            if (totalscore > 0){
                totalscore = totalscore - 1;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'red';
        }
    } else {
        // Nothing
    }

}
