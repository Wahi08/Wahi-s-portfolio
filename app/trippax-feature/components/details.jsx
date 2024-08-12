/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const ProjectHeader = () => {
  return (
    <section className="Project-header bg-grey-white">
      <div className="Intro grid grid-col-1 justify-items-center">
        <div className="Details lg:h-[calc(100vh-90px)] overflow-y-auto px-4 md:px-20 lg:pt-10">
          <div className="text-center">
            <a className="text-black font-medium text-[20px] md:text-[34px] tracking-wider">
              TRIPPAX - TRAVEL ITINERARY
            </a>
          </div>

          <div className="pt-4 grid justify-items-center">
            <img className="" src="/trippax-feature-header-2.svg"></img>
          </div>

          <div className="py-6">
            <p className="font-normal tracking-wider text-gray-800">
              Travelers often struggle to discover new and exciting
              destinations. TripPAX addresses this challenge by providing
              intelligent recommendations based on user location and
              preferences. With our enhanced features, users can effortlessly
              discover and explore new places, maximizing their travel
              experience.
            </p>
            <a className="font-semibold">
              Note: I am unsure of the feature's current release status
            </a>
          </div>

          <div className="flex flex-wrap gap-10 text-center pb-10">
            <div className="grid justify-items-center">
              <img
                className="w-16 h-16"
                src="/figma.svg"
                alt="Figma Logo"
                title="Figma"
              ></img>
              <div className="text-s font-semibold tracking-wider text-gray-800">
                Figma
              </div>
            </div>

            <div className="grid justify-items-center">
              <img
                className="w-16 h-16"
                src="/flutter.svg"
                alt="Flutter Logo"
                title="Flutter"
              ></img>
              <div className="text-s font-semibold tracking-wider text-gray-800 top-[10px]">
                Flutter
              </div>
            </div>

            <div className="grid justify-items-center">
              <img
                className="w-16 h-16"
                src="/dart.svg"
                alt="Dart Logo"
                title="Dart"
              ></img>
              <div className="text-s font-semibold tracking-wider text-gray-800 top-[10px]">
                Dart
              </div>
            </div>

            <div className="grid justify-items-center">
              <img
                className="w-16 h-16"
                src="/mysql.svg"
                alt="MySQL Logo"
                title="MySQL"
              ></img>
              <div className="text-s font-semibold tracking-wider text-gray-800 top-[10px]">
                MySQL
              </div>
            </div>

            <div className="grid justify-items-center">
              <img
                className="w-16 h-16"
                src="/sourcetree.svg"
                alt="Sourcetree Logo"
                title="Sourcetree"
              ></img>
              <div className="text-s font-semibold tracking-wider text-gray-800 top-[10px]">
                Sourcetree
              </div>
            </div>
          </div>

          <div className="gplay-link pb-10 flex items-center">
            <div>
              <img
                className="w-8 h-8"
                src="/gplay.svg"
                alt="Google Play Logo"
                title="Google Play"
              ></img>
            </div>
            <div>
              <p>
                <a
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  href="https://play.google.com/store/apps/details?id=com.metech.trippax&pcampaignid=web_share"
                  target="_blank"
                >
                  TRIPPAX
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="Image text-center overflow-y-auto lg:h-[calc(100vh-90px)] lg:mt-10 md:px-20 px-4">
          <div className="image-1 grid justify-items-center overflow-hidden bg-[#FF8C20]">
            <div className="m-4">
              <img src="/popup-menu.svg"></img>
            </div>
          </div>

          <div className="image-2 grid justify-items-center rounded overflow-hidden my-10 bg-[#FF8C20]">
            <div className="m-4">
              <img src="/view-list.svg"></img>
            </div>
          </div>

          <div className="image-3 grid justify-items-center  rounded overflow-hidden mt-10 bg-[#FF8C20]">
            <div className="m-4">
              <img src="/view-activity.svg"></img>
            </div>
          </div>

          <div className="image-4 grid justify-items-center  rounded overflow-hidden mt-10 bg-[#FF8C20]">
            <div className="m-4">
              <img src="/navigation-option.svg"></img>
            </div>
          </div>

          <div className="image-5 grid justify-items-center  rounded overflow-hidden my-10 bg-[#FF8C20]">
            <div className="m-4">
              <img src="/empty-field.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
