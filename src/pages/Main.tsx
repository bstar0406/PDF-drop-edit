import DropDownZone from '../shared/components/DropDownZone'
// import PDFViewer from '../shared/components/PDFViewer/PDFViewer';
import EditPanel from '../shared/components/EditPanel'
const Main = () => {
  return (
    <div className='main d-flex align-content-center'>
        <DropDownZone />
        <EditPanel />
        {/* <PDFViewer /> */}
    </div>
  );
}

export default Main;
