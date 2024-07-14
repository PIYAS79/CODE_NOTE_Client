export type Create_Student_Type = {
    user: {
        email: string,
        role: string,
        password: string,
    },
    name: {
        f_name: string,
        m_name?: string,
        l_name: string
    },
    studentId: string,
    department: string
}
export type Create_Faculty_Type = {
    user: {
        email: string,
        role: string,
        password: string,
    },
    name: {
        f_name: string,
        m_name?: string,
        l_name: string
    },
    teacherId: string,
    department: string
}