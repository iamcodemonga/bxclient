"use client"

import { FormEvent, useState } from 'react'

const Calculator = () => {
    const [ plan, setPlan ] = useState<string>("starter");
    const [ amount, setAmount ] = useState<string>("");
    const [ result, setResult ] = useState<string>("")

    const handleMaths = (e: FormEvent) => {
      e.preventDefault();
      
      if (plan == "starter") {
        let percentage = 0.05;
        let calc = (Number(amount)*percentage)+Number(amount);
        setResult(`$${calc.toLocaleString()} in 2 days`)
        return;
      }
      
      if (plan == "basic") {
        let percentage = 0.1;
        let calc = (Number(amount)*percentage)+Number(amount);
        setResult(`$${calc.toLocaleString()} in 5 days`)
        return;
      }
      
      if (plan == "advanced") {
        let percentage = 0.15;
        let calc = (Number(amount)*percentage)+Number(amount);
        setResult(`$${calc.toLocaleString()} in 14 days`)
        return;
      }
      
      if (plan == "long term") {
        let percentage = 0.25;
        let calc = (Number(amount)*percentage)+Number(amount);
        setResult(`$${calc.toLocaleString()} in 30 days`)
        return;
      }

      return;
    }

    return (
        <section className="w-full pt-16 lg:pt-36 pb-16 lg:pb-36 px-5 lg:px-20 bg-secondary -mt-1 blackbgimg">
          <h2 className='text-4xl lg:text-7xl font-bold text-center text-primary'>Profit <span className='text-accent'>Calculator</span></h2>
          <p className='text-base text-primary/70 text-center mt-8 mx-auto w-full lg:w-2/3'>You must know the calculation before investing in any plan, so you never make mistakes. Check the calculation and you will get as our calculator says.</p>
          <form className="border rounded-lg border-gray-800 py-5 px-5 lg:p-20 lg:w-2/3 w-full mx-auto mt-20 space-y-7" onSubmit={(e) => handleMaths(e)}>
            <div className='w-full space-y-2'>
              <label htmlFor="" className='text-sm text-primary'>Choose Plan</label>
              <select name="" id="" className='block w-full bg-gray-800 text-primary border border-slate-500 rounded-md py-2 px-4 outline-none placeholder:text-primary' value={plan} onChange={(e) => setPlan(e.target.value)}>
                <option value="starter">Starter Plan</option>
                <option value="basic">Basic Plan</option>
                <option value="advanced">Advanced Plan</option>
                <option value="long term">Long term plan</option>
              </select>
            </div>
            <div className='w-full space-y-2'>
              <label htmlFor="" className='text-sm text-primary'>Invest Amount</label>
              <input type="number" className='block w-full bg-gray-800 text-primary border border-slate-500 rounded-md py-2 px-4 outline-none placeholder:text-primary' name="" id="" placeholder='0.00' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className='w-full space-y-2'>
              <label htmlFor="" className='text-sm text-primary'>Total earning (Capital + Profit)</label>
              <input type="text" className='block w-full bg-gray-800 text-primary border border-slate-500 rounded-md py-2 px-4 outline-none placeholder:text-primary' name="" id="" placeholder='0.00' value={result} disabled />
            </div>
            <button type="submit" className='py-3 w-full bg-accent rounded-md text-secondary font-bold'>Calculate Profit</button>
          </form>
        </section>
    )
}

export default Calculator