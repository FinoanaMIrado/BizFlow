export default function DashLayout({
    children
}:{
    children:React.ReactNode
}){
    return (
        <div className="flex">
            <nav>
                <a href="#dash">Dashboard</a>
                <a href="#cmd">Commandes</a>
                <a href="#clt">Client</a>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )

}