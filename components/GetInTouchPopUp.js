import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";

export const GetInTouchPopUp = (props) => {
  const show = props.getInTouchPopUpShowPopUp;
  const isError = props.getInTouchPopUpSubmitError;

  //TODO : Responsive, Design (Icons + Layout), Scroll Lock, Message Text(?)

  if (show) {
    return (
      <div className="h-screen bg-slate-900 z-[1000] fixed top-0 w-full left-0 bg-opacity-80 flex justify-center items-center">
        <div className="w-full mx-[5%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-white text-xl rounded overflow-hidden">
          <div className="bg-blue-500 py-2 w-full flex justify-end pr-5 text-white">
            <div
              onClick={() => {
                props.getInTouchPopUpClosePopUp();
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
            <p className="px-10 py-5" data-aos="fade-up" data-aos-delay="100">
              {isError
                ? "Registrasi Anda Gagal! Silahkan coba lagi!"
                : "Pesan Anda berhasil dikirimkan!"}
            </p>
            {isError ? null : (
              <>
                <p className="px-10" data-aos="fade-up" data-aos-delay="150">Silahkan tunggu balasan dari kami!</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};
