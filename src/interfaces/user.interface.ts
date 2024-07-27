type User ={
    createdAt: string;
    email: string;
    id: string;
    password: string;
    profileImage: string;
    role: string;
    status: string;
    updatedAt: string;
    _id: string;
  }
  
  type Name = {
    f_name: string;
    m_name: string;
    l_name: string;
  }
  
  export type Single_User_Type = {
    department: string;
    fullName: string;
    studentId?:string,
    teacherId?:string,
    _id: string;
    name: Name;
    user: User;
  }
  