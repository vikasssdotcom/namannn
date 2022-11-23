import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
export default function LoginForm({setLogin,Login}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';
 }, []);

  const handleClick = (e) => {
    e.stopPropagation()
    setLogin(!Login)
  }
  const handleForm = (e) => {
    e.stopPropagation()
    setLogin(Login)
  }
  return (
    <div className='fixed top-0 left-0 min-h-screen min-w-full flex items-center bg-white/80' onClick={handleClick} >
    <motion.form onSubmit={handleSubmit(onSubmit)} className="w-[50vw] " onClick={handleForm} initial={{opacity:0}} animate={{opacity:1}}>
      <h2>Login</h2>
      <input type="undefined" placeholder="Wallet Address" {...register} />
      <input type="password" placeholder="Password" {...register} />

      <button className='bg-secondary rounded-xl text-white'>
        <input  type="submit" />
      </button>  
    </motion.form>
    </div>
  );
}