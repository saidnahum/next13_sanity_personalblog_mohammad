'use client'
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const Form = ({postId}: any) => {

  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit : SubmitHandler<Inputs> = (data) => {
    fetch("/api/createComment", {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(() => {
      setSubmitted(true);
    }).catch((err) => {
      setSubmitted(false)
    })
  }

  console.log(submitted);

  return (
    <div>
      <input
        {...register("_id")}
        type='hidden'
        name="_id"
        value={postId}
      />
      <form className="mt-7 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">Name</span>
          <input
            type="text"
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
        </label>
  
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">Email</span>
          <input
            type="email"
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </label>
  
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">Comment</span>
          <textarea
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
            placeholder="Enter your comment"
            rows={6}
            {...register("comment", { required: true })}
          />
        </label>
  
        <button
          type="submit"
          className="w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form