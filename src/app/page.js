"use client";
import Image from "next/image";
import HTML5Player from "./HTML5Player";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex w-full flex-row justify-center items-center">
          <div
            className="mt-24 mb-4 w-[1200px]"
            id="company_video"
          >
            <HTML5Player
              videoSrc="https://storage.googleapis.com/qzens_website/videos/Qzens_Coming_Soon_16_9.mp4"
              sectionId="cooming_soon"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
