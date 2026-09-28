import { useState } from "react";

function Registration({ club, onBack }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    department: "",
    year: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData =
      JSON.parse(localStorage.getItem("registeredStudents")) || [];

    const newStudent = {
      id: Date.now(),
      ...formData,
      club: club.name,
      category: club.category
    };

    localStorage.setItem(
      "registeredStudents",
      JSON.stringify([...oldData, newStudent])
    );

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="registration-page">

        <div className="success-card">

          <div className="success-icon">
            ✅
          </div>

          <h1>Registration Successful!</h1>

          <p>You have successfully joined</p>

          <h2>{club.name}</h2>

          <p>
            Welcome to the club, {formData.name}!
          </p>

          <button
            className="join-btn"
            onClick={onBack}
          >
            Back to Club
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="registration-page">

      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back to Club
      </button>

      <div className="registration-card">

        <div className="registration-icon">
          {club.icon}
        </div>

        <span className="category">
          {club.category}
        </span>

        <h1>Join {club.name}</h1>

        <p>Enter your details to register.</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Roll Number</label>

          <input
            type="text"
            name="rollNumber"
            placeholder="Enter roll number"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />

          <label>Department</label>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="IT">IT</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
          </select>

          <label>Year</label>

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>

          <button
            type="submit"
            className="register-btn"
          >
            Register for Club
          </button>

        </form>

      </div>
    </div>
  );
}

export default Registration;