import Sidebar from '@/components/sidebar/Admin'
import DepositsTable from '@/components/tables/Deposits'
import Navbar from '@/components/AdminNav'

const AllDeposits = () => {
    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <DepositsTable />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default AllDeposits