function BoxSlider({ title, des, img }) {
  return (
    <div
      className={`bg-[url('../../img-1.png')] bg-no-repeat bg-cover w-[1100px] h-[550px] rounded-3xl p-10 flex flex-col justify-between items-start`}
    >
      <Logo title={title} des={des} />
      <Imgs />
    </div>
  );
}
function Logo({ title, des }) {
  return (
    <div className="flex gap-6">
      <div className="flex  items-center justify-center p-5 bg-green-500 rounded-full w-fit">
        <img src="../../folded-map.svg" alt="map svg" />
      </div>
      <div>
        <h3 className="text-white text-xl font-semibold ">{title}</h3>
        <p className="text-white ">{des}</p>
      </div>
    </div>
  );
}

function Imgs() {
  return (
    <div className="flex gap-10 items-center ">
      <div className="flex ">
        <img src="../../person-1.png" alt="person img1" />
        <img
          src="../../person-2.png"
          alt="person img2"
          className="ml-[-20px]"
        />
        <img
          src="../../person-3.png"
          alt="person img3"
          className="ml-[-20px]"
        />
        <img
          src="../../person-4.png"
          alt="person img4"
          className="ml-[-20px]"
        />
      </div>
      <h2 className="text-white text-xl font-bold">50+ Joined</h2>
    </div>
  );
}
export default BoxSlider;
