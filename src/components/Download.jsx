function Download() {
  return (
    <div className="bg-[url('../../pattern.png')] bg-no-repeat bg-cover lg:max-h-[550px] mt-32 grid md:grid-cols-2 lg:w-[95%] mx-auto overflow-hidden  lg:rounded-3xl ">
      <div className="mt-8 p-10">
        <h3 className="text-white font-bold text-6xl mt-10 mb-5">
          Get for free now!
        </h3>
        <p className="text-white text-lg my-16">Available on iOS and Android</p>
        <div className="w-full flex justify-center items-center gap-5 flex-col lg:flex-row">
          <button className="text-lg font-bold bg-white text-green-600 rounded-full  py-4 w-full px-10 flex items-center justify-center gap-2 flex-nowrap text-nowrap">
            <img src="../../apple.svg" alt="apple" />
            App Store
          </button>
          <button className="text-lg font-bold text-white bg-green-600 rounded-full  py-4 w-full px-10 flex items-center justify-center gap-2 flex-nowrap text-nowrap">
            <img src="../../android.svg" alt="apple" />
            Play Store
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img src="../../phones.png" alt="phones" className="w-[70%] mx-auto" />
      </div>
    </div>
  );
}

export default Download;
