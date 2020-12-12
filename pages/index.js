import { useEffect, useState } from "react";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Report from "../components/Report";
import complaint from "../tests/complaint.json";
import individual from "../tests/individual.json";

export default function Index() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <>
          <PDFDownloadLink
            document={
              <Report
                logo="https://react-pdf.org/images/logo.png"
                subject="Individual"
                data={individual} // see using complaint
                // tasks (uncomment and see)
              />
            }
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
          <hr />
          <PDFViewer
            children={
              <Report
                logo="https://react-pdf.org/images/logo.png"
                subject="Individual"
                data={individual} // see using complaint
                // tasks (uncomment and see)
              />
            }
          ></PDFViewer>
        </>
      ) : null}
    </div>
  );
}
