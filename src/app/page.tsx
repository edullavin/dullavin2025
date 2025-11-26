export default function Home() {
  return (
    <div className="flex min-h-screen p-4">
      <div className="flex h-auto md:h-[80vh] m-auto border border-primary-500 rounded-lg overflow-hidden bg-white">
        <div className="pathOptions">
          <img src="/path-pro.png" alt="" className="w-auto h-full" />
          <p className="absolute">Professional Work</p>
        </div>
        <div className="pathOptions">
          <img src="/path-work.png" alt="" className="w-auto h-full" />
          <p>Personal Projects</p>
        </div>
      </div>
    </div>
  );
}
