import { FacebookLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Footer from "../../componentes/footter/Footer";
import Navbar from "../../componentes/navbar/Navbar";

export default function Teste() {
  return (
    <div>
      <Navbar />
            <div className="py-16 bg-white">  
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                    <img src="../../assets/img/generation.png" alt="image" width="" height=""/>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Sobre nós</h2>
                    <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                    <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                    </div>
                </div>
            </div>
            </div>
        <div className="container m-auto my-20 flex gap-8">
            <div className="max-h-screen relative bg-white shadow-lg w-60 h-60 border-2 rounded border-violet-500 flex items-center  flex-col hover:bg-violet-700 hover:text-white ">
                        <div className="absolute -top-10">
                            <img className=" h-24 w-24 rounded-full object-cover " src="https://avatars.githubusercontent.com/u/105571519?v=4"  alt=""/>
                        </div>
                        <div className="mt-16 flex items-center flex-col justify-center">
                            <h1 className="font-bold text-xl mt-4  ">Igor Cavalcanti</h1>
                            <p className="font-semibold text-l text-gray-500">Desenvolvedor Jr.</p>
                        </div>
                        <div className=" flex flex-row space-x-4 mt-5">
                            <a href="#"><GithubLogo size={26} /></a>
                        <a href="#"><FacebookLogo size={26} /></a>  
                        <a href="#"><LinkedinLogo size={26} /></a>
                        </div>

                        
                    </div>

                    <div className="max-h-screen relative bg-white shadow-lg w-60 h-60 border-2 rounded border-violet-500 flex items-center  flex-col hover:bg-violet-700 hover:text-white ">
                        <div className="absolute -top-10">
                            <img className=" h-24 w-24 rounded-full object-cover " src="https://avatars.githubusercontent.com/u/88053580?v=4"  alt=""/>
                        </div>
                        <div className="mt-16 flex items-center flex-col justify-center">
                            <h1 className="font-bold text-xl mt-4  ">Cintia dos S. Silva</h1>
                            <p className="font-semibold text-l text-gray-500">Desenvolvedora Jr.</p>
                        </div>
                        <div className=" flex flex-row space-x-4 mt-5">
                            <a href="#"><GithubLogo size={26} /></a>
                        <a href="#"><FacebookLogo size={26} /></a>  
                        <a href="#"><LinkedinLogo size={26} /></a>
                        </div>
                    </div>

                    <div className="max-h-screen relative bg-white shadow-lg w-60 h-60 border-2 rounded border-violet-500 flex items-center  flex-col hover:bg-violet-700 hover:text-white ">
                        <div className="absolute -top-10">
                            <img className=" h-24 w-24 rounded-full object-cover " src="https://avatars.githubusercontent.com/u/105079707?v=4"  alt=""/>
                        </div>
                        <div className="mt-16 flex items-center flex-col justify-center">
                            <h1 className="font-bold text-xl mt-4  ">Tais Arantes</h1>
                            <p className="font-semibold text-l text-gray-500">Desenvolvedora Jr.</p>
                        </div>
                        <div className=" flex flex-row space-x-4 mt-5">
                            <a href="#"><GithubLogo size={26} /></a>
                        <a href="#"><FacebookLogo size={26} /></a>  
                        <a href="#"><LinkedinLogo size={26} /></a>
                        </div>
                    </div>

                    <div className="max-h-screen relative bg-white shadow-lg w-60 h-60 border-2 rounded border-violet-500 flex items-center  flex-col hover:bg-violet-700 hover:text-white ">
                        <div className="absolute -top-10">
                            <img className=" h-24 w-24 rounded-full object-cover " src="https://avatars.githubusercontent.com/u/142460165?v=4"  alt=""/>
                        </div>
                        <div className="mt-16 flex items-center flex-col justify-center">
                            <h1 className="font-bold text-xl mt-4  ">Amanda Cruz</h1>
                            <p className="font-semibold text-l text-gray-500">Desenvolvedora Jr.</p>
                        </div>
                        <div className=" flex flex-row space-x-4 mt-5">
                            <a href="#"><GithubLogo size={26} /></a>
                        <a href="#"><FacebookLogo size={26} /></a>  
                        <a href="#"><LinkedinLogo size={26} /></a>
                        </div>
                    </div>

                    <div className="max-h-screen relative bg-white shadow-lg w-60 h-60 border-2 rounded border-violet-500 flex items-center  flex-col hover:bg-violet-700 hover:text-white ">
                        <div className="absolute -top-10">
                            <img className=" h-24 w-24 rounded-full object-cover " src="https://media.licdn.com/dms/image/D4D03AQEYOR-FknD2YA/profile-displayphoto-shrink_800_800/0/1705435947695?e=1714003200&v=beta&t=oElWpk3uaTED8nkSIPwTrL4oyV2lFxZfrWz6K6iRafA"  alt=""/>
                        </div>
                        <div className="mt-16 flex items-center flex-col justify-center">
                            <h1 className="font-bold text-xl mt-4  ">Gabriel Macedo</h1>
                            <p className="font-semibold text-l text-gray-500">Desenvolvedor Jr.</p>
                        </div>
                        <div className=" flex flex-row space-x-4 mt-5">
                            <a href="#"><GithubLogo size={26} /></a>
                        <a href="#"><FacebookLogo size={26} /></a>  
                        <a href="#"><LinkedinLogo size={26} /></a>
                        </div>
                    </div>

                    <div className="max-h-screen relative bg-white shadow-lg w-60 h-60 border-2 rounded border-violet-500 flex items-center  flex-col hover:bg-violet-700 hover:text-white ">
                        <div className="absolute -top-10">
                            <img className=" h-24 w-24 rounded-full object-cover " src="https://avatars.githubusercontent.com/u/151968584?v=4"  alt=""/>
                        </div>
                        <div className="mt-16 flex items-center flex-col justify-center">
                            <h1 className="font-bold text-xl mt-4  ">Priscilla Barbosa</h1>
                            <p className="font-semibold text-l text-gray-500">Desenvolvedora Jr.</p>
                        </div>
                        <div className=" flex flex-row space-x-4 mt-5">
                            <a href="#"><GithubLogo size={26} /></a>
                        <a href="#"><FacebookLogo size={26} /></a>  
                        <a href="#"><LinkedinLogo size={26} /></a>
                        </div>
                    </div>

                    <div className="max-h-screen relative bg-white shadow-lg w-60 h-60 border-2 rounded border-violet-500 flex items-center  flex-col hover:bg-violet-700 hover:text-white ">
                        <div className="absolute -top-10">
                            <img className=" h-24 w-24 rounded-full object-cover " src="https://avatars.githubusercontent.com/u/111832995?v=4"  alt=""/>
                        </div>
                        <div className="mt-16 flex items-center flex-col justify-center">
                            <h1 className="font-bold text-xl mt-4  ">Sâmela de Sousa</h1>
                            <p className="font-semibold text-l text-gray-500">Desenvolvedora Jr.</p>
                        </div>
                        <div className=" flex flex-row space-x-4 mt-5">
                            <a href="#"><GithubLogo size={26} /></a>
                        <a href="#"><FacebookLogo size={26} /></a>  
                        <a href="#"><LinkedinLogo size={26} /></a>
                        </div>
                    </div>
        </div>
      <Footer />
    </div>
  );
}
