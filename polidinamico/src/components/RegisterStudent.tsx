import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "email invalido" }),
  pass: z.string().min(8, {
    message: "la contrase;a debe tenr mas de dos caracteres.",
  }),
  name: z.string().min(2, {
    message: "el nombre debe tener mas de dos caracteres",
  }),
  lastname: z.string().min(2, {
    message: "el apellido debe tener mas de dos caracteres",
  }),
});
const RegisterStudent = () => {
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const handleClickDown = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="flex flex-row lg:w-[900px] w-[300px] bg-slate-50 rounded-lg shadow-lg mt-[10px] mb-[10px]">
        <div className="w-full hidden lg:block">
          <img
            className="rounded-lg w-full h-full"
            src="https://www.politecnicojic.edu.co/images/fotos/2019/convocatoria-bienestar-institucional-centros-regionales.jpg"
            alt="login"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center rounded-lg m-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4  mb-6"
            >
              <div className="font-semibold mt-3 mb-3 text-lg text-center">
                Registrate
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo</FormLabel>
                    <FormControl>
                      <Input placeholder="correo..." {...field} />
                    </FormControl>
                    <FormDescription>
                      Escribe tu correo electronico
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="nombre..." {...field} />
                    </FormControl>
                    <FormDescription>
                      Escribe tu correo electronico
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="apellido..." {...field} />
                    </FormControl>
                    <FormDescription>Escribe tu apellido</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input placeholder="contraseña..." {...field} />
                    </FormControl>
                    <FormDescription>Escribe tu contraseña</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                style={{ marginTop: "1rem" }}
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                type="submit"
              >
                Ingresar
              </Button>
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-[13px]">¿ Ya tienes cuenta?</p>
                <button
                  onClick={handleClickDown}
                  className="text-blue-600 font-semibold text-[14px]"
                >
                  Regresar
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
export default RegisterStudent;
