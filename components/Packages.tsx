import React from 'react'

const Packages = () => {

    type TPlan = {
        name: string;
        minimum: number;
        maximum: number;
        percentage: number;
        duration: string;
        popular: boolean;
    }

    const plans: Array<TPlan> = [
        { name: "Starter", minimum: 100, maximum: 999, percentage: 5, duration: "2 days", popular: false }, 
        { name: "Basic", minimum: 1000, maximum: 4999, percentage: 10, duration: "5 days", popular: false },
        { name: "Advanced", minimum: 5000, maximum: 49999, percentage: 15, duration: "2 weeks", popular: true },
        { name: "Long term", minimum: 50000, maximum: 1000000, percentage: 25, duration: "1 month", popular: false },
    ]

    return (
        <section className="w-full pt-36 pb-44 px-5 lg:px-20 bg-gray-100 relative">
            <h2 className='text-4xl lg:text-7xl font-bold text-center'>Investment <span className='text-accent'>Plans</span></h2>
            <p className='text-base text-secondary/50 text-center mt-8 mx-auto w-full lg:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo dolores ab dolor, possimus voluptates laborum pariatur accusamus id ea.</p>
            <div className="md:grid grid-cols-12 gap-x-10 mt-24 space-y-16 md:space-y-0 gap-y-10">
                {plans.map((plan: TPlan, index:number) => <div className="md:col-span-6 lg:col-span-3 border-4 border-accent rounded-xl px-5 py-10 relative" key={index}>
                    {plan.popular && <div className='bg-secondary px-10 py-2 text-primary absolute -top-5 -right-3 rotate-12'>Most Popular</div>}
                    <h3 className='text-2xl font-semibold text-accent text-center'>{plan.name} Plan</h3>
                    <p className='border-b border-accent mt-20 mb-7 text-center text-sm text-secondary/80'>Minimum Price - ${plan.minimum}</p>
                    {/* <p className='border-b border-accent my-7 text-center'>Minimum Price - $200</p> */}
                    <p className='border-b border-accent my-7 text-center text-sm text-secondary/80'>Maximum Price - ${plan.maximum}</p>
                    <p className='border-b border-accent mt-7 mb-4 text-center text-sm text-secondary/80'>Referral bonus - 10%</p>
                    <p className='border-b border-accent mb-10 pb-3 text-center text-sm text-secondary/80'>Total {plan.percentage}% + <span className='px-5 py-1 bg-accent text-primary rounded-md text-sm font-light'>Capital</span></p>
                    <h4 className='text-lg font-bold text-green-500 text-center mb-5'>{plan.percentage}% in {plan.duration}</h4>
                    <button type="button" className='mx-auto block px-10 py-2 rounded-md bg-accent'>Invest Now</button>
                </div>)}
            </div>
        </section>
    )
}

export default Packages