import FormPersonals from "@/components/FormPersonal";

const Home = () => {
  return (
    <>
      <div className="relative h-full w-full md:h-screen flex justify-center items-center">
        <div className="absolute inset-0 bg-[url('https://www.politecnicojic.edu.co/images/fotos/2022/centro-regional-uraba-recibe-visita-de-pares-academicos-verificacion-condiciones-institucionales.jpg')] bg-cover bg-center opacity-60"></div>
        <div className="relative z-10">
          <FormPersonals />
        </div>
      </div>
    </>
  );
};
export default Home;
