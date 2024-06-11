import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function View() {
  return (
    <div className="  bg-[url('../../pattern-bg.png')]  bg-no-repeat  pt-20 bg-cover bg-left w-full">
      <div className="view container mx-auto flex justify-between gap-11 lg:items-center">
        <ViewText />
        <ViewImg />
      </div>
    </div>
  );
}

function ViewText() {
  return (
    <div className="lg:w-[50%]">
      <img src="../../camp.svg" alt="camp svg" className="" />
      <h1 className="text-8xl font-bold ">Putuk Truno Camp Area</h1>
      <p className="text-gray-500 mt-10 text-lg">
        We want to be on each of your journeys seeking the satisfaction of
        seeing the incorruptible beauty of nature. We can help you on an
        adventure around the world in just one app
      </p>
      <div className="rate flex gap-5 mt-14">
        <div className="stars text-yellow-400  flex gap-3">
          <img src="../../star.svg" alt="star svg" />
          <img src="../../star.svg" alt="star svg" />
          <img src="../../star.svg" alt="star svg" />
          <img src="../../star.svg" alt="star svg" />
          <img src="../../star.svg" alt="star svg" />
        </div>
        <div>
          <span className="font-medium text-lg ml-8">198k</span>
          <span className="text-lg"> Excellent Reviews</span>
        </div>
      </div>
      <div className="flex items-center justify-start gap-10 mt-10 flex-col sm:flex-row">
        <button className="bg-green-600 text-white  rounded-full p-5 px-6 font-bold text-lg w-full sm:w-fit">
          Download App
        </button>
        <div className="flex items-center gap-4">
          <img
            src="../../play.svg"
            alt="play video"
            className="cursor-pointer"
          />
          <p className="font-semibold text-lg">How we work?</p>
        </div>
      </div>
    </div>
  );
}

function ViewImg() {
  return (
    <div className="box bg-stone-800 text-white rounded-3xl  w-[280px]  p-7 ">
      <div className="flex item-center justify-between">
        <p className="text-gray-400">Location</p>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <h1 className="text-xl font-semibold mb-5">Aguas Calientes</h1>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-gray-400">Distance</span>
          <p className="text-xl font-semibold mb-5">173.28 mi</p>
        </div>
        <div>
          <span className="text-gray-400">Elevation</span>
          <p className="text-xl font-semibold mb-5">2.040 km</p>
        </div>
      </div>
    </div>
  );
}
