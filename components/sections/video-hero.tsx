export function VideoHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* fade into next section */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}