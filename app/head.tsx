export default function Head() {
  return (
    <script
      {...({
        nowprocket: '',
        'data-noptimize': '1',
        'data-cfasync': 'false',
        'data-wpfc-render': 'false',
        'seraph-accel-crit': '1',
        'data-no-defer': '1',
      } as any)}
      dangerouslySetInnerHTML={{
        __html: `(function () {
        var script = document.createElement("script");
        script.async = 1;
        script.type = "module";
        script.src = "https://tpemb.com/wl_web/main.js?wl_id=19796";
        document.head.appendChild(script);
      })();`,
      }}
    />
  );
}