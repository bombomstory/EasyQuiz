var totalscore = 0;
var maxscore = 2;
var Q1State = 0
var Q2State = 0;

function checkAnswer(question, answer) {
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');

    if (question == 'question1'){
        if (answer === 'a') {
            result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
            result1.style.color = 'green';
            if (totalscore < maxscore && Q1State == 0){
                totalscore = totalscore + 1;
                Q1State = 1;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'blue';
        } else {
            result1.textContent = "Incorrect! Try again.";
            result1.style.color = 'red';
            if (totalscore > 0 && Q1State == 1){
                totalscore = totalscore - 1;
                Q1State = 0;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'red';
        }
    } else if (question == 'question2') {
        if (answer === 'b') {
            result2.textContent = "ชื่อย่อของมหาวิทยาลัยกาฬสินธุ์คือ KSU";
            result2.style.color = 'green';
            if (totalscore < maxscore && Q2State == 0){
                totalscore = totalscore + 1;
                Q2State = 1;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'blue';
        } else {
            result2.textContent = "Incorrect! Try again.";
            result2.style.color = 'red';
            if (totalscore > 0 && Q2State == 1){
                totalscore = totalscore - 1;
                Q2State = 0;
            }
            summary.textContent = "คุณได้คะแนนรวม: "+totalscore+" คะแนน";
            summary.style.color = 'red';
        }
    } else {
        // Nothing
    }

}

function feedbackAnswer(QuestionState) {
    if(QuestionState==1){
        alert("ยินดีด้วย คุณตอบข้อนี้ถูก :)");
    }else{
        alert("เสียใจด้วย คุณตอบข้อนี้ผิด!!");
    }
}