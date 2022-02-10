import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import "./dist/styles.css";
import { useUser } from "../../context/CreateUser/index";
import { schema } from "../../interfaces/user.yup";

export function Home() {
  const { CreateUser } = useUser();
  const { register, handleSubmit } = useForm();

  async function submitUser(data: any) {
    schema.isValid(data).then(async (response) => {
      if (response) {
        const newUser = {
          name: data.name,
          email: data.email,
          password: data.password,
          id: uuidv4(),
        };
        const user = await CreateUser(newUser);
        const { id } = user.data;
        toast.success("Sucesso no login 😍");
        if (user.status >= 200 && user.status <= 299)
          localStorage.setItem("user", id);
      } else toast.error("Todos os campos são nescesarios");
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitUser)}>
        <input type="text" {...register("name")} />
        <input type="email" {...register("email")} />
        <input type="text" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
