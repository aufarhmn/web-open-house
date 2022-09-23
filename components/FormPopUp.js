export const FormPopUp = (props) => {
  const show = props.showPopUp;
  const isError = props.submitError;

  //TODO : Responsive, Design (Icons + Layout), Scroll Lock, Message Text(?)

  if (show) {
    return (
      <div className="h-screen bg-slate-900 z-10 fixed top-0 w-full left-0 bg-opacity-80 flex justify-center items-center">
        <div className="w-[40%] bg-white text-xl rounded overflow-hidden">
          <div className="bg-blue-500 py-2 w-full flex justify-end pr-5 text-white">
            <div
              onClick={() => {
                props.closePopUp();
              }}
              className="cursor-pointer"
            >
              X
            </div>
          </div>
          <p className="px-10 py-5">
            {
              isError
              ? "Data Anda gagal dikirimkan. Silahkan coba lagi!"
              : "Data Anda berhasil dikirimkan, Terima Kasih!"
            }
          </p>
        </div>
      </div>
    );
  }
};
