import React from 'react'

import { Outlet } from 'react-router-dom'
export default function AuthLayouth() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md p-8 rounded-2xl w-full max-w-md">
                <div className="flex justify-center items-center mb-6">
                    <h1 className="font-poppins font-extrabold text-gray-800 text-4xl">
                        <span className="text-black">Sedap</span>
                        <span className="text-green-500">.</span>
                    </h1>
                </div>

                <Outlet/>

                <p className="mt-6 text-gray-500 text-sm text-center">
                    © 2025 Sedap Restaurant Admin Dashboard. All rights
                    reserved.
                </p>
            </div>
        </div>
    </div>
  )
}
