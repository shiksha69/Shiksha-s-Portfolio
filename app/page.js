import Animate from "./_components/Animate";
import Contacts from "./_components/Contacts";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Works from "./_components/Works";

export default function Home() {
  return (
    <div className="px-4 md:px-16 lg:px-32 bg-gradient-to-r from-white to-gray-100">
      <Header />
      <hr className="bg-gray-900" />
      <Hero />
      <Animate>
        <Works />
      </Animate>
      <Animate>
        <Contacts />
      </Animate>
    </div>
  );
}
