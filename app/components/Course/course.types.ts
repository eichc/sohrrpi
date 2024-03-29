export type CourseProps = {
    name: {
        courseID: string
        courseName: string
        professor: string
    },
    officehours: {
        times: string[]
        room: string[]
        ta: string[]
    }
}