import React from 'react'

const Calculator = () => {
    return (
        <section className="w-full pt-16 lg:pt-36 pb-16 lg:pb-36 px-5 lg:px-20 bg-secondary -mt-1 blackbgimg">
          <h2 className='text-4xl lg:text-7xl font-bold text-center text-primary'>Profit <span className='text-accent'>Calculator</span></h2>
          <p className='text-base text-primary/70 text-center mt-8 mx-auto w-full lg:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo dolores ab dolor, possimus voluptates laborum pariatur accusamus id ea.</p>
          <form className="border rounded-lg border-gray-800 py-5 px-5 lg:p-20 lg:w-2/3 w-full mx-auto mt-20 space-y-7" action={``}>
            <div className='w-full space-y-2'>
              <label htmlFor="" className='text-sm text-primary'>Choose Plan</label>
              <select name="" id="" className='block w-full bg-gray-800 text-primary border border-slate-500 rounded-md py-2 px-4 outline-none placeholder:text-primary'>
                <option value="">Plan one</option>
                <option value="">Plan one</option>
                <option value="">Plan one</option>
                <option value="">Plan one</option>
              </select>
            </div>
            <div className='w-full space-y-2'>
              <label htmlFor="" className='text-sm text-primary'>Invest Amount</label>
              <input type="number" className='block w-full bg-gray-800 text-primary border border-slate-500 rounded-md py-2 px-4 outline-none placeholder:text-primary' name="" id="" placeholder='0.00' />
            </div>
            <div className='w-full space-y-2'>
              <label htmlFor="" className='text-sm text-primary'>Total earning (Capital + Profit)</label>
              <input type="number" className='block w-full bg-gray-800 text-primary border border-slate-500 rounded-md py-2 px-4 outline-none placeholder:text-primary' name="" id="" placeholder='0.00' disabled />
            </div>
            <button type="submit" className='py-3 w-full bg-accent rounded-md text-secondary font-bold'>Calculate Profit</button>
          </form>
        </section>
    )
}

export default Calculator