function gradingStudents(grades) {
    const finalGrades = [];
    
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        
        if (grade > 37 && (grade % 5) > 2) {
            finalGrades.push(grade + (5 - (grade % 5)));
        } else {
            finalGrades.push(grade);
        }
    }
    return finalGrades;
}