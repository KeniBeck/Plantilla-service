import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoArrowBackCircle } from "react-icons/io5";

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
  email: z.string().email({ message: "email inavilido" }),
  pass: z.string().min(2, {
    message: "Please enter a valid email address.",
  }),
});

const LoginFrom = () => {
  const navigate = useNavigate();

  const handleRecoverPass = () => {
    navigate("/Recover");
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
  const handleClickRegister = () => {
    navigate("/register");
  };
  const handleClickDown = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-row lg:w-[900px] w-[300px] m-12 bg-slate-50 rounded-lg shadow-lg shadow-slate-600">
        <div className="w-full hidden lg:block">
          <img
            className="rounded-l-lg w-full h-full"
            src="https://www.politecnicojic.edu.co/images/fotos/2019/convocatoria-bienestar-institucional-centros-regionales.jpg"
            alt="login"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center rounded-lg m-2">
          <div className="flex justify-end w-full text-white ">
            <button
              onClick={handleClickDown}
              className="flex flex-row justify-center items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 p-2 shadow-lg shadow-slate-500"
            >
              <IoArrowBackCircle className="h-[20px] w-[20px]" />
              volver
            </button>
          </div>
          <div className="font-semibold mt-3 mb-3 text-lg">Iniciar Secion</div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pl-4 pr-4 mb-6 w-full "
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
              <div className="mt-6 text-center flex flex-col gap-2">
                <button
                  onClick={handleRecoverPass}
                  className="text-gray-600 text-[13px] hover:text-gray-900"
                >
                  ¿ Olvidaste tu contraseña ?
                </button>
                <button
                  onClick={handleClickRegister}
                  className="text-blue-600 font-semibold text-[14px]"
                >
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
