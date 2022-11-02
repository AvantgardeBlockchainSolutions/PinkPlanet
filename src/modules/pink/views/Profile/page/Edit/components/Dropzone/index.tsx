// @ts-nocheck
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { Button } from '@mui/material'

const Drops = () => {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const thumbs = files.map((file) => (
    <div className="imageuploadinner" key={file.name}>
      <img
        src={file.preview}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </div>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])
  return (
    <Page>
      <section className="imginner">
        <aside className="imageupload">
          {files.length>0 ? (
            thumbs
          ) : (
            <div className="imageuploadinner">
              <img src={require('../../../../../../../../assets/images/pink/ProfilePage/notupload.png').default} />
            </div>
          )}
        </aside>
        <div className="dropzoneOuter">
          <p>At least 300x300 for best quality. GIFs are accepted as well. Max Size: 5mb</p>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <Button variant="contained">Select File</Button>
          </div>
        </div>
      </section>
    </Page>
  )
}

const Page = styled.div`
  color: #fff;
  border: 2px solid rgba(255,255,255,0.15);;
  border-radius: 24px;
  width: fit-content;
  min-width: 400px;
  min-height: 360px;
  margin-left: 20%;
  display:flex;
  justify-content:Center;
  align-items:Center;
  @media (max-width:1200px){
    margin: auto;
    margin-bottom: 30px;
  }
  .imageupload {
    display:flex;
    justify-content:Center;
    .imageuploadinner{
      width:100px;
      height:100px;
      border-radius:50%;
      overflow:hidden;
      img{
        height:100%;
        width:100%;
        object-fit:cover;
      }
    }
  }
  .dropzoneOuter {
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    max-width: 200px;
    margin: auto;
  }
`
const Heading = styled.div``
const TextBox = styled.div``

const Content = styled.div``

export default Drops
