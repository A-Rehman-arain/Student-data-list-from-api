

import { Student } from "../types/student";

const fallbackData: Student[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    dob: "2000-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T12:00:00.000Z",
    updatedAt: "2024-01-02T12:00:00.000Z",
    Class: "10-A",
    admissiondts: "2024-01-01T09:00:00.000Z",
    statusts: "Active",
  },
  // Add more fallback students as needed
];

export const fetchStudents = async (): Promise<Student[]> => {
  try {
    const res = await fetch("https://sms.ilmwasooli.pk/temp/gettestingdata");

    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      console.warn("Warning: Unexpected content-type:", contentType);
    }

    let data;
    try {
      data = await res.json();
    } catch (jsonError) {
      console.error("Failed to parse response as JSON:", jsonError);
      throw new Error("Response was not valid JSON");
    }

    if (data.status === "success" && Array.isArray(data.Data)) {
      return data.Data as Student[];
    } else {
      throw new Error("Unexpected API response structure");
    }
  } catch (error) {
    console.error("Error fetching students:", error);
    console.warn("Using fallback data instead.");
    return fallbackData;
  }
};

