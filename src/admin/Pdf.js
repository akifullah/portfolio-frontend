// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import file from "../CV.pdf";

// export function Pdf() {
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }){
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }

