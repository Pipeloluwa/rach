"use client";
import { interFont } from '@/app/fonts/fontsConfig'
import { PageMarginContainer } from '@/app/PageMarginContainer';
import React, { useState } from 'react'
import { ResponseComponent } from '../shared-components/ResponseComponent';

export const DownloadProject = () => {
  const [mailDialog, setMailDialog] = useState("");
  const [processing, setProcessing] = useState<boolean>(false);




  const downloadFile = async (fileName: string): Promise<void> => {
    try {
      const fileUrl = `${window.location.origin}/${fileName}`;
      const response = await fetch(fileUrl);
      
      if (!response.ok) {
        setMailDialog("Sorry, could not download the file");
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
  
      link.href = url;
      link.download = fileName.substring(7, fileName.length);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Cleanup memory
  
    } catch (error) {
      setMailDialog("Sorry, could not download the file");
    }
  };


  const downloadFilesParallel = async (): Promise<void> => {
    
    const files = ["/files/Project100.pdf"]; 

    setProcessing(true);
    // to download all files simultaneously
    await Promise.all(files.map(file => downloadFile(file)));
  
    setProcessing(false);
    setMailDialog("Successful");
    
  };



  return (
    <div className='bg-black'>
      <PageMarginContainer>
        <div className='pt-10 w-full flex flex-col gap-y-2 justify-center items-center text-center'>
          <p>
            {"To read more details about the project, click the button below to download."}
          </p>
          <button onClick={() => downloadFilesParallel()} className={`degular-font-wide ${processing ? "pointer-events-none" : "pointer-events-auto"} big-button text-[16px] w-[250px] h-[60px] flex justify-center items-center rounded-xl text-gray-800 font-bold bg-gradient-to-b from-[#e2be3b] from-[30%] to-[#a78304]`}>

            <span >
              {processing ? "Downloading..." : "Download File"}
            </span>
          </button>
        </div>

      </PageMarginContainer>


      <ResponseComponent mailDialog={mailDialog} setMailDialog={setMailDialog} />
    </div>
  )
}
