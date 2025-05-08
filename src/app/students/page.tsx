// app/students/page.tsx
import { fetchStudents } from "../../../lib/fetchStudents";
import StudentClientWrapper from "../../components/StudentClientWrapper";

export default async function Page() {
  const students = await fetchStudents();
  const classList = Array.from(new Set(students.map((s) => s.Class)));

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Records</h1>
      <StudentClientWrapper students={students} classList={classList} />
    </main>
  );
}
