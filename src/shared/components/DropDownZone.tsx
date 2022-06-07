import { useDropzone } from 'react-dropzone'

const DropDownZone = () => {
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
  })

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {Math.round(file.size / 1024)} KBytes
    </li>
  ))
  return (
    <div className="drop-zone">
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
