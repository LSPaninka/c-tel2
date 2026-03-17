const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const EXEC_TIMEOUT_MS = 30000;

function runScript(scriptName, res) {
  const scriptPath = path.join(__dirname, scriptName);
  exec(`sh ${scriptPath}`, { timeout: EXEC_TIMEOUT_MS }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${scriptName}:`, error.message, stderr);
      return res.status(500).json({ error: 'Error al ejecutar el script' });
    }
    res.json({ output: stdout, stderr });
  });
}

app.get('/script1', (req, res) => {
  runScript('script1.sh', res);
});

app.get('/script2', (req, res) => {
  runScript('script2.sh', res);
});

app.get('/script3', (req, res) => {
  runScript('script3.sh', res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
