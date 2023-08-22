import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { useState } from "react";
import Layout from "~/components/layout";
import { getUser, login, register } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return (await getUser(request)) ? redirect("/") : null;
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
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
            Login
          </h2>
          <div></div>
          <form className="p-6 w-96" method="post">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg p-2 my-2"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
            ></input>
            <label htmlFor="senha" className="text-white">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="w-full rounded-lg p-2 my-2"
              value={formData.senha}
              onChange={(e) => handleInputChange(e, "senha")}
            ></input>

            <button
              type="submit"
              className="p-2 bg-gray-400 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1"
            >
              entrar
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
  email = email as string;
  senha = senha as string;

  const resp = await login({ email, senha });
  console.log(resp);
  return resp;
};
