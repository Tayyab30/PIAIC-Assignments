var student_name = ["Michael","John","Tony"];
var student_score = [320,230,480];

for(let i=0; i < student_name.length; i++){
    document.write("<h2>Score of "+`${student_name[i]}`+" is "+`${student_score[i]}.` +" Percentage: "+ ` ${(student_score[i]/500)*100}`+ "%</h2>")
}