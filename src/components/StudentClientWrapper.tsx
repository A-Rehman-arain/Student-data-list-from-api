// components/StudentClientWrapper.tsx
import StudentTable from "@/components/StudentTable";
import { Student } from "../../types/student";

interface Props {
  students: Student[];
  classList: string[];
}

export default function StudentClientWrapper({ students, classList }: Props) {
  return <StudentTable students={students} classList={classList} />;
}

