import { Navsidebar } from "../lib/navigation";
import Link from "next/link";

export default function Sidebar(){
    return(
        <main>
            <h1>Bizflow</h1>
            <nav>
                <ul>
                    {Navsidebar.map((nav)=>(
                        <Link key={nav.id} href={nav.chemin}><li>{nav.nom}</li></Link>
                    
                    ))}
                </ul>
            </nav>
        </main>
    )
}