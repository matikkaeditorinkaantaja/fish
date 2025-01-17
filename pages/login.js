import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sign in</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>

    <div className='font-sans text-sm'>
        <div className="flex">
        <div className=" w-full h-screen flex">
          <img className="flex align-top object-cover w-full" src='https://fs.pori.fi/adfs/portal/illustration/illustration.jpg?id=534A5BC1E0A663601F9C836C91F8DB01E9569EC040453A397E24B8EE2D8AA210'/>
        </div>
        <div className='p-16 min-w-[500px]'>
          <img className="pb-28" src='https://fs.pori.fi/adfs/portal/logo/logo.png?id=CB39F2622BCF19EECF330BAF9997244FD33E86E387795B1DE0994342DC3A8A72'/>
          <div bg>
            <p className='pb-10'>Sign in</p>
            <div className="pb-10">
              <input className="mb-2 pl-1 py-0.5 border border-gray-400 w-full" placeholder="someone@example.com" type="email" id="email" name="email"/>
              <input className="border pl-1 py-0.5 border-gray-400 w-full" placeholder="Password" type="password" id="password" name="password"/>
            </div>
            <Link href="/message">
              <a className='bg-[#0067b8] text-white px-5 py-1 hover:opacity-25'>
              Sign in
              </a>
            </Link>
          </div>
          <p className='absolute bottom-5 text-xs text-gray-500'>© 2018 Microsoft</p>
        </div>
      </div>
    </div>
    </div>
  )
}
