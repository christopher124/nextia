import { NavBar } from "../shared/navbar/NavBar";
import { Footer } from "../shared/footer/Footer";
import Image2 from "../../../assets/Home/Code_Laptop.jpg";

export function HomeView() {
  return (
    <>
      <NavBar fixed />
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center ml-auto mr-auto">
        <div
          className="absolute w-[100%] h-[100%] bg-center bg-cover right-0 mt-56"
          style={
            {
              // backgroundImage: `url(${Image2})`,
            }
          }
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 "
          ></span>
        </div>
        <div className="container header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pr-12">
                <h1 className=" font-semibold text-7xl text-black">
                  <span className="text-[#599d3f]">Nextia</span>{" "}
                  <span className="text-[#235B7C]">solutions</span>
                </h1>
                <p className="mt-4 text-black mr-[78px] text-lg text-center">
                  En Nextia Solutions nos enfocamos a ofrecer soluciones,
                  mediante la aplicación de habilidades para diseñar, planear y
                  desarrollar las mejores opciones que brinden resultados
                  exitosos para su empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          ></svg>
        </div>
      </div>
      <section className=" font-noto mt-48 md:mt-40 pb-40 relative bg-[#508d54]">
        {/* SVG white */}
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-[#447747] fill-current"
              points="0 0 39000 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={Image2}
                  className="w-full align-middle rounded-2xl -mb-44"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <h6 className="text-2xl mb-1 font-semibold text-center">
                Como trabajamos
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-mouse-pointer text-xl"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Evaluación
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-start">
                        Mediante un análisis en sitio, identificamos sus
                        necesidades.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-cogs text-xl"></i>{" "}
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Desarrollo
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-start">
                        Le orientamos a elegir la infraestructura y método de
                        desarrollo adecuado al tamaño, presupuesto y objetivos
                        de su proyecto.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-play text-xl"></i>{" "}
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold ">
                        Ejecución
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-start">
                        Integramos una combinación de habilidades de planeación,
                        programación y diseño para garantizar una aplicación
                        exitosa.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-chart-line text-xl"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Seguimiento
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-start">
                        Proporcionamos los insumos y herramientas necesarias
                        para mantener en estado funcional el proyecto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
