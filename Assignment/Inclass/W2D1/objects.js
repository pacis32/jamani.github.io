const student1 ={ studentID:"s101",
                 quizAnswers: [3,2,3,4]};

 const student2 ={ studentID:"s201",
                 quizAnswers: [3,2,3,4]};
 const student3 ={ studentID:"s101",
                 quizAnswers: [3,2,3,4]};

/**
 * 
 * @param {property} student 
 * @param {array} key -key array of answers
 * @returns 
 */

function studentScore(student,key){
let numCorrect=0;

for (let i = 0; i < key.length; i++) {
if(key(i)== student.quizAnswers[i]){
    numCorrect=numCorrect+1;
}

    
}
return numCorrect;
    }
    console.log("expect 3",studentScore(studentList,key));
                


    function gradeQuiz(studentList,Key){
        const correctArray=[];
        for(const st of studentList){
            const numCorrect= 
        }
    }