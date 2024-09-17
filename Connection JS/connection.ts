// Connects the user to the database must insert the database URL WHERE DO I GET IT FROM?

// connection.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Example query
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// added a message to know if connected to the database
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database');
        return;
    }
    console.log('Connected to the database');
});