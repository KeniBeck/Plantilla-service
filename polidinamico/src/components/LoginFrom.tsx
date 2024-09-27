import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  pass: z.string().min(2, {
    message: "Please enter a valid email address.",
  }),
});

const LoginFrom = () => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/registerStudent");
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      pass: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="flex flex-row lg:w-[900px] w-[300px] m-12 bg-slate-50 rounded-lg shadow-lg">
        <div className="w-full hidden lg:block">
          <img
            className="rounded-lg w-full h-full"
            src="https://politecnicojic.edu.co/images/fotos/2023/comunicados.jpg"
            alt="login"
          />
        </div>
        <div className="w-full  h-full flex flex-col justify-center items-center rounded-lg m-2">
          <div className="font-semibold mt-6 mb-6 text-lg">Iniciar Secion</div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4  mb-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
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
                name="pass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input placeholder="contraseña" {...field} />
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
                <p className="text-gray-600 text-[13px]">
                  ¿ No tienes Cuenta ?
                </p>
                <button 
                onClick={handleClickRegister}
                className="text-blue-600 font-semibold text-[14px]">
                  Registrate
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
export default LoginFrom;
