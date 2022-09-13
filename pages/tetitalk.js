import Head from "next/head";
import NavbarSimplified from "../components/NavbarSimplified";

export default function Tetitalk() {
  //TODO: Benefits Section, Speaker Section, Responsiveness, Footer, Navbar
  return (
    <>
      <Head>
        <title>Teti Talk</title>
      </Head>
      <main>
        <NavbarSimplified />
        <h1 className="text-[134px] pl-32 font-Josefin font-bold mt-[130px] text-blue-25">
          TETI Talk
        </h1>

        <div className="flex mt-[240px] px-32 font-Josefin justify-between gap-4">
          <div className="font-bold">
            <h2 className="text-[58.5px] w-max">About TETI</h2>
            <h2 className="text-[72.65px] bg-[#E7FFC1]">Course</h2>
          </div>
          <p className="max-w-[730px] text-[30px] font-light">
            A. Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec
            hendrerit metus enim, quis pretm odio vehicula eget. Aliq quis
            iaclis mi, a laoreet elit. Fus neque dui, vestibulum at consectetur
            eu, mie vel mag. Pellentesque ac ipsum facilisis, pharetra ex non,
            efficitur felis. Aliq quis iaclis mi, a laoreet elit. Fus neque dui,
            vestibulum at consectetur eu, mie vel mag. Pellentesque ac ipsum
            facilisis, pharetra ex non, efficitur felis.
          </p>
        </div>

        <div className="p-32 mt-20">
          <h1 className="text-[58.5px] font-bold font-Josefin">The Benefits</h1>
        </div>
      </main>
    </>
  );
}
