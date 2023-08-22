import { prisma } from "./prisma.server";
import { RegisterForm } from "./types.server";
import bcrypt from "bcryptjs";

export const createUser = async (user: RegisterForm) => {
  const senha = user.senha as string;
  const email = user.email as string;
  const nome = user.nome as string;
  const descricao = user.descricao as string;
  const imagem = user.imagem as string;

  const passwordHash = await bcrypt.hash(senha, 10);
  const newUser = await prisma.user.create({
    data: {
      email: email,
      senha: passwordHash,
      pessoa: {
        nome: nome,
        descricao: descricao,
        imagem: imagem,
      },
    },
  });
  return { id: newUser.id, email: user.email };
};
