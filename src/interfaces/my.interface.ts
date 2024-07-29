type User = {
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

type Contact_Type = {
  studentProtal?: string,
  telegram?: string,
  github?: string,
  stackOverflow?: string,
  codeForces?: string,
  phone?: string,
  address?: string
}

export type My_Profile_Data_Type = {
  createdAt: string;
  department: string;
  email: string;
  fullName: string;
  id: string;
  skills: string[];
  studentId?: string;
  teacherId?: string;
  updatedAt: string;
  user: User;
  name: Name;
  _id: string;
  contact?: Contact_Type
}
