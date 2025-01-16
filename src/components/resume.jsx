import React from "react";

const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height for vertical centering
        marginTop: "120px", // Reset margin to align vertically
      }}
    >
      <iframe
        src="src/assets/SawyerMcKenneyResumePDF copy.pdf"
        title="Sawyer McKenney Resume"
        style={{
          width: "80%",
          height: "1100px",
          border: "none",
        }}
      />
    </div>
  );
};

export default Resume;