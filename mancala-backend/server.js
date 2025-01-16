const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to execute Python script
app.post("/run-script", (req, res) => {
    console.log("Starting Python script execution...");
    exec("python3 main.py", { cwd: "/Users/sawyermckenney/Desktop/ASPENOVA/ASPENOVA-Frontend/src/components" }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution Error: ${error.message}`);
        return res.status(500).json({ error: error.message });
      }
      if (stderr) {
        console.error(`Standard Error Output: ${stderr}`);
        return res.status(500).json({ error: stderr });
      }
      console.log("Execution Successful, Output:", stdout);
      res.json({ output: stdout });
    });
  });

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});