import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <input type="undefined" placeholder="Wallet Address" {...register} />
      <input type="undefined" placeholder="Password" {...register} />

      <input type="submit" />
    </form>
  );
}