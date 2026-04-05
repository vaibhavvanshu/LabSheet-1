// App.js
import React from "react";

function StudentProfile() {

  const students = [
    { name: "Rahul Kumar", department: "CSE", year: "3rd", section: "A" },
    { name: "Anjali Sharma", department: "ECE", year: "2nd", section: "B" },
    { name: "Kiran Reddy", department: "ME", year: "4th", section: "C" },
    { name: "Priya Singh", department: "IT", year: "1st", section: "A" },
    { name: "Arjun Verma", department: "EEE", year: "3rd", section: "B" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Profiles</h1>

      {students.map((student, index) => (
        <div style={styles.card} key={index}>
          <h3>{student.name}</h3>
          <p>Department: {student.department}</p>
          <p>Year: {student.year}</p>
          <p>Section: {student.section}</p>
        </div>
      ))}

    </div>
  );
}

const styles = {
  card: {
    border: "1px solid gray",
    padding: "15px",
    margin: "10px auto",
    width: "250px",
    borderRadius: "10px"
  }
};

export default StudentProfile;
