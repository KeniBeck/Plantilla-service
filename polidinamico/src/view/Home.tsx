import LoginFrom from "../components/LoginFrom";

const Home = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('https://www.politecnicojic.edu.co/images/fotos/2016/en-el-poli-mis-residuos-son-mi-responsabilidad.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="relative z-10">
        <LoginFrom />
      </div>
    </div>
  );
};
export default Home;