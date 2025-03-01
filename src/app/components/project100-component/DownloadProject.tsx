"use client";
import { interFont } from '@/app/fonts/fontsConfig'
import { PageMarginContainer } from '@/app/PageMarginContainer';
import React, { useState } from 'react'
import { ResponseComponent } from '../shared-components/ResponseComponent';

export const DownloadProject = () => {
  const [mailDialog, setMailDialog] = useState("");
  const [processing, setProcessing] = useState<boolean>(false);


  const downloadFiles = () => {

    const files = ["files/Project100-Budget.pdf", "/files/Project100.pdf"]; // List of files in the public folder

    setProcessing(true);

    files.forEach( async (file) => {

      const fileUrl = `${window.location.origin}/${file}`; // Get full file URL
      
      await fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = file;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url); // Clean up after download

          setMailDialog("Successful");
        })
        .catch(error => { setMailDialog("Sorry, could not download files"); });

    });

    setProcessing(false);
  };

  return (
    <div className='bg-black'>
      <PageMarginContainer>
        <div className='pt-10 w-full flex flex-col gap-y-2 justify-center items-center text-center'>
          <p>
            {"To read more details about the project, click the button below to download."}
          </p>
          <button onClick={() => downloadFiles()} className={`${interFont.className} ${processing ? "pointer-events-none" : "pointer-events-auto"} big-button text-[16px] w-[250px] h-[60px] flex justify-center items-center rounded-xl text-gray-800 font-bold bg-gradient-to-b from-[#e2be3b] from-[30%] to-[#a78304]`}>

            <span >
              {processing ? "Downloading..." : "Download Files"}
            </span>
          </button>
        </div>

      </PageMarginContainer>


      <ResponseComponent mailDialog={mailDialog} setMailDialog={setMailDialog} />
    </div>
  )
}
