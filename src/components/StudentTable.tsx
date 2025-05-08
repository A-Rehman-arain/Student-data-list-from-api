

"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import { Student } from "../../types/student";

interface StudentTableProps {
  students: Student[];
  classList: string[];
}

const StudentTable = ({ students, classList }: StudentTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        searchTerm === "" ||
        Object.values(student)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesClass =
        selectedClass === "" || student.Class === selectedClass;

      return matchesSearch && matchesClass;
    });
  }, [students, searchTerm, selectedClass]);

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        Student Records
      </h2>

      {/* Search + Filter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Classes</option>
          {classList.map((cls, index) => (
            <option key={index} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>

      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Class</th>
              <th className="border p-2">Admission Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="border p-2">{student.id}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.Class}</td>
                <td className="border p-2">
                  {format(new Date(student.admissiondts), "yyyy-MM-dd")}
                </td>
                <td className="border p-2">{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <p className="text-center mt-4 text-gray-500">
            No matching students found.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentTable;
