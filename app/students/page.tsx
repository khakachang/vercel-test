type Student = {
  name: string;
  rollno: string;
};

export default async function Students() {
  const studentRes = await fetch(
    "https://backend-test2-production.up.railway.app/students",
    { cache: "no-store" }
  );

  const students: Student[] = await studentRes.json();

  return (
    <>
      <h1 className="text-center text-4xl p-4 font-bold">
        Students Page
      </h1>

      <ul className="p-4">
        {students.map((student) => (
          <li key={student.rollno} className="mb-2">
            <strong>{student.name}</strong> — {student.rollno}
          </li>
        ))}
      </ul>
    </>
  );
}
