let students = [
    {
        name : "Go",
        score : 56
    },
    {
        name : "Bo",
        score : 78
    },
    {
        name : "To",
        score : 23
    },
    {
        name : "Mo",
        score : 99
    },
    {
        name : "No",
        score : 40
    },
];

function filterPassStudents(minScore) {
    console.log(`Score to pass ${minScore}`)

    students.forEach(student => {
        if(student.score >= minScore){
            console.log(`Student Name : ${student.name} pass with score ${student.score}`)
        }
    })
}


filterPassStudents(50);