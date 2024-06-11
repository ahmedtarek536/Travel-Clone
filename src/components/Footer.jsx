function Footer() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 w-[85%] mx-auto mt-28">
        <img src="../../hilink-logo.svg" alt="hilink logo" />
        <div>
          <h2 className="text-lg mb-4 font-bold">Learn More</h2>
          <p className="text-gray-500 my-3 cursor-pointer">About Hilink</p>
          <p className="text-gray-500 my-3 cursor-pointer">Press Releases</p>
          <p className="text-gray-500 my-3 cursor-pointer">Environment</p>
          <p className="text-gray-500 my-3 cursor-pointer">Jobs</p>
          <p className="text-gray-500 my-3 cursor-pointer">Privacy Policy</p>
          <p className="text-gray-500 my-3 cursor-pointer">Contact Us</p>
        </div>
        <div>
          <h2 className="text-lg mb-4 font-bold">Our Community</h2>
          <p className="text-gray-500 my-3 cursor-pointer">Climbing xixixi</p>
          <p className="text-gray-500 my-3 cursor-pointer">Hiking hilink</p>
          <p className="text-gray-500 my-3 cursor-pointer">Hilink kinthill</p>
        </div>
        <div>
          <h2 className="text-lg mb-4 font-bold">Contact Us</h2>
          <p className="text-gray-500 my-3 cursor-pointer">
            Admin Officer:{" "}
            <span className="text-black font-semibold">123-456-7890</span>
          </p>
          <p className="text-gray-500 my-4 cursor-pointer">
            Email Officer:{" "}
            <span className="text-black font-semibold">
              hilink@akinthil.com
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-lg mb-4 font-bold">logo</h2>
          <div className="flex items-center gap-3">
            <img
              src="../../facebook.svg"
              alt="facebook"
              className="cursor-pointer"
            />
            <img
              src="../../instagram.svg"
              alt="instagram"
              className="cursor-pointer"
            />
            <img
              src="../../twitter.svg"
              alt="twitter"
              className="cursor-pointer"
            />
            <img
              src="../../youtube.svg"
              alt="youtube"
              className="cursor-pointer"
            />
            <img
              src="../../wordpress.svg"
              alt="wordpress"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="w-[85%] h-[1px] mx-auto bg-[#dfdfdf] mt-10"></div>
      <div className="text-center p-10 text-gray-500 mt-4 mb-10">
        2023 Hilink | All rights reserved
      </div>
    </>
  );
}

export default Footer;

/*
logo
Learn More
About Hilink
Press Releases
Environment
Jobs
Privacy Policy
Contact Us

Our Community
Climbing xixixi
Hiking hilink
Hilink kinthill
Contact Us
Admin Officer:

123-456-7890

Email Officer:

hilink@akinthil.com

Social
logo
logo
logo
logo
logo*/
