import resumePDF from "../assets/SawyerMcKenneyResume.pdf";

const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height for vertical centering
        paddingTop: "80px", // Adjust if there's a fixed navbar
        boxSizing: "border-box",
      }}
    >
      <iframe
        src={resumePDF}
        title="Sawyer McKenney Resume"
        style={{
          width: "80%",
          height: "calc(100vh - 160px)", // Dynamically adjust to viewport
          border: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
        }}
      />
    </div>
  );
};

export default Resume;