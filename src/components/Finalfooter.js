import React from "react";
import { Link, NavLink } from "react-router-dom";


function Finalfooter() {
  return (
    <div>
      <div className="w-full h-full grid place-items-center mb-[30px] lg:mb-[20px] xl:mb-[20px] ">
        <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[-80px] sm:mt-[80px]">
        <div className="sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] sm:h-[1px] bg-[#DCDCDC] lg:mt-[60px] lg:mb-[0px]"></div>
          <div className=" grid place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-4 mt-[40px] sm:gap-x-[170px] md:gap-x-[140px] lg:gap-x-[205px] xl:gap-x-[230px] 2xl:gap-x-[250px]">
          <div className="w-[329px] h-[1px] bg-[#E1E1E1] sm:hidden "></div>
            <div className="w-[80px] h-[40px] sm:w-[140px] sm:h-[206px] py-[20px] sm:py-[0px] ">
                
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px] " >Company</h1>
              <ul id="footer-p1" className=" hidden sm:block mt-[20px] xl:mt-[30px] text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
                <a href="/about/aboutus"><li className="hover:text-[#0904F2] cursor-pointer">About Us </li></a>
                <a href="/about/whychooseus"><li className="hover:text-[#0904F2] cursor-pointer"> Our Services</li></a>
                <li className="hover:text-[#0904F2] cursor-pointer">Company History</li>
                <a href="/about/joinus"><li className="hover:text-[#0904F2] cursor-pointer"> Join Our Team</li></a>
               
              </ul>
            </div>
            <div className="w-[329px] h-[1px] bg-[#E1E1E1] sm:hidden "></div>
            <div className="w-[70px] h-[40px] sm:w-[230px] sm:h-[260px] py-[20px] sm:py-[0px] md:ml-[-25px]  ">
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px]">Services</h1>
              <ul id="footer-p1" className="hidden sm:block mt-[20px] xl:mt-[30px]  text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
              <a href="/service/softwaredevelopment/mobileapplicationdevelopment"><li className="hover:text-[#0904F2] cursor-pointer">iOS app development</li></a>
                <a href="/service/softwaredevelopment/mobileapplicationdevelopment"><li className="hover:text-[#0904F2] cursor-pointer"> Android app development</li></a>
                <a href="/service/softwaredevelopment/customsoftwaredevelopment"><li className="hover:text-[#0904F2] cursor-pointer">Software development</li></a>
                <li className="hover:text-[#0904F2] cursor-pointer"> Flutter app development</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> React native app development </li>
                <a href="/service/socialmedia/ottdevelopment"><li className="hover:text-[#0904F2] cursor-pointer">OTT App Development</li></a>
                <a href="/service/socialmedia/socialmediaplatformdevelopment"><li className="hover:text-[#0904F2] cursor-pointer">Social Media App Development</li></a>
                <a href="/service/webapp/ecommercedevelopment"><li className="hover:text-[#0904F2] cursor-pointer">E-Commerce Development</li></a>
              </ul>
            </div>
            <div className="w-[329px] h-[1px] bg-[#E1E1E1] sm:hidden"></div>
            <div className="w-[80px] h-[40px] sm:w-[120px] sm:h-[275px] py-[20px] sm:py-[0px] md:ml-[45px] ">
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px]">Industries</h1>
              <ul id="footer-p1" className="hidden sm:block mt-[20px] xl:mt-[30px]  text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
                <li className="hover:text-[#0904F2] cursor-pointer">Healthcare</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> On demand</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Finance</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Social networking </li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Entertainment</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Restaurant </li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Real estate </li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Gaming</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Education</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Aviation</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Agriculture</li>
              </ul>
            </div>
            <div className="w-[329px] h-[1px] bg-[#E1E1E1] sm:hidden  "></div>
            <div className="w-[80px] h-[40px] sm:w-[97px] sm:h-[91px] py-[20px] sm:py-[0px]  ">
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px]">Resources</h1>
              <ul id="footer-p1" className=" hidden sm:block mt-[20px] xl:mt-[30px]  text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
                <li className="hover:text-[#0904F2] cursor-pointer">Blog</li>
              </ul>
            </div>
            <div className="w-[329px] h-[1px] bg-[#E1E1E1] sm:hidden "></div>
          </div>
          <div className=" sm:hidden mt-[15px] ">
                      <div className="flex gap-[60px] ">
                        <img src="/images/linkedin 1.svg"></img>
                        
                        <a target="_blank" href="https://www.instagram.com/mntechgroup/">
                <img src="/images/insta.svg" />
              </a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100094066146720">
                <img src="/images/fb.svg" />
              </a>
              <a target="_blank" href="https://www.pinterest.com/mntechgroup/">
                <img src="/images/pintrest.svg" />
              </a>

              <a target="_blank" href="https://www.youtube.com/@MNTechgroupOfficial">
                <img src="/images/youtube.svg" />
              </a>
                      </div>
                    </div>
                    <div className="w-full grid place-items-center text-[12px] sm:hidden mt-[30px]">
                        <p id="terms" className="mt-[15px]">© 2020 MN IT Solution. All rights reserved</p>
                    </div>
          <div className="sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] sm:h-[1px] bg-[#DCDCDC]   xl:mt-[60px]"></div>
          <div className="mt-[20px] md:mt-[30px] lg:mt-[20px] xl:mt-[20px] sm:flex text-[12px] xl:text-[13px] hidden ">
            <p id="terms" className="   md:mr-[345px] lg:mr-[515px] xl:mr-[545px] 2xl:mr-[645px]">© 2020 MN IT Solution. All rights reserved</p>
            <div className="hidden md:block place-items-end">
                      <div className="flex md:gap-[20px] lg:gap-[30px] xl:gap-[40px] ">
                      <img src="/images/linkedin 1.svg"></img>
                       
                      <a  target="_blank" href="https://www.instagram.com/mntechgroup/"><img src="/images/insta.svg" /></a>
                <a  target="_blank" href="https://www.facebook.com/profile.php?id=100094066146720"><img src="/images/fb.svg" /></a>
                <a  target="_blank" href="https://www.pinterest.com/mntechgroup/"><img src="/images/pintrest.svg" /></a>
                <a  target="_blank" href="https://www.youtube.com/@MNTechgroupOfficial"><img src="/images/youtube.svg" /></a>
                      </div>
                    </div>
                    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finalfooter;
