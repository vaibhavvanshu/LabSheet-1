// StudentCard.js
import React from "react";

function StudentCard({ name, department, marks }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid black",
    padding: "15px",
    margin: "10px auto",
    width: "250px",
    borderRadius: "10px"
  }
};

export default StudentCard;
