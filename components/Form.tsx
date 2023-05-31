'use client'
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSession } from 'next-auth/react';

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const Form = ({ postId }: any) => {
  const { data: session } = useSession();


  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/api/createComment", {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(() => {
      setSubmitted(true);
    }).catch((err) => {
      setSubmitted(false)
    })
  }

  return (
    <div>
      <input
        {...register("_id")}
        type='hidden'
        name="_id"
        value={postId}
      />
      {
        submitted ? (
          <div className='flex flex-col items-center gap-2 p-10 my-10 bg-bgColor text-white mx-auto'>
            <h1 className='text-2xl font-bold'>
              Thank you for submitting your comment!
            </h1>
            <p>One it has been approved, it will appear bellow!</p>
          </div>
        ) : (

          <>
            <p className="text-xs text-secondaryColor uppercase font-titleFont font-bold">Enjoy this article?</p>
            <h3 className="font-titleFont text-3xl font-bold">Leave a Comment below!</h3>
            <hr className="py-3 mt-2" />
            <form className="mt-7 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
              <label className="flex flex-col">
                <span className="font-titleFont font-semibold text-base">Name</span>
                <input
                  type="text"
                  className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
                {
                  errors?.name && (
                    <p className='text-sm font-titleFont font-semibold text-red-500 my-1 px-4'>
                      ¡ Name is required !
                    </p>
                  )
                }
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
              {
                errors?.email && (
                  <p className='text-sm font-titleFont font-semibold text-red-500 my-1 px-4'>
                    ¡ Email is required !
                  </p>
                )
              }
              <label className="flex flex-col">
                <span className="font-titleFont font-semibold text-base">Comment</span>
                <textarea
                  className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
                  placeholder="Enter your comment"
                  rows={6}
                  {...register("comment", { required: true })}
                />
                {
                  errors?.comment && (
                    <p className='text-sm font-titleFont font-semibold text-red-500 my-1 px-4'>
                      ¡ Comment is required !
                    </p>
                  )
                }
              </label>

              <button
                type="submit"
                className={`w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300 ${!session && 'disabled:bg-gray-100 disabled:cursor-not-allowed'}`}
                disabled={!session && true}
              >
                Submit
              </button>
              {
                !session && (
                  <p className='inline-flex justify-center text-sm font-titleFont font-semibold text-red-500 underline underline-offset-2 my-1 px-4 animate-bounce'>
                    ! Please sign in to Comment !
                  </p>
                )
              }
            </form>
          </>
        )
      }


    </div>
  )
}

export default Form

// disabled:bg-gray-100 disabled:cursor-not-allowed