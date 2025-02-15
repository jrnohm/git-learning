import React from "react";
import laundry from "../../assets/imges/laundry-service.png";
import bedding from "../../assets/imges/bedding-service.png";
import dry from "../../assets/imges/dry-service.png";
import promotional from "../../assets/imges/promotional.png";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdBrightness6, MdHomeRepairService } from "react-icons/md";
import { HiReceiptPercent } from "react-icons/hi2";
import line from "../../assets/imges/line.jpg";
import Logo from "../../assets/imges/Logo.png";
import { getToken } from "../../static/requestUrls";

function HomePage() {
  const navigate = useNavigate();
  const token = getToken();

  console.log(token);

  const handleOnChangePage = () => {
    navigate("/Login");
  };

  return (
    <div className="h-auto min-h-[100vh]  bg-cover bg-center">
      <div className="flex justify-between p-2 sm:text-[24px] text-[12px] sm:px-12 px-2  font-bold">
        <div className="flex">
          <IoCall className="mr-2 sm:text-[32px] text-[18px]" /> 094 298 9698
        </div>
        <div className="flex">
          <FaLocationDot
            color="red"
            className="mr-2 sm:text-[32px] text-[18px]"
          />
          (U-Delight @Talat Phlu)
        </div>
      </div>

      <div className=" flex justify-center sticky  top-0 z-20 py-4">
        <img
          src={Logo}
          alt="Logo"
          className="sm:w-[10rem] w-[8rem] sm:h-[10rem] h-[8rem]"
        />
        <div className="w-[70rem] sm:h-[4rem] h-[3rem]  p-2 bg-[#FFFF] shadow-lg border border-cyan-500 rounded-full my-12">
          <div className="grid grid-cols-4 gap-4 text-[#F0FBFF] font-bold text-[12px] sm:text-[18px]">
            <div className="text-center p-2 text-[#297EA2] cursor-pointer">
              Home
            </div>
            <div className="text-center p-2 text-[#297EA2] cursor-pointer">
              Services
            </div>
            <div className="text-center p-2 text-[#297EA2] cursor-pointer">
              Contact
            </div>
            <div
              className="w-full  rounded-full   transition ease-in-out hover:scale-110 cursor-pointer bg-cyan-500 shadow-lg shadow-cyan-500/50"
              onClick={() => {
                handleOnChangePage();
              }}
            >
              <p className="text-center p-2 "> Login</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-4 px-10">
        <div className="text-center mb-12 font-bold ">
          <p className="lg:text-[32px] text-[24px] text-[#297EA2]">
            Our <span>Services</span>
          </p>
          <p className="lg:text-[22px] text-[18px]">
            เปิดบริการ 09.30 - 19.00 น.
          </p>
          <p className="text-[red] lg:text-[22px] text-[18px]">
            หยุดทุกวันพฤหัสบดี
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8  pb-16">
          <div>
            <div className="bg-[#E2F5F1]   shadow-lg">
              <div className="flex justify-center">
                <img src={laundry} alt="laundry" className="w-[20rem] p-8" />{" "}
              </div>

              <div className="text-center p-2">
                <p className=" text-[#297EA2] text-[18px] font-bold">
                  {" "}
                  Laundry Service
                </p>
                <p className="text-[#9AAEBB]">ซักอบรีดเสื้อผ้า</p>
              </div>
              <div className="flex justify-center pb-4">
                <button className="w-[10rem]   transition ease-in-out hover:scale-110 cursor-pointer bg-yellow-500 shadow-lg shadow-yellow-500/50">
                  <p className="text-center p-2 text-[#FFFF]">
                    {" "}
                    View All Sevices
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#E2F5F1]  shadow-lg">
              <div className="flex justify-center">
                <img src={bedding} alt="bedding" className="w-[20rem] p-8" />{" "}
              </div>

              <div className="text-center p-2">
                <p className=" text-[#297EA2] text-[18px] font-bold">
                  Bedding Laundry Service
                </p>
                <p className="text-[#9AAEBB]">ซักอบรีดชุดเครื่องนอน</p>
              </div>
              <div className="flex justify-center pb-4">
                <button className="w-[10rem]   transition ease-in-out hover:scale-110 cursor-pointer bg-yellow-500 shadow-lg shadow-yellow-500/50">
                  <p className="text-center p-2 text-[#FFFF]">
                    {" "}
                    View All Sevices
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#E2F5F1]   shadow-lg">
              <div className="flex justify-center">
                <img src={dry} alt="dry" className="w-[20rem] p-8" />{" "}
              </div>
              <div className="text-center p-2">
                <p className=" text-[#297EA2] text-[18px] font-bold">
                  Dry Service
                </p>
                <p className="text-[#9AAEBB]">ซักแห้งเสื้อผ้า</p>
              </div>
              <div className="flex justify-center pb-4">
                <button className="w-[10rem]   transition ease-in-out hover:scale-110 cursor-pointer bg-yellow-500 shadow-lg shadow-yellow-500/50">
                  <p className="text-center p-2 text-[#FFFF]">
                    {" "}
                    View All Sevices
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-4 px-10  rounded-md">
        <div className="text-center  font-bold text-[#297EA2] py-8">
          <p className="text-[12px] text-[#000] ">- Our PRICING -</p>
          <p className="text-[36px] ">Choose Your Plan</p>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 grid-cols-1  gap-8 pb-16">
            <div>
              <div className="bg-[#FFFF] w-[100%] border border-[#f5f5f5] shadow-lg  cursor-pointer">
                <div className="bg-[#f5f5f5] py-10 text-center shadow-md">
                  <p className="text-[28px]">Laundry & Ironing</p>
                  <p>- แพ็คเกจ ซัก อบ รีด -</p>
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#297EA2] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">S</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    30 Pcs.
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3 p-4">
                    690 THB
                  </div>
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#5B802D] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">M</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    50 Pcs.
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3 p-4">
                    990 THB
                  </div>
                </div>
                <div className="flex justify-end">
                  <img
                    src={promotional}
                    alt="promotional"
                    className="w-10 absolute "
                  />
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#B65772] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">L</div>
                  </div>
                  <div className="text-center text-[24px] text-#000 py-3">
                    70 Pcs.
                  </div>
                  <div>
                    <div className="text-center text-[24px] text-#000 py-3 p-4">
                      1190 THB
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#FFFF] w-[100%] border border-[#f5f5f5] shadow-lg  cursor-pointer">
                <div className="bg-[#f5f5f5] py-10 text-center shadow-md">
                  <p className="text-[28px]">Ironing</p>
                  <p>- แพ็คเกจ รีดอย่างเดียว -</p>
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#297EA2] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">S</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    30 Pcs.
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3 p-4">
                    550 THB
                  </div>
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#5B802D] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">M</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    50 Pcs.
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3 p-4">
                    800 THB
                  </div>
                </div>
                <div className="flex justify-end">
                  <img
                    src={promotional}
                    alt="promotional"
                    className="w-10 absolute "
                  />
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#B65772] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">L</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    70 Pcs.
                  </div>
                  <div>
                    <div className="text-center text-[24px] text-[#000] py-3 p-4">
                      1050 THB
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#FFFF] w-[100%] border border-[#f5f5f5] shadow-lg cursor-pointer">
                <div className="bg-[#f5f5f5] py-10 text-center shadow-md">
                  <p className="text-[28px]">Laundry & Folding</p>
                  <p>- แพ็คเกจ ซัก อบ พับ -</p>
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#297EA2] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">S</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    30 Pcs.
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3 p-4">
                    300 THB
                  </div>
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#5B802D] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">M</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    50 Pcs.
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3 p-4">
                    500 THB
                  </div>
                </div>
                <div className="flex justify-end">
                  <img
                    src={promotional}
                    alt="promotional"
                    className="w-10 absolute "
                  />
                </div>
                <div className="flex justify-between lg:p-4 p-2">
                  <div className="bg-[#B65772] w-[4rem] px-2 py-3 rounded-full shadow-lg">
                    <div className="text-center text-[24px] text-[#FFF]">L</div>
                  </div>
                  <div className="text-center text-[24px] text-[#000] py-3">
                    70 Pcs.
                  </div>
                  <div>
                    <div className="text-center text-[24px] text-[#000] py-3 p-4">
                      700 THB
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-10   rounded-md">
        <div className="text-center  font-bold text-[#297EA2] py-8">
          <p className="text-[32px]">Why Choose Us</p>
        </div>
        <div className=" flex justify-center">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-16">
            <div className="justify-center flex">
              <MdBrightness6 className="mr-2 text-[34px] text-[#45C08A]" />
              <p className="p-2"> นัดรับ-ส่งผ้าที่ร้าน นอกเวลาทำการได้</p>
            </div>
            <div className="justify-center flex">
              <MdHomeRepairService className="mr-2 text-[34px] text-[#45C08A]" />
              <p className="p-2">เอาใจไว้ทำงาน</p>
            </div>
            <div className="justify-center flex">
              <HiReceiptPercent className="mr-2 text-[34px] text-[#45C08A]" />
              <p className="p-2">ราคาย่อมเยาว์</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="w-full h-[20rem] mt-8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.142987972682!2d100.47690257501473!3d13.709788398265008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298613655d345%3A0x143742a214ecd66e!2z4Lii4Li5IOC4lOC4teC5hOC4peC4l-C5jCDguYHguK3guJcg4LiV4Lil4Liy4LiU4Lie4Lil4Li5IOC4quC5gOC4leC4iuC4seC5iOC4mQ!5e0!3m2!1sth!2sth!4v1717347493332!5m2!1sth!2sth"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer class="bg-[#E6F4F1] text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left ">
        <div class="mx-6 py-12 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="mt-4 flex justify-center">
              {/* <img class="h-16 w-auto" src={DbdLogo} alt="DbdLogo" /> */}
            </div>
            <div>
              <h4 class="mb-1 flex justify-center font-semibold uppercase md:justify-start text-xl">
                ติดต่อเรา
              </h4>

              <p className="text-md">
                (U-Delight ตลาดพลู ) ParkLand
                <br />
                รัชดา-ท่าพระ
                <br /> โทร: 094 298 9698
              </p>
            </div>

            <div>
              <h4 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Quick Link
              </h4>
              <p class="mb-4 flex items-center justify-center md:justify-start text-sm">
                Home
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start text-sm">
                Services
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start text-sm">
                Contact
              </p>
            </div>
            <div>
              <p className="text-center">
                <span className="text-[red] text-[18px] font-bold">
                  อย่าลืม !
                </span>{" "}
                <span className="text-[green]"> แอดไลน์</span> <br />
                ไว้รับข่าวสารโปรใหม่ๆแรงๆ
              </p>
              <div className="flex justify-center">
                <img src={line} alt="line" className="w-[10rem]" />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-b from-[#297EA2] to-[#009DB2] p-1 text-center">
          <span className="text-white">© 2024 LifeD Laundry Service</span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
