import LoginFrom from "../components/LoginFrom";

const LoginView = () => {
  return (
    <div className="relative h-full md:h-screen w-full flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('https://www.politecnicojic.edu.co/images/fotos/2022/centro-regional-uraba-recibe-visita-de-pares-academicos-verificacion-condiciones-institucionales.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="relative z-10">
        <LoginFrom />
      </div>
    </div>
  );
};
export default LoginView;
