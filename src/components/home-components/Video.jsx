const Video = ({ url }) => {
  return (
    <div className="w-full h-full">
      <video autoPlay loop muted className="w-full h-full object-cover" src={url}></video>
    </div>
  )
}

export default Video
