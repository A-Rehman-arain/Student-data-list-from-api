// types/student.ts
export interface Student {
  id: string;
  name: string;
  email: string;
  dob: string;
  createdAt: string;
  updatedAt: string;
  Class: string;
  admissiondts: string;
  statusts: string;
}

// export interface Student {
//   id: number;
//   name: string;
//   Class: string;
//   admissiondts: string; // or Date, based on your API
//   status: string;
// }
