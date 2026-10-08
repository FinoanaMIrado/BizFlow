import Link from 'next/link'
import { Navsidebar } from '@/src/lib/navigation'
import Sidebar from '@/src/components/sidebar'


export default function DashLayout({
    children
}:{
    children:React.ReactNode
}){
    return (
        <div className="flex">
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
    )

}