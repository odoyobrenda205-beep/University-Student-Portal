
let studentName = "John Mwangi";
let registrationNumber = "COM/B/01-23457";
let academicProgramme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);

   
function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60 && score <= 69) {
            return "B";
    } else if (score >= 50 && score <= 59) {
        return "C";
    } else if (score >= 40 && score <= 49) {
        return "D";
    } else if (score < 40 && score >= 0) {
        return "E";
    } else {
        return "Invalid Score"; 
    }
}

let testGrade = calculateGrade(75);


alert("The grade for a score of 75 is: " + testGrade);


const registrationForm = document.getElementById('studentRegistrationForm');


registrationForm.addEventListener('submit', function(event) {
    
    event.preventDefault(); 
    
    
    const studentName = document.getElementById('studentName').value;
    const regNumber = document.getElementById('regNumber').value;
    
    
    const displayArea = document.getElementById('displayArea');
     
    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML 
    = <p><strong>Name:</strong>
     ${studentName}</p>
     <p><strong>Reg No:</strong> ${regNumber}</p>;
    

    const successAlert = document.getElementById('successMessage');
    successAlert.textContent = "Form submitted successfully!";
    successAlert.style.display = "block"; 
});

function validateStudentForm(studentName, regNumber, studentEmail) {
    

    if (studentName.trim() === "" || regNumber.trim() === "") {
        console.log("Validation Failed: Full Name and Registration Number cannot be empty!");
        return false; 
    }
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(studentEmail)) {
        console.log("Validation Failed: Invalid email format!");
        return false;
    }
    
    console.log("Validation Passed: All inputs are valid.");
    return true;
}



console.log("--- RUNNING TEST CASES ---");


console.log("\n[Test 1] Testing with empty fields...");
validateStudentForm("", "COM/B/01-7678", "test@gmail.com"); 


console.log("\n[Test 2] Testing with an invalid email address...");
validateStudentForm("John Mwangi", "COM/B/01-7578", "mwangijohn_at_gmail.com");


console.log("\n[Test 3] Testing with correct, complete information...");
validateStudentForm("John Mwangi", "COM/B/01-5576/2025", "mwangijohn@gmail.com");
