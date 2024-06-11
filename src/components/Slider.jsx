import BoxSlider from "./BoxSlider";

function Slider() {
  return (
    <div className="p-4 lg:p-10" style={{ position: "relative" }}>
      <div className="slider w-[100%] overflow-auto  mt-32   ">
        <div className="img-slider ">
          <BoxSlider
            title="Putuk Truno Camp"
            des="Prigen, Pasuruan"
            img="../../img-1.png"
          />
          <BoxSlider
            title="Mountain View Camp"
            des="Somewhere in the Wilderness"
            img="../../img-2.png"
          />
        </div>
      </div>
      <BoxText />
    </div>
  );
}

export default Slider;

function BoxText() {
  return (
    <div className="w-fit max-w-[600px] bg-green-600 text-white  rounded-3xl p-10  lg:absolute bottom-[-100px]  right-32 mx-auto">
      <h1 className="text-[20px] md:text-[50px] font-semibold">
        <span className="font-bold">Feeling Lost</span> And Not Knowing The Way?
      </h1>
      <p className="text-white text-sm md:text-lg mt-8">
        Starting from the anxiety of the climbers when visiting a new climbing
        location, the possibility of getting lost is very large. That's why we
        are here for those of you who want to start an adventure
      </p>
    </div>
  );
}
