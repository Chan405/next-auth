"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-black text-2xl font-bold mb-4"> Welcome </h1>

        <div className="flex items-center text-black">
          <p> Name : </p>
          <p> {session?.user.name} </p>
        </div>

        <div className="flex items-center text-black">
          <p> Email : </p>
          <p> {session?.user.email} </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={signOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
