
(function(){
    function question(question,answers,correct){
        this.question=question;
        this.answers=answers;
        this.correct=correct;
    }
    question.prototype.displayQuestion= function(){
        console.log(this.question);
    
      for(var i=0; i<this.answers.length;i++)
    console.log(i+':'+this.answers[i]);  
    }
    
    question.prototype.chechans=
    function(ans){
        if(ans===this.correct)
        console.log('Correct answer');
        else
        console.log('Wrong answer((');
        
        
    }
    
    var q1=new question('Most popular programming languages?',['Python','JavaScript'],0);
    var q2=new question('2+2',['(5)','(4)'],1);
    var q3=new question('4+51',['(50)','(55)'],1);
    var questions=[q1,q2,q3];
    var n=Math.floor(Math.random()*questions.length);
    
    questions[n].displayQuestion();
    var answer=parseInt(prompt('Please select correct answer'));
    questions[n].chechans(answer);

})();
