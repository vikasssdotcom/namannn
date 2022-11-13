import { useForm } from 'react-hook-form';

export default function GForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Government Login</h2>
      <input type="text" placeholder="Username" {...register("Username", {required: true, maxLength: 80})} />
      <input type="undefined" placeholder="Password" {...register} />
      <button>
        <input type="submit" />
      </button>  
    </form>
  );
}