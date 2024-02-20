import Footer from "../../componentes/footter/Footer";
import Navbar from "../../componentes/navbar/Navbar";

export default function Sobre() {
  return (
    <div>
      <Navbar />

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Nuxt development is carried out by passionate developers
              </h2>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>

          <hr className="my-10" />
          <div style={{ textAlign: "center", fontSize: "30px" }}>
            <h1>
              <strong>Desenvolvedores</strong>
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "80px",
            }}
          >
            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                style={{ marginRight: "15px" }}
                className="w-20 h-20 rounded-full"
                src="https://avatars.githubusercontent.com/u/88053580?v=4"
                alt="Rounded avatar"
              />
              <h1 style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>Cintia dos Santos Silva</strong>
                  <a
                    style={{ color: "#8b5cf6" }}
                    href="https://github.com/CintiaSilva7300"
                  >
                    Desenvolvedor junior
                  </a>
                </div>
              </h1>
            </div>

            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                style={{ marginRight: "15px" }}
                className="w-20 h-20 rounded-full"
                src="https://avatars.githubusercontent.com/u/105079707?v=4"
                alt="Rounded avatar"
              />
              <h1 style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>Tais Arantes</strong>
                  <a
                    style={{ color: "#8b5cf6" }}
                    href="https://github.com/taisarantes"
                  >
                    Desenvolvedor junior
                  </a>
                </div>
              </h1>
            </div>

            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                style={{ marginRight: "15px" }}
                className="w-20 h-20 rounded-full"
                src="https://avatars.githubusercontent.com/u/142460165?v=4"
                alt="Rounded avatar"
              />
              <h1 style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>Amanda Cruz</strong>
                  <a
                    style={{ color: "#8b5cf6" }}
                    href="https://github.com/amandinhacruz"
                  >
                    Desenvolvedor junior
                  </a>
                </div>
              </h1>
            </div>

            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                style={{ marginRight: "15px" }}
                className="w-20 h-20 rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQEYOR-FknD2YA/profile-displayphoto-shrink_800_800/0/1705435947695?e=1714003200&v=beta&t=oElWpk3uaTED8nkSIPwTrL4oyV2lFxZfrWz6K6iRafA"
                alt="Rounded avatar"
              />
              <h1 style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>Gabriel Macedo</strong>
                  <a
                    style={{ color: "#8b5cf6" }}
                    href="https://github.com/gabrielqms"
                  >
                    Desenvolvedor junior
                  </a>
                </div>
              </h1>
            </div>

            <div
              style={{
                padding: "10px",
                marginLeft: "50px",
              }}
            >
              <img
                style={{ marginRight: "15px" }}
                className="w-20 h-20 rounded-full"
                src="https://avatars.githubusercontent.com/u/105571519?v=4"
                alt="Rounded avatar"
              />
              <h1 style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>Igor Cavalcanti Moura</strong>
                  <a
                    style={{ color: "#8b5cf6" }}
                    href="https://github.com/IgorCavalcantiMoura"
                  >
                    Desenvolvedor junior
                  </a>
                </div>
              </h1>
            </div>

            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                style={{ marginRight: "15px" }}
                className="w-20 h-20 rounded-full"
                src="https://avatars.githubusercontent.com/u/151968584?v=4"
                alt="Rounded avatar"
              />
              <h1 style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>Priscilla Barbosa</strong>
                  <a
                    style={{ color: "#8b5cf6" }}
                    href="https://github.com/PriscllaB"
                  >
                    Desenvolvedor junior
                  </a>
                </div>
              </h1>
            </div>

            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                style={{ marginRight: "15px" }}
                className="w-20 h-20 rounded-full"
                src="https://avatars.githubusercontent.com/u/111832995?v=4"
                alt="Rounded avatar"
              />
              <h1 style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>Sâmela T. de Sousa</strong>
                  <a
                    style={{ color: "#8b5cf6" }}
                    href="https://github.com/samelaminoce"
                  >
                    Desenvolvedor junior
                  </a>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
