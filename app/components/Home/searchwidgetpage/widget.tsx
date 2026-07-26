export default function SearchWidget() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-[1198px] overflow-hidden rounded-[28px] bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <iframe
        title="TravelMommy flight search"
        src="/flights-widget.html"
        className="min-h-[760px] w-full border-0 bg-transparent"
      />
    </div>
  );
}
