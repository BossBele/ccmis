import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Report from "../components/Report";
import complaint from "../tests/complaint.json";

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
            document={<Report complaint={complaint} />}
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
          <hr />
          <PDFViewer children={<Report complaint={complaint} />}></PDFViewer>
        </>
      ) : null}
    </div>
  );
}
