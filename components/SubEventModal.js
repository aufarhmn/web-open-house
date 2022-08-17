import { AiFillCloseCircle } from "react-icons/ai";

//TODO: design, responsiveness
const SubEventModal = (props) => {

  const closeModal = () => {
    const modal = document.querySelector("#sub-event-modal");
    modal.classList.add("hidden")
  }

  return (
    <div
      id="sub-event-modal"
      className="hidden fixed w-full h-full bg-slate-900 bg-opacity-40 top-0 left-0 flex justify-center items-center"
    >
      <div className="bg-white w-[60%] relative p-10">
        <h1>{props.title}</h1>
        <p className="font-normal text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
          dolor sit amet consectetur adipiscing elit duis tristique
          sollicitudin. A scelerisque purus semper eget duis at tellus at. Et
          molestie ac feugiat sed lectus. Morbi quis commodo odio aenean. Amet
          est placerat in egestas erat.
        </p>
        <div onClick={() => {closeModal()}} className="absolute top-0 right-0 p-[15px] cursor-pointer">
          <AiFillCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default SubEventModal;
