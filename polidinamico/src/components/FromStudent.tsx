import { FaListCheck } from "react-icons/fa6";
import { GiJourney } from "react-icons/gi";
import { BsDatabaseFillExclamation } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";

const FromStudent = () => {
  return (
    <>
      <div className="w-[300px] md:w-[800px] bg-slate-50 md:flex-row rounded-lg shadow-lg shadow-slate-600 mt-[10px] mb-3 md:mt-2">
        <div className="w-full flex items-center flex-col rounded-lg">
          <img
            className="h-[80px] rounded-lg"
            src="https://www2.politecnicojic.edu.co/polidinamico/img/cabezote.jpg"
            alt="poli"
          />
          <div className=" w-full flex flex-col justify-start items-start">
            <div className="font-bold w-full p-2 bg-slate-200 text-[20px]">
              Menu principal estudiantes
            </div>
            <div className="w-full p-2 bg-slate-200 rounded-b">
              Seleciona la opcion de preferencia
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex flex-row gap-2 p-2">
            <button
              className="w-full bg-green-600 p-2 rounded-lg flex flex-col justify-center items-center hover:text-white"
            >
              <FaListCheck className="text-[40px]" />
              Calificaciones
            </button>
            <button
              className="w-full bg-green-600 p-2 rounded-lg flex flex-col justify-center items-center hover:text-white"
            >
              <GiJourney className="text-[40px]" />
              Asesorias movilidad (citas)
            </button>
          </div>
          <div className="flex flex-row gap-3 p-2">
            <button
              className="w-full bg-green-600 p-2 rounded-lg flex flex-col justify-center items-center hover:text-white"
            >
              <BsDatabaseFillExclamation className="text-[40px]" />
              Datos personales
            </button>
            <button
              className="w-full bg-green-600 p-2 rounded-lg flex flex-col justify-center items-center hover:text-white"
            >
              <PiCertificateFill className="text-[40px]" />
              Certificados de estudio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FromStudent;
