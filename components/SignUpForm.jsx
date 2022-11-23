import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
export default function SignUpForm({SignUp,setSignUp}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';
 }, []);

  const handleClick = (e) => {
    e.stopPropagation()
    setSignUp(!SignUp)
  }
  const handleForm = (e) => {
    e.stopPropagation()
    setSignUp(SignUp)
  }
  
  return (
    <div className='fixed top-0 left-0 min-h-screen min-w-full flex items-center bg-white/80' onClick={handleClick} >
    <motion.form onSubmit={handleSubmit(onSubmit)} onClick={handleForm} className="min-h-[80vh]" initial={{opacity:0}} animate={{opacity:1}}>
        <h2>Sign Up</h2>
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="undefined" placeholder="Wallet Address" {...register} />
      <input type="undefined" placeholder="City" {...register} />
      <input type="text" placeholder="Postal Address" {...register} />

      <button className='bg-secondary rounded-xl text-white'>
        <input  type="submit" />
      </button>  
    </motion.form>
    </div>
  );
} 