const topStudent = require('./students')
const studentList = require('./data')

describe("test if Ivan has the max score", () => {

    it('if there is a student name Ivan', () => {
        expect(studentList[0].name).toEqual(topStudent.name)
    });
    it('if there is a student name Ivan', () => {
        expect(studentList[1].name).toEqual(topStudent.name)
    });
})

describe("test if Ivan has the max score", () => {
    it('if there is a student name Ivan has max score', () => {
        expect(studentList[0].score).toEqual(topStudent.score)
    });
    it('if there is a student name Ivan has max score', () => {
        expect(studentList[1].score).toEqual(topStudent.score)
    });
})