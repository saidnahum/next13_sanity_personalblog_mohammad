'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

const ClientProtectPage = () => {

  const {data: session} = useSession({
    required: true
  });

  return (
    <div className="my-20 flex justify-center items-center flex-col space-y-5">
      <h1 className="text-5xl text-red-800">Server Protect Page</h1>
      <h2 className="">You are logged in as:</h2>
      <p className="font-bold text-xl">{session?.user?.name}</p>
    </div>
  )
}

export default ClientProtectPage