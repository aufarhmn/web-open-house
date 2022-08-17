

//TODO: button hover, font size
const SubEvents = () => {
  const buttonStyle = "bg-white rounded-[10px] p-[10px] hover:bg-slate-100 cursor-pointer";

  return(
    <div className="flex bg-green-100 flex-col font-Josefin p-[80px] justify-between font-[700] md:flex-row">
      {/* left div */}
      <div className="text-green-200">
        <h1 className="text-[36px] max-w-[290px] mb-[30px]">What does our event offer?</h1>
      </div>
      {/* right div */}
      <div className="text-[25px] w-full grid gap-[40px] md:w-1/2">
        <div className={buttonStyle}>TETI Fair</div>
        <div className={buttonStyle}>TETI Class</div>
        <div className={buttonStyle}>TETI Course</div>
        <div className={buttonStyle}>TETI Talk</div>
      </div>
    </div>
  )
}

export default SubEvents;