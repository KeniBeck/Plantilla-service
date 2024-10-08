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
  email: z.string().email({ message: "email inavalido" }),
});
const RecoverAcount = () => {
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
      <div className="flex flex-row lg:w-[900px] w-[300px] m-12 bg-slate-50 rounded-lg shadow-lg">
        <div className="w-full hidden lg:block">
          <img
            className="rounded-lg w-full h-full"
            src="https://www.politecnicojic.edu.co/images/fotos/2019/convocatoria-bienestar-institucional-centros-regionales.jpg"
            alt="login"
          />
        </div>
        <div className="w-full  h-full flex flex-col justify-center items-center rounded-lg m-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4  mb-6"
            >
              <div className="font-semibold mt-6 mb-6 text-lg">
                Ingresa tu correo electronico
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email..." {...field} />
                    </FormControl>
                    <FormDescription>
                      Escribe tu correo electronico
                    </FormDescription>
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
export default RecoverAcount;
