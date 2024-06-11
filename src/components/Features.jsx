const Data = [
  {
    title: "Real Maps Can Be Offline",
    des: "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
    img: "../../map.svg",
  },
  {
    title: "Set An Adventure Schedule",
    des: "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    img: "../../calendar.svg",
  },
  {
    title: "Technology Using Augment Reality",
    des: "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
    img: "../../tech.svg",
  },
  {
    title: "Many New Locations Every Month",
    des: "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
    img: "../../location.svg",
  },
];

function Features() {
  return (
    <div className="bg-[url('../../feature-bg.png')] bg-cover bg-no-repeat mr-16 mt-16  ">
      <div className="grid lg:grid-cols-2">
        <div className="w-fit rotate-[15deg] hidden lg:block ">
          <img src="../../phone.png" alt="phone img" className="mt-32 " />
        </div>
        <div className="p-10 lg:p-0 mx-auto ">
          <div className=" mb-10 ">
            <img
              src="../../camp.svg"
              alt="camp svg"
              className="relative top-10"
            />
            <h2 className="text-[65px] font-bold">Our Features</h2>
          </div>
          <div className="grid  md:grid-cols-2 gap-16">
            {Data.map((el, i) => (
              <Card el={el} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

function Card({ el }) {
  return (
    <div>
      <div className="p-7 rounded-full bg-green-600 w-fit ">
        <img src={el.img} alt="Map SVG" className=" block" />
      </div>
      <h3 className="font-bold text-3xl mt-4">{el.title}</h3>
      <p className=" text-gray-500 mt-10">{el.des}</p>
    </div>
  );
}
