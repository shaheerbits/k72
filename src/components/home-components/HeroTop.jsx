import Video from "./Video"

const HeroTop = ({ videoUrl }) => {
  return (
    <div className="text-center">
      <div className="text-[8.5vw] uppercase leading-[0.95]">L'étincelle</div>
      <div className="flex justify-center items-center gap-1 text-[8.5vw] uppercase leading-[0.95]">
        qui
        <div className="w-[16vw] h-[14vh] rounded-full overflow-hidden"><Video url={videoUrl} /></div>
        génère
      </div>
      <div className="text-[8.5vw] uppercase leading-[0.95]">la créativité</div>
    </div>
  )
}

export default HeroTop
