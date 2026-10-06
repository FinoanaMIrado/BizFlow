import Link from 'next/link'

export default function DashLayout({
    children
}:{
    children:React.ReactNode
}){
    return (
        <div className="flex">
            <nav>
               <Link href="/dashboard">Dash</Link>
               <Link href="/dashboard/clients">Clients</Link>
               <Link href="/dashboard/commandes">Commandes</Link>

            </nav>
            <main>
                {children}
            </main>
        </div>
    )

}