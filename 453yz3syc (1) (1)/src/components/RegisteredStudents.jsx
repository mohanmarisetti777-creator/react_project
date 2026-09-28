import { useEffect, useState } from "react";

function RegisteredStudents({ onBack }) {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("registeredStudents")) || [];

    setStudents(data);
  }, []);

  const deleteStudent = (id) => {

    const updated = students.filter(
      (student) => student.id !== id
    );

    setStudents(updated);

    localStorage.setItem(
      "registeredStudents",
      JSON.stringify(updated)
    );
  };

  const filteredStudents = students.filter((student) => {

    const text = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(text) ||
      student.rollNumber.toLowerCase().includes(text) ||
      student.club.toLowerCase().includes(text)
    );
  });

  return (
    <div className="students-page">

      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back to Clubs
      </button>

      <div className="students-header">

        <div>
          <h1>👥 Registered Students</h1>

          <p>
            Total Students: <strong>{students.length}</strong>
          </p>
        </div>

      </div>

      <div className="student-search">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search by name, roll number or club"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {filteredStudents.length > 0 ? (

        <div className="students-table-container">

          <table>

            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll Number</th>
                <th>Department</th>
                <th>Year</th>
                <th>Club</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredStudents.map((student, index) => (

                <tr key={student.id}>

                  <td>{index + 1}</td>

                  <td>{student.name}</td>

                  <td>{student.email}</td>

                  <td>{student.rollNumber}</td>

                  <td>{student.department}</td>

                  <td>{student.year}</td>

                  <td>
                    <span className="club-tag">
                      {student.club}
                    </span>
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteStudent(student.id)
                      }
                    >
                      Delete
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      ) : (

        <div className="empty-students">

          <div>📋</div>

          <h2>No Registered Students</h2>

          <p>
            Registered students will appear here.
          </p>

        </div>

      )}

    </div>
  );
}

export default RegisteredStudents;