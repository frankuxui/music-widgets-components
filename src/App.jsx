import React, { useState, useEffect, useRef } from 'react'

function App () {
  const buttonThemenRef = useRef(null)
  const [theme, setTheme] = useState(false)

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setTheme(!theme)
  }
  useEffect(() => {
    buttonThemenRef.current.addEventListener('click', handleToggleTheme)
    return () => {
      buttonThemenRef.current.removeEventListener('click', handleToggleTheme)
    }
  }
  , [theme])

  return (
    <div className='App pt-16 pb-16 mx-5 '>

      <div className='flex justify-center m-auto mb-3'>
        <button ref={buttonThemenRef} className='rounded-full w-16 h-16 bg-slate-300 text-3xl dark:bg-slate-500'>
          {theme ? '🌞' : '🌙'}
        </button>
      </div>

      <div className='flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200'>
        <p className='font-bold mb-1'>Built by <a href='https://allmylinks.com/frankuxui' className='underline dark:text-white'>Frank Esteban</a></p>
        <p>Contact me on the different platforms and social networks</p>
        <div className='flex items-center justify-center space-x-2 mt-4 flex-wrap'>
          <a href='https://www.linkedin.com/in/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='4.983' cy='5.009' r='2.188' fill='currentColor' />
              <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.figma.com/@frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z' fill='currentColor' />
              <circle cx='15.332' cy='12' r='3.332' fill='currentColor' />
            </svg>
          </a>
          <a href='https://dribbble.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codesandbox.io/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codepen.io/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://tailwindcomponents.com/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://github.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.instagram.com/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://dev.to/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='30' height='30' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://twitter.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' fill='currentColor' />
            </svg>
          </a>
        </div>
      </div>

      {/** container widgets */}
      <div className='box-border m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 3xl:columns-6'>

        {/** widget */}
        <div className='break-inside bg-white rounded-xl p-4 mb-4 text-sm dark:bg-slate-800 dark:text-white'>
          <div className='flex items-start space-x-4 md:space-x-3'>
            <div className='flex-none'>
              <button type='button' className='inline-flex items-center justify-center rounded-full w-10 h-10 bg-cyan-400'>
                <svg width='24' height='24' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path className='fill-white' d='M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z' fill='currentColor' />
                </svg>
              </button>
            </div>
            <div className='min-w-0 flex-auto'>
              <a href='#' className='font-bold'>Notion podcast</a>
              <p className='truncate mb-2 text-xs text-slate-600 dark:text-slate-400'>Lorem ipsum dolor sit consectetur permi...</p>
              <div className='w-full rounded-full overflow-hidden bg-slate-100 h-[4px] whitespace-nowrap'>
                <div className='bg-cyan-400 h-full w-1/3'>
                  <span className='sr-only'>33%</span>
                </div>
              </div>
            </div>
            <span className='text-slate-600 dark:text-slate-400'>30:45</span>
          </div>
        </div>

        {/** widgets */}
        <div className='break-inside flex items-start flex-row w-full gap-4 mb-4'>
          <a href='#' className='flex flex-col w-1/2 items-center overflow-hidden justify-between rounded-xl text-sm bg-white text-black dark:bg-slate-800 dark:text-white'>
            <div className='relative w-full h-32 overflow-hidden'>
              <img src='https://images.pexels.com/photos/3756771/pexels-photo-3756771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-full' alt='cover' />
            </div>
            <div className='flex flex-col items-start w-full space-y-1 p-4'>
              <button className='relative rounded-full w-9 h-9 -mt-10 flex items-center justify-center shadow-xl bg-white text-black'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                  <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                </svg>
              </button>
              <h1 className='font-medium'>Anastacia</h1>
              <p className='text-xs'>Sick and tired</p>
            </div>
          </a>
          <a href='#' className='relative flex flex-col w-1/2 items-center overflow-hidden justify-between rounded-xl text-sm text-white'>
            <div className='absolute bottom-0 left-0 flex flex-col items-start w-full space-y-1 p-4'>
              <button className='relative rounded-full w-9 h-9 -mt-10 flex items-center justify-center bg-white text-black'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                  <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                </svg>
              </button>
            </div>
            <img src='https://images.pexels.com/photos/3756767/pexels-photo-3756767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-[12.5rem]' alt='cover' />
          </a>
        </div>

        {/** widget */}
        <div className='break-inside relative flex items-center justify-between bg-[#00f5f9] text-black rounded-xl overflow-hidden pr-4 mb-4'>
          <div className='flex flex-1 flex-col p-4'>
            <div className='font-bold block text-base'> New </div>
            <div className='font-bold block text-base'> Releases </div>
          </div>
          <img className='absolute right-0 -top-3 w-32 h-32 object-cover rotate-12 rounded-full -mb-6 -mr-6' src='https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cover' />
        </div>

        {/** widget */}
        <a href='#' className='break-inside overflow-hidden flex bg-gradient-to-r from-[#EC008C] to-[#FC6767] rounded-full mb-4'>
          <div className='flex-1 items-center relative'>
            <div className='absolute -right-1 top-2'>
              <img className='flex-none w-20 h-20 rounded-2xl object-cover rotate-6' src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='avatar' />
            </div>
            <div className='mr-auto px-8 py-4'>
              <h5 className='font-bold text-md text-white'>Best music</h5>
              <h3 className='font-extrabold text-xl text-white'>Summer 2021</h3>
            </div>
          </div>
        </a>

        {/** widget */}
        <div className='relative break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4 overflow-hidden border-2 border-black dark:bg-slate-800 dark:text-white dark:border-white'>
          <div className='absolute bg-pink-100 top-0 bottom-0 left-0 w-4/6 dark:bg-pink-600 dark:opacity-40' />
          <div className='flex items-center space-x-4 relative'>
            <img className='flex-none w-20 h-18 rounded-xl object-cover' src='https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='text-base font-bold'>Warning</h5>
              <h5 className='block text-sm'>Rhemi, Lynn, Lockamy</h5>
            </div>
          </div>
          <div className='flex flex-col items-center relative'>
            <button>
              <svg viewBox='0 0 24 24' height='36' width='36'>
                <path fill='#e600a8' d='M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widget */}
        <div className='relative break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4 text-sm overflow-hidden dark:bg-slate-800 dark:text-white'>
          <div className='absolute bg-cyan-100 top-0 bottom-0 left-0 w-3/5 dark:bg-cyan-700' />
          <div className='flex items-center space-x-4 relative'>
            <img className='flex-none w-20 h-18 rounded-xl object-cover' src='https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg' alt='avatar' />
            <div className='flex-auto'>
              <h5 className='font-bold'>Visions - Purple Disco</h5>
              <h5 className='block text-sm'>Eli Escobar</h5>
            </div>
          </div>
          <div className='flex flex-col items-center relative'>
            <button className='w-8 h-8 flex justify-center items-center bg-black rounded-full text-white'>
              <svg height='20' width='20' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M8,5.14V19.14L19,12.14L8,5.14Z' />
              </svg>
            </button>
          </div>
        </div>

        {/** widgets */}
        <div className='break-inside flex items-start flex-row w-full gap-4 mb-4'>
          <div className='flex flex-col w-1/2 items-center overflow-hidden justify-between rounded-xl text-sm bg-white text-black dark:bg-slate-800 dark:text-white'>
            <div className='relative w-full h-36 overflow-hidden flex flex-col justify-between'>
              <div className='flex justify-between h-1/2'>
                <img src='https://images.pexels.com/photos/1358816/pexels-photo-1358816.jpeg?cs=srgb&dl=pexels-felix-ramirez-1358816.jpg&fm=jpg' className='object-cover flex-1' alt='cover' />
                <img src='https://images.pexels.com/photos/1881773/pexels-photo-1881773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover flex-1' alt='cover' />
              </div>
              <div className='flex justify-between h-1/2'>
                <img src='https://images.pexels.com/photos/7022350/pexels-photo-7022350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover flex-1' alt='cover' />
                <img src='https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover flex-1' alt='cover' />
              </div>
            </div>
            <div className='flex flex-col items-start w-full space-y-1 p-4'>
              <button className='relative rounded-full w-9 h-9 -mt-10 flex items-center justify-center shadow-xl bg-white text-black'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                  <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                </svg>
              </button>
              <div className='flex items-start justify-between w-full'>
                <div className='flex flex-col'>
                  <h1 className='font-medium'>Playlist</h1>
                  <p className='text-xs'>Sick and tired</p>
                </div>
                <button className='flex items-center justify-center cursor-pointer p-[2px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                    <path d='M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='relative cursor-pointer flex flex-col w-1/2 items-center overflow-hidden justify-between rounded-xl text-sm text-white group'>
            <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 hidden items-center justify-center bg-[#ffffffcd] text-black group-hover:flex hover:bg-white'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='22' height='22'>
                <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
              </svg>
            </button>
            <span className='absolute bottom-4 left-4 flex items-center justify-center rounded-full w-9 h-9 bg-[#000000c8]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='12' cy='12' r='2' />
                <path d='M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14' />
              </svg>
            </span>
            <img src='https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-[12.5rem]' alt='cover' />
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4 text-sm dark:bg-slate-800 dark:text-white'>
          <img className='flex-none w-20 h-24 object-cover' src='https://images.pexels.com/photos/462510/pexels-photo-462510.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='cover' />
          <div className='flex-auto flex flex-col'>
            <a href='#' className='font-bold block text-base'>The Weeknd</a>
            <span className='overflow-ellipsis w-[8.5rem] overflow-hidden whitespace-nowrap'>Take My Breath Offi..</span>
          </div>
          <button className='w-9 h-9 flex flex-none justify-center items-center bg-slate-200 rounded-full dark:bg-slate-500'>
            <svg height='20' width='20' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M8,5.14V19.14L19,12.14L8,5.14Z' />
            </svg>
          </button>
        </div>

        {/** widget */}
        <div className='break-inside flex items-center flex-row space-x-4 bg-white rounded-xl overflow-hidden pr-4 mb-4 text-sm dark:bg-slate-800 dark:text-white'>
          <img className='flex-none w-24 min-h-[6rem] object-cover' src='https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar' />
          <div className='flex justify-between flex-col w-full space-y-2'>
            <div className='flex flex-row justify-between items-start'>
              <span className='font-bold text-md mb-2'>
                Music
                <br />
                Deep house
              </span>
              <div className='flex justify-center items-center'>
                <svg viewBox='0 0 24 24' className='mr-2' width='18' height='18'>
                  <path fill='#ff00ea' d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z' />
                </svg>
                <span className='font-bold mt-[1px]'>4.95</span>
              </div>
            </div>
            <div className='w-full rounded-full overflow-hidden bg-slate-100 h-[4px] whitespace-nowrap'>
              <div className='bg-pink-600 h-full w-1/3'>
                <span className='sr-only'>33%</span>
              </div>
            </div>
          </div>
        </div>

        {/** widgets */}
        <div className='break-inside flex flex-row w-full gap-4'>
          <a href='#' className='flex flex-col w-1/2 items-center justify-between space-y-2 text-sm text-center bg-gradient-to-t from-[#e1004f] to-[#ca0094] text-white rounded-xl p-4 mb-4'>
            <svg xmlns='http://www.w3.org/2000/svg' width='45' height='45' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'><circle cx='5.5' cy='17.5' r='2.5' />
              <circle cx='17.5' cy='15.5' r='2.5' />
              <path d='M8 17V5l12-2v12' />
            </svg>
            <h1 className='text-base font-medium'>Play your favorite songs</h1>
            <button className='px-1 w-full rounded-full py-2 font-medium bg-white text-black'>Try now</button>
          </a>
          <a href='#' className='flex flex-col w-1/2 items-center justify-between overflow-hidden text-sm bg-gradient-to-r from-[#7400e1] to-[#5b00ca] text-white rounded-xl mb-4'>
            <div className='w-full h-32'>
              <img src='https://images.pexels.com/photos/9008803/pexels-photo-9008803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-full' alt='cover' />
            </div>
            <div className='flex flex-col items-start w-full p-4'>
              <h1 className='font-medium'>Sultans Of Swing</h1>
              <span className='text-xs'>Dire Straits</span>
            </div>
          </a>
        </div>

        {/** widget */}
        <div className='break-inside relative p-6 flex flex-col justify-between rounded-2xl mb-4 space-y-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
          <button className='absolute right-6 top-6 flex items-center justify-center rounded-full p-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700'>
            <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
            </svg>
          </button>
          <div className='flex flex-col items-center text-center space-y-2'>
            <img className='flex-none w-36 h-36 rounded-full object-cover' src='https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='album cover' />
            <div>
              <h5 className='text-2xl font-medium'>Sunshine - Mix</h5>
              <p>Lookee Stefane</p>
            </div>
          </div>
          <div className='flex items-center justify-between space-x-4'>
            <span className='font-medium'>03:34</span>
            <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-slate-200 dark:bg-slate-600'>
              <div className='absolute rounded-full left-0 w-1/2 h-full bg-purple-500' />
            </div>
            <span className='font-medium'>08:14</span>
          </div>
          <div className='flex justify-between items-center'>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-3 transition-all bg-slate-100 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-700'>
              <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
              </svg>
            </button>
            <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
              <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
              </svg>
            </button>
          </div>
        </div>

        {/** widgets */}
        <div className='break-inside flex flex-row w-full gap-4'>
          <a href='#' className='flex flex-col w-1/2 items-center justify-between text-sm text-center bg-gradient-to-t from-[#00d2e1] to-[#6c00ca] text-white rounded-xl p-4 mb-4'>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10' /><polygon points='10 8 16 12 10 16 10 8' /></svg>
            <h1 className='text-base font-medium'>Play your favorite songs</h1>
            <button className='flex items-center justify-center uppercase text-xs px-1 w-full rounded-full py-2 font-bold bg-white text-black'>
              <span>Playlist</span>
            </button>
          </a>
          <a href='#' className='flex flex-col w-1/2 items-center justify-between overflow-hidden text-sm bg-gradient-to-r from-[#00e15a] to-[#00caa5] text-black rounded-xl mb-4'>
            <div className='relative w-full h-32'>
              <button className='absolute bottom-4 right-4 rounded-full w-9 h-9 flex items-center justify-center bg-[#00eb59]'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                  <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                </svg>
              </button>
              <img src='https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-full' alt='cover' />
            </div>
            <div className='flex flex-col items-start w-full p-4'>
              <h1 className='font-medium'>Bitter Sweet</h1>
              <span className='text-xs'>Entwine</span>
            </div>
          </a>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col mb-4 rounded-xl overflow-hidden shadow-xl'>
          <div className='flex items-center space-x-4 bg-white pr-4 text-sm dark:bg-slate-800 dark:text-white'>
            <img className='flex-none w-20 h-24 object-cover' src='https://images.pexels.com/photos/210876/pexels-photo-210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cover' />
            <div className='flex-auto flex flex-col'>
              <a href='#' className='font-bold block text-base'>Angie</a>
              <span className='overflow-ellipsis w-[8.5rem] overflow-hidden whitespace-nowrap'>The Rolling Stones</span>
            </div>
            <button className='w-9 h-9 flex flex-none justify-center items-center rounded-full bg-black text-white dark:bg-white dark:text-black'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='18' height='18'>
                <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
              </svg>
            </button>
          </div>
          <div className='w-full rounded-full overflow-hidden bg-slate-100 h-[4px] whitespace-nowrap'>
            <div className='bg-pink-600 h-full w-4/6'>
              <span className='sr-only'>33%</span>
            </div>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside flex flex-col mb-4 rounded-xl overflow-hidden shadow-xl'>
          <div className='flex items-center bg-white text-sm dark:bg-slate-800 dark:text-white'>
            <img className='flex-none w-20 h-24 object-cover' src='https://images.pexels.com/photos/8041227/pexels-photo-8041227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cover' />
            <div className='flex justify-between items-center w-full px-4'>
              <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full w-10 h-10 transition-all bg-[#5400da] text-white'>
                <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex justify-center items-center rounded-full p-2 transition-all hover:bg-slate-100 dark:hover:bg-slate-700'>
                <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
          <div className='w-full rounded-full  whitespace-nowrap overflow-hidden h-[4px] bg-slate-100 dark:bg-slate-400'>
            <div className='bg-[#5400da] h-full w-4/6'>
              <span className='sr-only'>33%</span>
            </div>
          </div>
        </div>

        {/** widgets ( 2 ) */}
        <div className='break-inside flex flex-row w-full gap-4'>
          <a href='#' className='flex flex-col w-1/2 items-center justify-between overflow-hidden text-sm bg-white text-black dark:bg-slate-800 dark:text-white rounded-xl mb-4'>
            <div className='relative'>
              <button className='absolute right-2 top-2 flex items-center justify-center rounded-full p-1 transition-all bg-white text-black'>
                <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-10 h-10 transition-all bg-[#000000c1] hover:bg-black'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <polygon points='5 3 19 12 5 21 5 3' />
                </svg>
              </button>
              <img src='https://images.pexels.com/photos/185030/pexels-photo-185030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover' alt='cover' />
            </div>
            <div className='flex flex-col items-start w-full p-4 space-y-2'>
              <div>
                <h1 className='font-medium'>You Don't Know</h1>
                <span className='text-xs'>Smoove & Turell</span>
              </div>
              <button className='flex items-center justify-center text-xs rounded-full px-2 py-1 space-x-1 bg-black text-white dark:bg-white dark:text-black'>
                <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
                  <path fill='currentColor' d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
                </svg>
                <span className='mt-[1px]'>Music</span>
              </button>
            </div>
          </a>
          <a href='#' className='flex flex-col w-1/2 items-center justify-between overflow-hidden text-sm bg-[#009f94] text-white rounded-xl mb-4'>
            <div className='relative'>
              <button className='absolute right-2 top-2 flex items-center justify-center hover:bg-white hover:text-black rounded-full p-1 transition-all'>
                <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
                </svg>
              </button>
              <button className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-10 h-10 transition-all bg-[#000000c1] hover:bg-black'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <polygon points='5 3 19 12 5 21 5 3' />
                </svg>
              </button>
              <img src='https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover' alt='cover' />
            </div>
            <div className='flex flex-col items-start w-full p-4 space-y-2'>
              <div>
                <h1 className='font-medium'>Why did you do it</h1>
                <span className='text-xs'>Stretch</span>
              </div>
              <button className='flex items-center justify-center text-xs rounded-full px-2 py-1 space-x-1 bg-white text-black'>
                <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
                  <path fill='currentColor' d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
                </svg>
                <span className='mt-[1px]'>Music</span>
              </button>
            </div>
          </a>
        </div>

        {/** widget */}
        <div className='break-inside mb-4 flex flex-col space-y-2 text-sm text-black dark:text-white'>
          <a href='#' className='bg-white rounded-md overflow-hidden text-sm group'>
            <div className='relative'>
              <div className='flex items-center space-x-2 absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
                <button className='rounded-full w-9 h-9 flex items-center justify-center bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                    <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                  </svg>
                </button>
                <button className='rounded-full w-9 h-9 items-center justify-center bg-white text-black hidden group-hover:flex'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
                  </svg>
                </button>
                <button className='rounded-full w-9 h-9 items-center justify-center bg-white text-black hidden group-hover:flex'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='12' cy='12' r='1' />
                    <circle cx='19' cy='12' r='1' />
                    <circle cx='5' cy='12' r='1' />
                  </svg>
                </button>
              </div>
              <img src='https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover' />
            </div>
          </a>
        </div>

        {/** widgets */}
        <div className='break-inside flex flex-col w-full space-y-3'>
          <h2 className='text-xl font-extrabold text-black dark:text-white'>Tus mixes más escuchados</h2>
          <div className='flex flex-row w-full gap-4'>
            <a href='#' className='flex flex-col space-y-2 w-1/2 items-center justify-between overflow-hidden mb-4 text-sm text-black dark:text-white'>
              <div className='relative w-full h-32 overflow-hidden rounded-md'>
                <div className='absolute bottom-0 right-0 w-full p-3'>
                  <h1 className='text-xl font-bold leading-6 text-white'>
                    Electronic
                    <br />
                    Circus
                  </h1>
                </div>
                <img src='https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-full' alt='cover' />
              </div>
              <div className='flex flex-col items-start w-full space-y-1'>
                <p className='text-xs'>Setting sights on benging trance, Shouse, Moby, Tnilcker</p>
              </div>
            </a>
            <a href='#' className='flex flex-col space-y-2 w-1/2 items-center justify-between overflow-hidden mb-4 text-sm text-black dark:text-white'>
              <div className='relative w-full h-32'>
                <div className='absolute bottom-0 right-0 p-3 w-full'>
                  <h1 className='text-lg font-bold leading-6 text-white'>Mix Deep House </h1>
                </div>
                <div className='absolute bottom-0 left-0 w-full h-2 bg-[#ff009d]' />
                <img src='https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-full' alt='cover' />
              </div>
              <div className='flex flex-col items-start w-full space-y-1'>
                <h1 className='font-medium'>Dance Rising</h1>
                <p className='text-xs'>Tomorrow's dance hits, with Eliza Ro...</p>
              </div>
            </a>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside relative p-6 flex flex-col items-center text-center justify-between rounded-2xl mb-4 text-sm space-y-4 bg-gradient-to-t from-[#e11300] to-[#ca004d] text-white'>
          <h1 className='text-lg font-medium'>Obtén ahora 1 mes de música gratis</h1>
          <div>
            <h2 className='flex items-center text-5xl font-bold space-x-1'>
              <svg xmlns='http://www.w3.org/2000/svg' width='45' height='45' viewBox='0 0 24 24' fill='currentColor' className='-mt-2'>
                <path d='M16.46 5.79l.3.01a5.6 5.6 0 0 1 4.38 2.38c-.1.07-2.62 1.53-2.59 4.57.04 3.63 3.19 4.84 3.22 4.86-.02.08-.5 1.72-1.66 3.41-1 1.46-2.04 2.92-3.67 2.95-1.6.03-2.13-.96-3.96-.96-1.84 0-2.42.93-3.94.99-1.57.06-2.78-1.58-3.78-3.04-2.07-2.98-3.64-8.42-1.53-12.1a5.87 5.87 0 0 1 4.97-3c1.55-.03 3.01 1.04 3.96 1.04.95 0 2.73-1.29 4.6-1.1zM16.78 0a5.3 5.3 0 0 1-1.25 3.83 4.46 4.46 0 0 1-3.56 1.7 5.03 5.03 0 0 1 1.27-3.71A5.38 5.38 0 0 1 16.78 0z' />
              </svg>
              <span>Music</span>
            </h2>
          </div>
          <div>
            <p>Pruébalo gratis</p>
            <p>1 mes gratis, luego 9,99 €/mes.</p>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside relative p-6 flex flex-col items-center text-center justify-between rounded-2xl mb-4 text-sm space-y-4 bg-gradient-to-t from-[#3800e1] to-[#4d00ca] text-white'>
          <h1 className='text-3xl font-bold'>Premium</h1>
          <p>Selecciona y reproduce cualquier canción sin anuncios, descárgate tus favoritas y escúchalas sin conexión.</p>
          <button className='flex items-center justify-center uppercase text-xs px-1 w-full rounded-full py-3 font-bold bg-white text-black'>
            Pruébalo gratis
          </button>
          <div>
            <p>Pruébalo gratis</p>
            <p>1 mes gratis, luego 9,99 €/mes.</p>
            <p className='mt-2'>Sin compromiso, puedes cancelar en cualquier momento.</p>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside relative overflow-hidden flex flex-col items-center text-center justify-between rounded-2xl mb-4 text-sm text-white'>
          <img src='https://images.pexels.com/photos/8041323/pexels-photo-8041323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='background' className='object-cover' />
          <div className='absolute bottom-0 left-0 w-full'>
            <div className='flex flex-col rounded-xl p-4 bg-[#ffffff33] backdrop-blur-sm'>
              <div className='flex flex-col items-center text-center space-y-2'>
                <div>
                  <h5 className='text-base'>Sunshine - Mix</h5>
                  <p>Lookee Stefane</p>
                </div>
              </div>
              <div className='flex items-center justify-between space-x-4'>
                <span className='font-medium'>03:34</span>
                <div className='relative rounded-full overflo-hidden flex-1 h-1 bg-slate-200 dark:bg-slate-600'>
                  <div className='absolute rounded-full left-0 w-1/2 h-full bg-purple-500' />
                </div>
                <span className='font-medium'>08:14</span>
              </div>
              <div className='flex justify-between items-center'>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-all bg-transparent text-white'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-all bg-transparent text-white'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-10 h-10 transition-all bg-white text-black'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                    <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-all bg-transparent text-white'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' fill='currentColor' />
                  </svg>
                </button>
                <button className='flex justify-center items-center rounded-full w-8 h-8 transition-all bg-transparent text-white'>
                  <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z' fill='currentColor' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/** widgets */}
        <div className='break-inside flex flex-row w-full gap-4'>
          <a href='#' className='flex flex-col p-3 space-y-2 w-1/2 items-center justify-between overflow-hidden rounded-xl shadow-2xl mb-4 text-sm bg-white text-black dark:bg-slate-800 dark:text-slate-100'>
            <div className=''>
              <div className='relative w-full h-32 overflow-hidden rounded-lg'>
                <div className='absolute bottom-0 right-0 w-full p-2'>
                  <button className='flex items-center justify-center uppercase text-xs px-1 w-full rounded-full py-2 font-bold bg-white text-black'>
                    <span>Play now</span>
                  </button>
                </div>
                <img src='https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover h-full' alt='cover' />
              </div>
            </div>
            <div className='flex flex-col items-start w-full space-y-1'>
              <h1 className='font-medium'>Trance Mission</h1>
              <p className='text-xs'>Setting sights on benging trance...</p>
            </div>
          </a>
          <a href='#' className='flex flex-col p-3 space-y-2 w-1/2 items-center justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white text-black dark:bg-slate-800 dark:text-slate-100'>
            <div className=''>
              <div className='relative w-full h-32 overflow-hidden rounded-lg'>
                <button className='absolute bottom-4 right-4 rounded-full w-9 h-9 flex items-center justify-center bg-[#00eb59]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                    <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                  </svg>
                </button>
                <img src='https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover h-full' alt='cover' />
              </div>
            </div>
            <div className='flex flex-col items-start w-full space-y-1'>
              <h1 className='font-medium'>Dance Rising</h1>
              <p className='text-xs'>Tomorrow's dance hits, with Eliza Ro...</p>
            </div>
          </a>
        </div>

        <a href='#' className='break-inside flex bg-white rounded-xl overflow-hidden mb-4 text-sm text-white'>
          <div className='relative'>
            <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000]'>
              <div className='flex items-center flex-row justify-between'>
                <div className='mr-auto'>
                  <span>Music</span>
                  <h3 className='font-medium text-base'>Cameron Williamson</h3>
                </div>
              </div>
            </div>
            <img src='https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover' />
          </div>
        </a>

        {/** widgets */}
        <div className='break-inside flex flex-row items-start gap-4 mb-4'>
          <div className='relative flex flex-col h-[13rem] flex-1 items-center overflow-hidden justify-between rounded-xl group text-sm bg-white text-black dark:bg-slate-800 dark:text-white'>
            <button className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-11 h-11 flex z-10 items-center justify-center transition-transform scale-0 group-hover:scale-100 bg-white text-black'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='22' height='22'>
                <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
              </svg>
            </button>
            <div className='absolute top-0 left-0 w-full h-full z-0 bg-black opacity-5 transition-opacity group-hover:flex group-hover:opacity-50' />
            <div className='w-full overflow-hidden flex flex-col justify-between'>
              <div className='flex justify-between h-1/2'>
                <img src='https://images.pexels.com/photos/1358816/pexels-photo-1358816.jpeg?cs=srgb&dl=pexels-felix-ramirez-1358816.jpg&fm=jpg' className='object-cover w-1/2' alt='cover' />
                <img src='https://images.pexels.com/photos/1881773/pexels-photo-1881773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-1/2' alt='cover' />
              </div>
              <div className='flex justify-between h-1/2'>
                <img src='https://images.pexels.com/photos/7022350/pexels-photo-7022350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-1/2' alt='cover' />
                <img src='https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-1/2' alt='cover' />
              </div>
            </div>
          </div>
          <div className='relative cursor-pointer h-[13rem] flex flex-col flex-1 items-center overflow-hidden group justify-between rounded-xl text-xs text-white'>
            <div className='absolute bottom-3 left-0 w-full px-3'>
              <div className='flex justify-between items-center w-full p-2 rounded-2xl transition-all group-hover:bg-[#ffffffba] bg-[#ffffffa9] text-black backdrop-blur-sm'>
                <div className='flex items-start justify-between w-full'>
                  <div className='flex flex-col'>
                    <h1 className='font-medium'>Kowanthza</h1>
                    <p className='text-xs'>Track list</p>
                  </div>
                  <button className='rounded-full w-8 h-8 flex items-center justify-center shadow-xl bg-black text-white'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='16' height='16'>
                      <path fillRule='evenodd' d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' clipRule='evenodd' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <img src='https://images.pexels.com/photos/8044172/pexels-photo-8044172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover w-full h-full' alt='cover' />
          </div>
        </div>

        {/** widget */}
        <div className='break-inside overflow-hidden flex flex-row justify-between rounded-2xl text-sm mb-4'>
          <div className='relative w-[8rem]'>
            <div className='absolute right-4 left-4 top-4 rounded-lg text-xs py-1 px-2 text-white bg-[black]'>
              Sat 24, September
            </div>
            <img src='https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Imagen' className='w-full min-h-[7rem] object-cover' />
          </div>
          <div className='flex flex-col justify-between p-4 flex-1 bg-[#ffea00]'>
            <h1 className='font-bold'>Renaissance - Riva Remix</h1>
            <div className='flex flex-row justify-between items-center space-x-2'>
              <p className='flex-1 text-xs font-medium'>Maxim lanny, Manuel Riva</p>
              <button className='flex flex-none items-center justify-center rounded-full w-8 h-8 bg-white'>
                <svg width='22' height='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='currentColor' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/** widgets */}
        <div className='break-inside overflow-hidden flex flex-col rounded-2xl text-sm mb-4 space-y-4 dark:text-white'>
          <h1 className='text-2xl font-extrabold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#ff00b3] dark:via-[#09fff7] dark:to-[#ffef0c]'>Selected from the best artists of the moment</h1>
          <div className='flex flex-row items-start justify-between gap-4'>
            <a href='#' className='flex flex-1 flex-col items-center justify-center text-center space-y-2 font-medium'>
              <div className='rounded-2xl overflow-hidden'>
                <img src='https://images.pexels.com/photos/228842/pexels-photo-228842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Imagen' className='h-full w-full object-cover' />
              </div>
              <h2>
                Jane
                <br />
                Cooper
              </h2>
            </a>
            <a href='#' className='flex flex-1 flex-col items-center justify-center text-center space-y-2 font-medium'>
              <div className='rounded-2xl overflow-hidden'>
                <img src='https://images.pexels.com/photos/9980327/pexels-photo-9980327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Imagen' className='h-full w-full object-cover' />
              </div>
              <h2>
                Julian
                <br />
                Alvarez
              </h2>
            </a>
            <a href='#' className='flex flex-1 flex-col items-center justify-center text-center space-y-2 font-medium'>
              <div className='rounded-2xl overflow-hidden'>
                <img src='https://images.pexels.com/photos/8191522/pexels-photo-8191522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Imagen' className='h-full w-full object-cover' />
              </div>
              <h2>
                Lorenzo
                <br />
                Spanno
              </h2>
            </a>
          </div>
        </div>

        {/** widget */}
        <div className='break-inside relative overflow-hidden rounded-2xl text-sm mb-4 text-white'>
          <img src='https://images.pexels.com/photos/11356525/pexels-photo-11356525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Musica' className='w-full object-cover' />
          <div className='absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between bg-gradient-to-t from-[#000000b9] to-[#00000000]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M15 18l-6-6 6-6' />
                  </svg>
                </button>
              </div>
              <div className='flex items-center space-x-2'>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3' />
                  </svg>
                </button>
                <button className='flex flex-none items-center justify-center rounded-full w-8 h-8'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <h1 className='font-bold text-xl'>Martin Gonz</h1>
                <p>Marroned - 2011 - Remaster</p>
                <div className='flex items-center space-x-1 mt-5'>
                  <span className='px-1 py-[3px] rounded-md border text-xs border-white'>Techno</span>
                  <span className='px-1 py-[3px] rounded-md border text-xs border-white'>Electronic</span>
                  <span className='px-1 py-[3px] rounded-md border text-xs border-white'>House</span>
                </div>
              </div>
              <span className='px-2 py-1 rounded-md text-xs bg-yellow-400 text-black'>20% Off</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
