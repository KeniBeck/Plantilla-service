const FormPersonals = () => {
  return (
    <>
      <div className="w-[300px] md:w-[700px]  bg-slate-50 flex flex-col md:flex-row rounded-lg shadow-lg shadow-slate-600">
        <div className="bg-green-600 md:w-[300px] p-4 rounded-l-lg hidden md:block">
          <div className="flex flex-col gap-6">
            <div className="bg-[url('https://www.politecnicojic.edu.co/images/logo/logo.png')] bg-cover bg-center h-[50px] w-full"></div>

            <div className="text-xl font-sans text-white font-bold ">
              BIENVENIDO A POLIDINÁMICO
            </div>
            <div className="text-sm ml-2 text-white">
              Por favor haga click en el boton de su cargo
            </div>
          </div>
        </div>
        <div className="bg-slate-200 w-full md:w-[400px] rounded-r-lg">ss</div>
      </div>
    </>
  );
};
export default FormPersonals;
