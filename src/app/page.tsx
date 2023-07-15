import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image fill src="/rings.jpg" className="blur" alt="" />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row bg-base-100/75 shadow-xl p-16 rounded-xl">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold max-w-xl">Monica & Leiv Fredriks bryllup</h1>
            <p className="py-6">Atlungstad 7. September 2024</p>
            <button className="btn btn-primary">Registrer deg</button>
          </div>
        </div>
      </div>
    </main>
  )
}
