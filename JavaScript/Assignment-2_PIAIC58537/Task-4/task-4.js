var comp = prompt("Enter Marks of Computer Subject b/t 0-100");
var eng = prompt("Enter Marks of English Subject b/t 0-100");
var math = prompt("Enter Marks of Math Subject b/t 0-100");
var total_obtain_marks = parseInt(comp) + parseInt(eng) + parseInt(math); 
var total_marks = 300;
var percentage = (total_obtain_marks/total_marks) * 100 ;
var grade;
var remarks;

if(percentage >= 80 ) {
    grade = "A-noe";
    remarks = "Excellent";
}else if( percentage >= 70){
    grade = "A";
    remarks = "Good"
}else if(percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}else{
    grade = "Fail";
    remarks = "Sorry";
}

document.write(
    "<h1>Marks Sheet</h1></br></br><h3><p>Total Marks: " +`${total_marks}`+"</h3>"+
    "<h3>Marks obtained: " +`${total_obtain_marks}`+"</h3>"+
    "<h3>Percentage: " +`${percentage}`+"%</h3>"+
    "<h3>Grade: " +`${grade}`+"</h3>"+
    "<h3>Remarks: " +`${remarks}`+"</h3></p>"
);