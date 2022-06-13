import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core'
import {
  zoomPlugin,
  RenderZoomInProps,
  RenderZoomOutProps,
  RenderZoomProps,
} from '@react-pdf-viewer/zoom'
import {
  pageNavigationPlugin,
  RenderGoToPageProps,
  RenderCurrentPageLabelProps,
} from '@react-pdf-viewer/page-navigation'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const PDFViewer = () => {
  const zoomPluginInstance = zoomPlugin()
  const { ZoomIn, ZoomOut, Zoom } = zoomPluginInstance

  const pageNavigationPluginInstance = pageNavigationPlugin()
  const { CurrentPageLabel } = pageNavigationPluginInstance
  const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance

  return (
    <div className="pdf-viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.js">
                <Viewer
                  fileUrl={'./assets/pdf/aaa.pdf'}
                  plugins={[
                    zoomPluginInstance,
                    pageNavigationPluginInstance,
                  ]}
                />
            </Worker>
            <div className="d-flex justify-content-between">
              <div>
                <div>
                  <ZoomOut>
                    {(props: RenderZoomOutProps) => (
                      <div className="zoom-out" onClick={props.onClick}>
                        out
                      </div>
                    )}
                  </ZoomOut>
                </div>
                <div>
                  <ZoomIn>
                    {(props: RenderZoomInProps) => (
                      <div className="zoom-in" onClick={props.onClick}>
                        in
                      </div>
                    )}
                  </ZoomIn>
                </div>
              </div>
              <div className="set-btn">
                <Zoom>
                  {(props: RenderZoomProps) => (
                    <span onClick={() => props.onZoom(1.0)}>100%</span>
                  )}
                </Zoom>
              </div>
            </div>
            <div className="pagination-back d-flex  justify-content-center disable-select">
              <div className="align-self-center">
                <GoToPreviousPage>
                  {(props: RenderGoToPageProps) => (
                    <span className="me-1 pointer" onClick={props.onClick}>
                      {'<'}
                    </span>
                  )}
                </GoToPreviousPage>
                <CurrentPageLabel>
                  {(props: RenderCurrentPageLabelProps) => (
                    <span>{`${props.currentPage + 1} of ${
                      props.numberOfPages
                    }`}</span>
                  )}
                </CurrentPageLabel>
                <GoToNextPage>
                  {(props: RenderGoToPageProps) => (
                    <span className="pointer" onClick={props.onClick}>
                      {'>'}
                    </span>
                  )}
                </GoToNextPage>
              </div>
            </div>
          </div>
  )
}

export default PDFViewer
