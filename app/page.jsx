import Header from "@/components/Header";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-start justify-start">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
