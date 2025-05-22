import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import Latihan_FrameworkListSearchFilter from "./Latihan_FrameworkListSearchFilter";
createRoot(document.getElementById("root")).render(
  <div>
    {/* <FrameworkList /> */}
    {/* <FrameworkListSearchFilter /> */}
    <ResponsiveDesign />
   {/* <Latihan_FrameworkListSearchFilter/> */}
  </div>
);
