import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import us from "./us.png";

const dancing = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row bg-base-100/75 shadow-xl pb-10 rounded-xl max-sm:min-h-screen">
          <div className="flex flex-col items-center text-center">
            <div
              className={`${dancing.className} text-4xl pt-5 pb-10 max-sm:pt-3 max-sm:pb-6`}
            >
              Save the date
            </div>

            <Image
              src={us}
              width={400}
              height={300}
              alt="us"
              className="rounded-xl"
            />
            <h1 className="text-3xl md:text-5xl font-bold max-w-xl pt-10">
              Monica & Leiv Fredriks bryllupsfest
            </h1>
            <p className="text-2xl pt-8">7. September 2024</p>
            <p className={`text-2xl pt-4 ${dancing.className}`}>
              Atlungstad, Stange
            </p>
            <p className="pt-4">
              Mer informasjon kommer når den store dagen nærmer seg
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
