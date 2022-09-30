import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

export const FormPopUp = (props) => {
  const [linksData, setLinksData] = useState([]);
  const show = props.showPopUp;
  const isError = props.submitError;

  const getLinks = async () => {
    const getInv = await getDocs(collection(db, "links"));
    var data = getInv.docs.map((doc) => doc.data());

    setLinksData(data);
  };

  getLinks();

  //TODO : Responsive, Design (Icons + Layout), Scroll Lock, Message Text(?)

  if (show) {
    return (
      <div className="h-screen bg-slate-900 z-10 fixed top-0 w-full left-0 bg-opacity-80 flex justify-center items-center">
        <div className="w-full mx-[5%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-white text-xl rounded overflow-hidden">
          <div className="bg-blue-500 py-2 w-full flex justify-end pr-5 text-white">
            <div
              onClick={() => {
                props.closePopUp();
              }}
              className="cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="text-center py-5">
            {isError ? (
              <div
                className="flex justify-center text-[100px] text-red-500"
                data-aos="flip-left"
              >
                <IoMdCloseCircle />
              </div>
            ) : (
              <div
                className="flex justify-center text-[100px] text-green-300"
                data-aos="flip-left"
                data-aos-delay="50"
              >
                <FaCheckCircle />
              </div>
            )}
            <p className="px-10 py-5" data-aos="fade-right" data-aos-delay="100">
              {isError
                ? "Registrasi Anda Gagal! Silahkan coba lagi!"
                : "Data Anda berhasil dikirimkan, Terima Kasih!"}
            </p>
            {isError ? null : (
              <>
                <p className="px-10" data-aos="fade-right" data-aos-delay="150">Silahkan bergabung di grup whatsapp ini</p>
                {linksData.map((link, index) => {
                  return (
                    <a className="text-blue-400" href={link.inv} data-aos="fade-right" data-aos-delay="200">
                    {" "}
                    {link.inv}{" "}
                    </a>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};
