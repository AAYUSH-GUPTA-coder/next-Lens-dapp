export default function Nft(props) {
  const imageUri = props.imageUri;

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            {imageUri.split(".").pop() === "mp4" ? (
              <video
                className="h-48 w-full object-cover md:h-full md:w-48"
                controls
              >
                <source src={imageUri} type="video/mp4" />
              </video>
            ) : (
              <img
                src={imageUri}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
