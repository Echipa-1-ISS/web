export const ApiEndpoints = {
  login: "/Users/login",
  userProfile: "/UserProfile",
  courses: {
    getSemestersAndSpecializations: "/Courses/semestersAndSpecializations",
    addOptionalCourse: "/Courses/addOptional",
    getCourses: "/Courses/getCourses",
    getOptionalCourses: "/Courses/getOptionalCourses",
    approveCourse: "/Courses/approveCourse",
  },
  contract: {
    base: "/Contract",
  },
  grades: {
    getTeacherGrades: "/Grades/getTeacherGrades",
    getStudentGrades: "/Grades/getStudentGrades",
    updateGrade: "/Grades",
  },
};
