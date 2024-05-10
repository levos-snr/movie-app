import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "alice",
      email: "alice@gmail.com",
      password: "password1",
      avatar:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
  });
  const users = await prisma.user.findMany();
  console.log(users);
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
