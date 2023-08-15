"use client"
import Image from 'next/image'
import { useState } from 'react'
import { FaWeightHanging } from 'react-icons/fa'
import { GrMoney } from 'react-icons/gr'
import { MdOutlineCalculate } from 'react-icons/md'

export default function Home() {
  const [price1, setPrice1] = useState(0)
  const [price2, setPrice2] = useState(0)
  const [weight1, setweight1] = useState(0)
  const [weight2, setweight2] = useState(0)
  const [result, setResult] = useState('0')

  const handleClick = () => {
    const firstavg = price1 / weight1;
    const secondavg = price2 / weight2;
    setResult(firstavg > secondavg ? 'second' : 'first');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-mono">
        <div className='flex flex-col m-5'>
          <div className='flex md:flex-row justify-between flex-col'>
            <div className={`flex flex-col mx-5 border-solid border-2 mb-8 md:mb-0 p-10 ${result === 'first' ? 'bg-green-300 border-blue-600' : 'border-orange-600'}`}>
              <div className='flex flex-row gap-3'>
                <FaWeightHanging />
                <input onChange={(e) => setweight1(parseInt(e.target.value))} className='mb-5' type="text" />
              </div>
              <div className='flex flex-row gap-3'>
                <GrMoney />
                <input onChange={(e) => setPrice1(parseInt(e.target.value))} className='' type="text" />
              </div>
            </div>
            <div className={`flex flex-col mx-5 border-solid border-2 p-10 ${result === 'second' ? 'bg-green-600 border-blue-600' : 'border-orange-600'}`}>
              <div className='flex flex-row gap-3'>
                <FaWeightHanging />
                <input onChange={(e) => setweight2(parseInt(e.target.value))} className='mb-5' type="text" />
              </div>
              <div className='flex flex-row gap-3'>
                <GrMoney />
                <input onChange={(e) => setPrice2(parseInt(e.target.value))} className='' type="text" />
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button onClick={handleClick} className='flex m-atuo border-white border-solid rounded-sm border-2 bg-orange-500 px-7 py-4'><MdOutlineCalculate className='text-xl' /></button>
          </div>
        </div>
      </div>
    </main>
  )
}
