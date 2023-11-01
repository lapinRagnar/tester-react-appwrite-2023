import { useState } from 'react';
import { account } from '../../lib/appwrite/config';
import { useNavigate } from 'react-router-dom';


const SigninForm =  () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login(email: string, password: string) {
    const user = await account.createEmailSession(email, password)
    console.log("utilisateur", user)
    navigate('/')
  }

  return (
    <div className='flex h-screen justify-center items-center'>

      <form className='flex justify-start flex-col gap-5 w-[29rem] p-20  bg-gray-500 rounded-md '>

        <h1 className="text-light-800 font-bold text-2xl mb-1">Se Connecter</h1>
        
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img 
              src='/assets/icons/email.svg'
              alt='email'
              width={24}
              height={24}
            />
            
          </span>
          <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-slate-500 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-900 focus:bg-focus:ring-1 sm:text-sm" 
            placeholder="example@example.fr" 
            type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
        </label>



        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img 
              src='/assets/icons/password.svg'
              alt='email'
              width={24}
              height={24}
            />
            
          </span>
          <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-slate-500 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-900 focus:bg-focus:ring-1 sm:text-sm" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
        </label>


        <button 
          type="button" 
          onClick={() => login(email, password)}
          className='bg-gray-600 hover:bg-yellow-700  rounded-sm h-[40px]'  
        >
          Valider
        </button>


      </form>
      
    </div>
  )
}

export default SigninForm