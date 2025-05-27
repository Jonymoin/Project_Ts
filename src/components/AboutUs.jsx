import React from 'react'

const AboutUs = () => {
  return (
    <main className='bg-gradient-to-r  from-lime-600 to-gray-400 text-white flex flex-col'>
      <div className='h-[400px] bg-cover flex items-center justify-center' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/images/wm3.jpg')`,
      }}>
            <h3 className='text-center text-4xl '> SARIMON ENGINEERING PTE. LTD</h3>
      </div>
        <div className='w-[90%] mx-auto space-y-4'>
        <h3 className='text-center text-4xl p-4'>SARIMON ENGINEERING PTE. LTD.</h3>
        <p>Registration No. / Unique Entity Number: 202404071H <small> issued by Accounting And Corporate Regulatory Authority</small></p>
         <hr />
        <p>
        SARIMON ENGINEERING PTE. LTD. (the "Company") is a Exempt Private Company Limited by Shares, incorporated in Singapore . The address of the Company's registered office is at the TRADEHUB 21 building. The Company current operating status is live. This Company's principal activity is renovation contractors.
         </p>
         <hr />

         <h3>Corporate Profile of SARIMON ENGINEERING PTE. LTD.</h3>
         <p>UEN</p>
         <p>202231424N</p>
          <hr />
         <p>Company Name</p>
         <p>SARIMON ENGINEERING PTE. LTD.</p>
         <hr />
         <p>Operating Status         </p>
         <p>Live Company as on 5 September 2022 (Monday)</p>
         <hr />
         <p>Registration Type</p>
         <p>EXEMPT PRIVATE COMPANY LIMITED BY SHARES</p>
         <hr />
         <h4>Contact Information         </h4>
         <p>Registered Address         </p>
         <p>362A CHANGI ROAD <br />  KENG YEE GARDEN <br />SINGAPORE (419823)     </p>
          <hr />
          <h4>Company Industry <br />Singapore Standard Industrial Classification (SSIC)</h4>
          <p></p>
          <p>Principal Activity SSIC Code  <br />43210        </p>
          <p></p>
          <p>Principal Activity  <br />ELECTRICAL WORK        </p>
          <p></p>
        </div>

    </main>
  )
}

export default AboutUs