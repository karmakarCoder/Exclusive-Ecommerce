import { AiOutlineSend } from "react-icons/ai";
import { Img } from "react-image";
import qrcode from "../../assets/Qrcode.png";
import playstore from "../../assets/play-app-store.png";
import appstore from "../../assets/appstore.png";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-primary_black pt-10 lg:pt-20">
      <div className="container flex-col xl:flex-row flex gap-10">
        <div>
          <a
            href="#"
            className="font-bold text-text text-xl lg:text-2xl font-inter"
          >
            Exclusive
          </a>
          <p className="font-medium text-text text-base lg:text-xl font-poppins lg:py-6 py-2">
            Subscribe
          </p>
          <p className="font-poppins font-normal text-xs lg:text-base text-text pb-4">
            Get 10% off your first order
          </p>
          <div className="relative w-full sm:w-auto inline-block">
            <input
              type="text"
              placeholder="Enter your email"
              className="sm:w-[230px] w-full placeholder:font-poppins placeholder:text-base placeholder:text-text1 placeholder:font-normal bg-transparent text-text rounded border-[2px] border-text py-3 pl-4 pr-11"
            />
            <div className="text-text text-xl absolute top-[50%] -translate-y-[50%] right-5">
              <AiOutlineSend />
            </div>
          </div>
        </div>
        <div className="text-text lg:justify-between flex-wrap gap-8 xl:gap-[85px] lg:gap-12 font-poppins mb-10 flex-row flex">
          {/* Support */}
          <ul>
            <li className="font-medium text-base lg:text-xl pb-3 lg:pb-5">
              Support
            </li>
            <li className="font-normal text-sm w-[243px] lg:text-base pb-2 lg:pb-4">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li className="font-normal text-sm lg:text-base pb-2 lg:pb-4">
              <a href="#">exclusive@gmail.com</a>
            </li>
            <li className="font-normal text-sm lg:text-base">
              <a href="#">+88015-88888-9999</a>
            </li>
          </ul>
          {/* Account */}
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li className="font-medium text-base lg:text-xl pb-2">Account</li>
            {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
              (item, index) => (
                <li key={index} className="font-normal text-sm lg:text-base">
                  <a href="#">{item}</a>
                </li>
              )
            )}
          </ul>
          {/* Quick Link */}
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li className="font-medium text-base lg:text-xl pb-2">
              Quick Link
            </li>
            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
              (item, index) => (
                <li key={index} className="font-normal text-sm lg:text-base">
                  <a href="#">{item}</a>
                </li>
              )
            )}
          </ul>
          {/* Download App */}
          <div>
            <div className="flex flex-col">
              {" "}
              <h5 className="font-medium text-base lg:text-xl pb-2">
                Download App
              </h5>
              <p className="text-xs font-normal pt-2 lg:pt-5 font-poppins">
                Save $3 with App New User Only
              </p>
              <div className="flex items-center mt-3 gap-2">
                <div>
                  <Img src={qrcode} alt="qrcode" />
                </div>
                <div className="flex flex-col gap-3">
                  <Img
                    src={appstore}
                    alt="appstore"
                    className="cursor-pointer"
                  />
                  <Img
                    src={playstore}
                    alt="playstore"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-8 text-2xl gap-4">
              <a href="#">
                <RiFacebookLine />
              </a>
              <a href="#">
                <TfiTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <RiLinkedinLine />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="text-center py-4 border-t-[1px] flex items-center justify-center border-t-text1">
        <p className="font-normal text-xs md:text-base font-poppins flex items-center gap-1 text-text1">
          <AiOutlineCopyright className="md:text-xl text-lg" />
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
