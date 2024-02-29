
export default function Contato() {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div
          className="absolute inset-0 bg-gray-300"
          style={{ height: "770px" }}
        >
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3751580533863!2d-34.87365837424624!3d-8.063161680571492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a48ed72541%3A0xf5636ba795e00cd4!2sPraça%20Barão%20do%20Rio%20Branco%20-%20Recife%2C%20PE%2C%2050020-360!5e0!3m2!1spt-BR!2sbr!4v1708446125622!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-2xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Fale conosco!
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Gostaríamos de ouvir sua opinião sobre sua experiência de compra.
              Por favor, deixe seu feedback aqui.
            </p>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-700 rounded-full text-lg">
              Enviar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
