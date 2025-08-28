import Video from "../components/home-components/Video"
import videoUrl from "../assets/videos/showreel.mp4"
import HeroTop from "../components/home-components/HeroTop"

const Home = () => {
  return (
    <main className="relative">
      <figure className="absolute w-screen h-screen -z-10">
        <Video url={videoUrl} />
      </figure>

      <HeroTop videoUrl={videoUrl} />
    </main>
  )
}

export default Home
