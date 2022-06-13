import React from 'react'
import DropDownZone from '../shared/components/DropDownZone'
import PDFViewer from '../shared/components/PDFViewer/PDFViewer';
import EditPanel from '../shared/components/EditPanel'
import Header from '../shared/layout/Header';

const App = () => {
  const [currentFile, setCurrentFile] = React.useState<any>(null)
    const loadFile = (file:any) =>{
        setCurrentFile(file);
    }
  return (
    <div className="App d-flex">
      <Header currentFile={currentFile}/>
      <div className='main d-flex align-content-center'>
        <DropDownZone />
        <EditPanel />
        {currentFile && <PDFViewer />}
    </div>
    </div>
  );
}

export default App;