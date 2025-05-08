// app/page.tsx
import StudentPage from '../app/students/page';

export default function HomePage() {
    return (
      <div>
          <StudentPage />
      </div>
      // <main className="p-6">
      
      //   <h1 className="text-2xl font-bold">Welcome to the Student Dashboard</h1>
      //   <p className="text-gray-600">Go to /students to view data.</p>
      // </main>
    );
}
  