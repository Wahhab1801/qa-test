// server.js
import app from "./api/expressApp.js";

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Local server running on port ${port}`));
