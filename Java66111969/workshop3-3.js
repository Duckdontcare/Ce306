let students = [
    {
        name : "Go",
        grade : "A"
    },
    {
        name : "To",
        grade : "B"
    },
    {
        name : "Bo",
        grade : "C"
    }
]

students.forEach(function(students, index) {
    console.log(`Student ${index + 1}: ${students.name}, Grade : ${students.grade}`)
});


function showStudentCount() {
    console.log(`Total students: ${[students.length]}`)
}

showStudentCount()

