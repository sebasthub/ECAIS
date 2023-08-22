import { ActionFunction, LoaderFunction, json } from "@remix-run/node";
import { useState } from "react";
import Layout from "~/components/layout";
import { login, register, requireUserId } from "~/utils/auth.server";
import { RegisterForm } from "~/utils/types.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);

  return null;
};

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    nome: "",
    imagem: "",
    descricao: "",
  });

  // Updates the form data when an input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <Layout data={false}>
      <div className="flex flex-row justify-center items-center h-screen w-full gap-y-4 bg-gray-900">
        <div className="bg-gray-700 rounded-xl">
          <h2 className="font-mono text-4xl text-white text-center mt-2">
            Cadastre-se
          </h2>
          {formData.email}
          <div></div>
          <form
            className="p-6 w-96"
            method="post"
            id="registro"
            action="/register"
          >
            <fieldset>
              <label htmlFor="email" className="text-white">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg p-2 my-2"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                />
              </label>
              <label htmlFor="senha" className="text-white">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                className="w-full rounded-lg p-2 my-2"
                value={formData.senha}
                required
                name="senha"
                onChange={(e) => handleInputChange(e, "senha")}
              />

              <label htmlFor="nome" className="text-white">
                Nome
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full rounded-lg p-2 my-2"
                  value={formData.nome}
                  onChange={(e) => handleInputChange(e, "nome")}
                />
              </label>

              <label htmlFor="imagem" className="text-white">
                Imagem
                <input
                  type="text"
                  id="imagem"
                  name="imagem"
                  className="w-full rounded-lg p-2 my-2"
                  value={formData.imagem}
                  onChange={(e) => handleInputChange(e, "imagem")}
                />
              </label>

              <label htmlFor="descricao" className="text-white">
                Descricao
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  className="w-full rounded-lg p-2 my-2"
                  value={formData.descricao}
                  onChange={(e) => handleInputChange(e, "descricao")}
                />
              </label>
            </fieldset>
            <button
              type="submit"
              className="p-2 bg-gray-400 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1"
              form="registro"
              value="Submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  let email = form.get("email");
  let senha = form.get("senha");
  let nome = form.get("nome");
  let descricao = form.get("descricao");
  let imagem = form.get("imagem");

  email = email as string;
  senha = senha as string;
  nome = nome as string;
  descricao = descricao as string;
  imagem = imagem as string;

  const formData: RegisterForm = {
    email: email,
    senha: senha,
    nome: nome,
    descricao: descricao,
    imagem: imagem,
  };
  const resp = await register(formData);
  console.log(resp);
  return resp;
};
