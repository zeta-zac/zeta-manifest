import Image from "next/image";

export default function CharacterImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-[600px] h-[700px]">
        <Image
          src="/character.png"
          alt="Representative Character"
          fill
          style={{ objectFit: "contain" }}
          className="scale-110 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
