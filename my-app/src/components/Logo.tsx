import Image from "next/image"
import logo from "@/components/img/logo.png";

export default function Logo() {

  return (
    <div className="w-full h-full">
      <Image
        src={logo}
        width={100}
        alt="logo"
        loading="eager"
      />
      <h1 className="text-center">KWUS</h1>
    </div>
  )
}