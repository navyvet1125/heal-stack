import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import { links } from "../lib/nav-links";

export default function Nav() {
  return (
    <div className="flex items-center">
        <div className="hidden sm:block">
            <NavBar links={links}/>
        </div>
        <div className="sm:hidden">
            <NavBarMobile links={links} />
        </div>
    </div>
  );
}
