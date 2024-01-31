import React from 'react'
import SingleTick from './Tradingview/SingleTick'

const CurrencyData = () => {
    return (
        <section className='w-full pb-16 lg:pb-36 px-5 lg:px-20 whitebgimg'>
            <div className="lg:grid grid-cols-12 gap-10 space-y-5 lg:space-y-0">
                <div className='col-span-3'>
                    <SingleTick symbol='FX:EURUSD' />
                </div>
                <div className='col-span-3'>
                    <SingleTick symbol='BITSTAMP:BTCUSD' />
                </div>
                <div className='col-span-3'>
                    <SingleTick symbol='OANDA:GBPUSD' />
                </div>
                <div className='col-span-3'>
                    <SingleTick symbol='TVC:GOLD' />
                </div>
            </div>
        </section>
    )
}

export default CurrencyData