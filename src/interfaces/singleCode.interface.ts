export type Code_Author_Type = {
    name: {
        f_name: string;
        m_name: string;
        l_name: string;
    };
    _id: string;
    user: string;
    email: string;
    studentId?: string;
    teacherId?:string;
    department: string;
    skills: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
    fullName:string;
};

export type Single_Code_Type = {
    _id: string;
    title: string;
    courseCode: string;
    language: string;
    code: string;
    isStar: boolean;
    author: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
};

export type Single_Code_Type_Res = {
    success: boolean;
    message: string;
    data: {
        code: Single_Code_Type,
        author: Code_Author_Type
    };
}
