'use client'
import React from 'react';
import { MdCancel, MdOutlineDone } from 'react-icons/md'


interface IMailResponseComponent {
    mailDialog: string;
    setMailDialog: React.Dispatch<React.SetStateAction<string>>
}
export const ResponseComponent: React.FC<IMailResponseComponent> = ({ mailDialog, setMailDialog }) => {


    return (
        <div
            onClick={() => { setMailDialog(""); }}
            className={`${mailDialog !== "" ? "flex" : "hidden"} z-50 flex justify-center items-center fixed left-0 right-0 top-0 bottom-0 bg-black/60 `}
        >

            <div
                autoFocus={true}
                tabIndex={0}
                onClick={(e) => { e.stopPropagation() }}
                className='size-[250px] mx-auto bg-white flex items-center justify-center text-black text-xl py-[130px]' >
                <div className='flex flex-col items-center justify-center'>
                    {
                        mailDialog !== "Successful"
                            ? <MdCancel className='size-[100px] text-black' />

                            : <MdOutlineDone className='size-[100px] text-black' />
                    }


                    <h1 className={` text-center`}>
                        {mailDialog}
                    </h1>

                </div>
            </div>

        </div>

    )
}
