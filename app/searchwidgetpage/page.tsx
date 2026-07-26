import Header from "../components/Home/header";
import Footer from "../components/Home/footer";
import SearchWidget from "../components/Home/searchwidgetpage/widget";

export default function SearchWidgetPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F9F8F5]">
      <Header />
      <section className="flex-1 px-6 pb-10 pt-[120px] lg:px-10 lg:pb-12 lg:pt-[136px]">
        <SearchWidget />
      </section>
      <Footer />
    </main>
  );
}
