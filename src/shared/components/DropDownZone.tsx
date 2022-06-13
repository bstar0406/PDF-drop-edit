import React from 'react'
import { useDropzone } from 'react-dropzone'

interface IPropsDropZone{
  loadFile:Function;
}
const DropDownZone = ({loadFile}:IPropsDropZone) => {
  const [files, setFiles] = React.useState<Array<any>>([]);
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
  } = useDropzone({
    accept: {
      'applicaton/pdf': ['.pdf'],
    },
    noClick: true,
    noKeyboard: true,
    maxSize: 2 * 1024 * 1024,
    maxFiles:1,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles);
    }
  })
  React.useEffect(()=>{
    if(files.length!==0)loadFile(files[0])
  },[files, loadFile])

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {Math.round(file.size / 1024)} KBytes
    </li>
  ))
  return (
    <div className={files.length===0?'drop-zone':'hidden'}>
      <div {...getRootProps()} className="base-style">
        <input {...getInputProps()} />
        <div>
          <span>
            Drop PDF file here {' '}
          </span>
          <span className="browse align-self-end me-2" onClick={open}>
            Browse
          </span>
        </div>
        <div>{acceptedFileItems}</div>
      </div>
    </div>
  )
}

export default DropDownZone
