const topStudent = require('./data')
const studentList = require('./students')

describe ('test for is Ivan a topStudent', ()=>{
    it ('if Ivan is topStudent', ()=> {
        expect (topStudent.name).toBe("Ivan")
    });

})
describe ('test for is Ivan Not topStudent', ()=>{
    it ('if Ivan is Not a topStudent', ()=> {
        expect (topStudent.name).toBe("Mariya")
    });
})

// describe("test if Ivan has the max score", () => {

//     it('if there is a student name Ivan', () => {
//         expect(studentList[0].name).toEqual(topStudent.name)
//     });
//     it('if there is a student name Ivan', () => {
//         expect(studentList[1].name).toEqual(topStudent.name)
//     });
// })

// describe("test if Ivan has the max score", () => {
//     it('if there is a student name Ivan has max score', () => {
//         expect(studentList[0].score).toEqual(topStudent.score)
//     });
//     it('if there is a student name Ivan has max score', () => {
//         expect(studentList[1].score).toEqual(topStudent.score)
//     });
// })