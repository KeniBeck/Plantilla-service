import RegisterStudent from "@/components/RegisterStudent";

const Register = () => {
  return (
    <>
      <div className="relative h-full w-full flex justify-center items-center">
        <div className="absolute inset-0 bg-[url('https://www.politecnicojic.edu.co/images/fotos/2022/centro-regional-uraba-recibe-visita-de-pares-academicos-verificacion-condiciones-institucionales.jpg')] bg-cover bg-center opacity-60"></div>
        <div className="relative z-10">
          <RegisterStudent />
        </div>
      </div>
    </>
  );
};
export default Register;
