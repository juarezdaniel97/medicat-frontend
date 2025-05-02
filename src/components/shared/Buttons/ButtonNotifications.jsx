import { Bell } from 'lucide-react'
import React, { useState } from 'react'

const ButtonNotifications = () => {

    const [notifications, setNotifications] = useState(2)

    return (
        <button className='relative p-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'>
            <Bell className='h-6 w-6'/>
            {
                notifications > 0 && 
                (
                    <span className='absolute  top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-center text-white dark:text-gray-200' >
                        {notifications}
                    </span>
                )
            }
        </button>
    )
}

export default ButtonNotifications