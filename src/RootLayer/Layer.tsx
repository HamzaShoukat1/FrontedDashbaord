import Sidebar from "../components/shared/Sidebar/Sidebar";
import Topbar from "../components/shared/Topbar";
import { Outlet } from "react-router-dom";

export default function Layer() {
  return (
    <div className="flex min-h-screen w-full">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 h-full ">
        <Sidebar />
      </aside>

      {/* RIGHT SIDE (TOPBAR + CONTENT) */}
      <div className="flex flex-col flex-1 h-full">

        {/* TOPBAR */}
        <div className="w-full">
          <Topbar />
        </div>

        {/* MAIN CONTENT */}
        <section className="flex-1 p-4">
          <Outlet />
        </section>

      </div>

    </div>
  );
}
