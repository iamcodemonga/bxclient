import React from 'react'

const AboutUs = () => {
    return (
        <section className='w-full pt-16 lg:pt-36 pb-16 px-5 lg:px-20 relative whitebgimg'>
          {/* <img src="/graywave.svg" alt="graywave" className='w-full absolute' /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute w-full -bottom-2 left-0 -z-10 hidde'>
            <path fill="#F3F4F6" fill-opacity="1" d="M0,192L1440,32L1440,320L0,320Z"></path>
          </svg> */}
          <div className="lg:grid grid-cols-12 gap-x-16 space-y-16 lg:space-y-0">
            <div className="col-span-12 lg:col-span-6">
              <img src="https://images.pexels.com/photos/7433879/pexels-photo-7433879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-full rounded-xl' alt="about_pix" />
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-8">
              <h2 className="text-center lg:text-start text-5xl lg:text-7xl font-bold">About <span className='text-accent'>Us</span></h2>
              <p className="text-base text-secondary/50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea facere a vero qui asperiores, repellat molestiae odio officia. Dolore dolorum ipsam consequatur provident ratione sit et maxime. Asperiores nulla, et doloribus consequatur id totam nam! Laborum excepturi, dolorem consectetur veniam necessitatibus vel iusto quia quis ut ad ipsum odit voluptate.</p>
              <p className="text-base text-secondary/50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea facere a vero qui asperiores, repellat molestiae odio officia. Dolore dolorum ipsam consequatur provident ratione sit et maxime. Asperiores nulla, et doloribus consequatur id totam nam! Laborum excepturi, dolorem consectetur veniam necessitatibus vel iusto quia quis ut ad ipsum odit voluptate.</p>
            </div>
          </div>
        </section>
    )
}

export default AboutUs