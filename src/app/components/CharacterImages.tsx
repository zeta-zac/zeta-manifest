import Image from "next/image";

export function CharacterSuitImage() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
        <Image
          src="/character.png"
          alt="Representative Character"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
        <Image
          src="./character.png"
          alt="Representative Character"
          fill
          style={{ objectFit: "contain" }}
          className="-scale-x-100"
        />
      </div>
    </div>
  );
}

export function CharacterDeskImage() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-[340px] h-[190px] md:w-[480px] md:h-[265px]">
        <Image
          src="/public/desk-panda.png"
          alt="Representative Character At desk"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
