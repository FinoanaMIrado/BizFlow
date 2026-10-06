import Link from 'next/link'
import { Navsidebar } from '@/src/lib/navigation'


export default function DashLayout({
    children
}:{
    children:React.ReactNode
}){
    return (
        <div className="flex">
            <nav>
               <ul>
                {Navsidebar.map((nav)=>(
                    <Link key={nav.id} href={nav.chemin}> <li >{nav.nom}</li></Link>
                ))}
               </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )

}