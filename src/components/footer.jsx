import React from "react";
import logo from "../assets/images/Screenshot2023-10-10at10-56-26setinfoclub.png";
function Footer() {
  return (
    <div className="w-full">
      <footer className="text-gray-500 bg-[#0A1A44] md:block flex items-center justify-center flex-col py-5  w-full md:px-8">
        <div className="w-full flex items-center flex-col   sm:mx-auto sm:text-center">
          <img src={logo} className="w-32 sm:mx-auto" />
          <p className="leading-relaxed mt-4 text-[15px]">
            Creating Code, Building Communities
          </p>
        </div>
        <ul className="items-center justify-center text-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          <li className=" hover:text-white">
            <a href="/">Accueil</a>
          </li>
          <li className=" hover:text-white">
            <a href="/Projets">Projets</a>
          </li>
          <li className=" hover:text-white">
            <a href="/Evenements">Evenements</a>
          </li>
          <li className=" hover:text-white">
            <a href="/Blogs">Blog</a>
          </li>
          <li className=" hover:text-white">
            <a href="/Ressources">Ressources</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">A propos</a>
          </li>
        </ul>
        <div className="mt-8 items-center justify-between  sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; 2023 Set Info Club All rights reserved. Product by <a href="/Developers" className="text-white">DEV</a>
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center justify-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="#">
                  <svg
                    class="svg-icon w-6 h-6 text-blue-400"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="#">
                  <svg
                    class="svg-icon w-6 h-6 text-blue-700"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
}

export default Footer;
