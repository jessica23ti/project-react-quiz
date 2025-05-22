import React from 'react';
import "../assets/tailwind.css"; 
import ListMenu from '../components/ListMenu';

export default function Sidebar() {
  return (
    <div id="sidebar" className='flex flex-col bg-white shadow-lg p-10 w-90 min-h-screen'>
      <div id="sidebar-logo" className='flex flex-col'>
        <span id="logo-title" className='font-poppins-extrabold text-[48px] text-gray-900'>
          Sedap <b id="logo-dot" className='text-hijau'>.</b>
        </span>
        <span id="logo-subtitle" className='font-barlow font-semibold text-gray-400'>
          Modern Admin Dashboard
        </span>
      </div>

      <ListMenu />

      <div id="sidebar-footer" className='mt-auto'>
        <div id="footer-card" className='flex items-center bg-hijau shadow-lg mb-10 px-4 py-2 rounded-md'>
          <div id="footer-text" className='text-white text-sm'>
            <span>Please organize your menus through button below!</span>
            <div id="add-menu-button" className='flex justify-center items-center space-x-2 bg-white mt-3 p-2 rounded-md'>
              <span className='font-poppins font-bold text-black'>Add Menus</span>
            </div>
          </div>
          <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className='rounded w-20 full'/>
        </div>
        <span id="footer-brand" className='font-bold text-gray-400'>Sedap Restaurant </span>
        <p id="footer-copyright" className='font-light text-gray-400'>&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
