function Guide() {
  return (
    <div className="w-[90%] mx-auto mt-32">
      <div className="lg:flex  items-center justify-between gap-12">
        <div>
          <img src="../../camp.svg" alt="camp svg" />
          <p className="text-green-600 text-xl">WE ARE HERE FOR YOU</p>
          <p className="text-[25px] lg:text-[60px] max-w-[500px] font-bold">
            Guide You to Easy Path
          </p>
        </div>
        <p className="text-md text-[#777] max-w-[500px] mt-4">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>
      <div className="relative">
        <img
          src="../../boat.png"
          alt="boat img"
          className="rounded-3xl mt-16"
        />
        <div className=" bg-white p-10 rounded-3xl flex items-center justify-center gap-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl lg:translate-x-0 lg:translate-y-0 lg:top-16 lg:left-16">
          <img src="../../meter.svg" alt="meter svg" />
          <div>
            <div className="flex items-center justify-between gap-16">
              <p className="text-gray-400">Destination</p>
              <p className="text-green-600 font-semibold">48 min</p>
            </div>
            <h3 className="text-lg lg:text-2xl font-bold mb-10">
              Aguas Calientes
            </h3>
            <p className="text-gray-400">Start track</p>
            <h3 className="text-lg lg:text-2xl font-bold">Aguas Calientes</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
