"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = () => {

    const QA: Array<TQA> = [
      {
        id: 1,
        question: "HOW DO I OPEN MY BOTEX FINANCE ACCOUNT?",
        answer: 'It\'s quite easy and convenient. Go to the register page, fill in the registration form and then press "Submit".'
      },
      {
        id: 2,
        question: "HOW CAN I INVEST WITH BOTEX FINANCE?",
        answer: "To make a investment you must first become a member of Botex Finance. Once you are signed up, you can make your first deposit. All deposits must be made through the dashboard. You can login using your username and password."
      },
      {
        id: 3,
        question: "HOW CAN I WITHDRAW FUNDS?",
        answer: "Log in to your account using your username and password and check the Withdraw section of your dashboard and place your withdrawal."
      },
      {
        id: 4,
        question: "HOW DO YOU CALCULATE THE INTEREST ON MY ACCOUNT?",
        answer: "Depending on each plan. Interest on your Botex Finance account is acquired Daily, Weekly, Bi-Weekly, Monthly and Yearly and credited to your profit balance at the end of each investment period."
      },
      {
        id: 5,
        question: "What mode of payments do you accept at Botex Finance?",
        answer: "We accept payments with cryptocurrencies! Mostly Bitcoin, Ethereum, USDT and BNB to be specific."
      },
      {
        id: 6,
        question: "What happens if I forgot my password and can't login?",
        answer: "Simple! Just follow the forgot password link on your login form, fill in your email and we will send an AI generated password to your email address. You can change this password once you login."
      },
      {
        id: 7,
        question: "CAN I MAKE AN ADDITIONAL DEPOSIT TO BOTEX FINANCE ACCOUNT ONCE IT HAS BEEN OPENED?",
        answer: "Yes, you can but all transactions are handled separately."
      },
    ]

    const [ active, setActive ] = useState<number>(0)

    type TQA = {
      id: number
      question: string
      answer: string
    }

    return (
        <section className="w-full py-16 lg:py-36 px-5 lg:px-20 whitebgimg">
          <h2 className='text-4xl lg:text-7xl font-bold text-center'>Frequently Asked <span className='text-accent'>Questions</span></h2>
          <p className='text-base text-secondary/70 text-center mt-8 mx-auto w-full lg:w-2/3'>We answer some of your Frequently Asked Questions regarding our platform. If you have a query that is not answered here, Please contact us.</p>
          <div className='lg:w-2/3 w-full mx-auto mt-16 space-y-6'>
            {QA.length > 0 ? QA.map((faq: TQA, index: number) =>  <motion.div className='space-y-5 p-5 bg-gray-100 rounded-lg' key={faq.id}>
                <button type="button" className='flex justify-between text-start font-semibold w-full' onClick={() => setActive(index)}> {faq.question.toUpperCase()} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden lg:block mt-0 lg:w-7 lg:h-7 lg:mt-0 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </button>
                  <AnimatePresence>
                    {index == active ? 
                      <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-secondary/70 text-sm">{faq.answer}</motion.p>
                    : null}
                  </AnimatePresence>
            </motion.div>) : null}
          </div>
        </section>
    )
}

export default FAQS