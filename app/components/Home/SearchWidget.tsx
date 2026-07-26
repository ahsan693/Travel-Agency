export default function SearchWidget() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-[1198px] overflow-hidden rounded-[28px] bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <iframe
        title="TravelMommy flight search"
        src="/flights-widget.html"
        /* 
          Shrunk the height of the widget. 
          Mobile typically requires more vertical space (e.g., 400px) because fields stack,
          while desktop can use a much shorter height (e.g., 160px) since fields are inline.
        */
        className="w-full border-0 bg-transparent min-h-[400px] lg:min-h-[160px]"
      />
    </div>
  );
}