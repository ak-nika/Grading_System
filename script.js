function calculateGrade() {
  const grade = document.getElementById("gradeInput").value;
  let result = ""; //or var grade;

  if (grade > 100) {
    alert("Enter a value less than 100");
  } else if (grade >= 80) {
    result = "A";
  } else if (grade >= 70) {
    result = "B";
  } else if (grade >= 60) {
    result = "C";
  } else if (grade >= 50) {
    result = "D";
  } else if (grade >= 40) {
    result = "P";
  } else if (grade < 0) {
    alert("Enter a value greater than 0");
  } else {
    result = "F";
  }

  document.getElementById("result").innerText = `${result}`;
}
