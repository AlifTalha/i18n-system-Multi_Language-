import app from "./src/app.js";
import { prisma } from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await prisma.$connect();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
