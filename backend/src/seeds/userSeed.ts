import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data: Prisma.UserCreateInput) => {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
    },
  });

  return user;
};

export const showUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const updateUser = async (data: Prisma.UserUpdateInput, id: number) => {
  const user = await prisma.user.update({
    where: { id: id },
    data: {
      username: data.username,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
    },
  });

  return user;
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: { id: id },
  });

  return user;
};
