import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div
        className="flex justify-center  bg-violet-500 text-white"
        style={{ marginTop: "100px" }}
      >
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Mercado Delas | &copy;</p>
          <p className="text-lg">Acesse nossas Redes Sociais:</p>
          <div className="flex gap-1">
            <LinkedinLogo size={36} weight="bold" />
            <InstagramLogo size={36} weight="bold" />
            <FacebookLogo size={36} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
