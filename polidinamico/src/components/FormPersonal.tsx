import { GiTeacher } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlinePassword, MdReport } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const FormPersonals = () => {
  const navigate = useNavigate();
  const handleClickStudent = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="w-[300px] md:w-[800px]  bg-slate-50 flex flex-col md:flex-row rounded-lg shadow-lg shadow-slate-600 mt-[10px] mb-3 md:mt-2">
        <div className="bg-green-600 md:w-[400px] p-4 rounded-l-lg hidden md:block">
          <div className="flex flex-col gap-6">
            <div className="bg-[url('https://www.politecnicojic.edu.co/images/logo/logo.png')] bg-cover bg-center h-[50px] w-full"></div>

            <div className="text-xl font-sans text-white font-bold ">
              BIENVENIDO A POLIDINÁMICO
            </div>
            <div className="text-sm  text-white">
              Por favor haga click en el boton de su cargo
            </div>
            <div className=" w-full h-[120px] bg-[url('https://www.politecnicojic.edu.co/images/banners/principal/2024/pilas-ps-matriculate.jpg')] bg-cover bg-center rounded-lg"></div>
          </div>
        </div>
        <div className="bg-slate-200 w-full md:w-full rounded-lg md:rounded-l-none md:rounded-r-lg p-4 flex flex-col gap-2">
          <div className="font-bold text-lg block md:hidden ">
            BIENVENIDO A POLIDINÁMICO
          </div>
          <div className="block md:hidden">
            Por favor haga click en el boton de su cargo
          </div>
          <div className="flex flex-col gap-3 w-full">
            <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg hover:text-black ">
              <div className="text-left m-2 ">
                Inscripción para aspirantes a docentes cátedra
              </div>
              <div className="w-full flex justify-center text-[40px] mb-4">
                <GiTeacher />
              </div>
            </button>
            <div className="flex flex-row gap-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg hover:text-black ">
                <div className="text-left m-2 ">Docentes</div>
                <div className="w-full flex justify-center text-[40px] mb-4">
                  <FaChalkboardTeacher />
                </div>
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg hover:text-black ">
                <div className="text-left m-2 ">Empleados</div>
                <div className="w-full flex justify-center text-[40px] mb-4">
                  <FaPersonDotsFromLine />
                </div>
              </button>
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={handleClickStudent}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg hover:text-black "
              >
                <div className="text-left m-2 ">Estudiantes</div>
                <div className="w-full flex justify-center text-[40px] mb-4">
                  <PiStudentFill />
                </div>
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg hover:text-black ">
                <div className="text-left m-2 ">Recordar clave de acceso</div>
                <div className="w-full flex justify-center text-[40px] mb-4">
                  <MdOutlinePassword />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg hover:text-black ">
                <div className="text-left m-2 ">
                  Solicitud servicios informáticos
                </div>
                <div className="w-full flex justify-center text-[40px] mb-4">
                  <GrDocumentStore />
                </div>
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg hover:text-black ">
                <div className="text-left m-2 ">
                  Solución problemas correo institucional
                </div>
                <div className="w-full flex justify-center text-[40px] mb-4">
                  <MdReport />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormPersonals;
