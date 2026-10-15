import Link from "next/link";
import { Navsidebar } from "../lib/navigation";

export default function Sidebar(){
    return(
        <div >
            <h1>BizFlow</h1>
            <aside>
                <nav>
                    <ul>
                        {Navsidebar.map((nav)=>(
                            <Link key={nav.id} href={nav.chemin}>
                                <li>{nav.nom}</li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    )
}