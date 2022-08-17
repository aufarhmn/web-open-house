import { useState } from "react";
import SubEventModal from "./SubEventModal";


//TODO: button hover, font size, modal data
const SubEvents = () => {
  const buttonStyle = "bg-white rounded-[10px] p-[10px] hover:bg-slate-100 cursor-pointer";

  const [selectedSubEv, setSelectedSubEv] = useState("");

  const openModal = (SubEvTitle) => {
    setSelectedSubEv(SubEvTitle);
    const modal = document.querySelector("#sub-event-modal");
    modal.classList.remove("hidden")
  }

  return(
    <div className="flex bg-green-100 flex-col font-Josefin p-[80px] justify-between font-[700] md:flex-row">
      {/* left div */}
      <div className="text-green-200">
        <h1 className="text-[36px] max-w-[290px] mb-[30px]">What does our event offer?</h1>
      </div>
      {/* right div */}
      <div className="text-[25px] w-full grid gap-[40px] md:w-1/2">
        <div className={buttonStyle} onClick={() => {openModal("TETI Fair")}}>TETI Fair</div>
        <div className={buttonStyle} onClick={() => {openModal("TETI Class")}}>TETI Class</div>
        <div className={buttonStyle} onClick={() => {openModal("TETI Course")}}>TETI Course</div>
        <div className={buttonStyle} onClick={() => {openModal("TETI Talk")}}>TETI Talk</div>
        <SubEventModal title={selectedSubEv} />
      </div>
    </div>
  )
}

export default SubEvents;