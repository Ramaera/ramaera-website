import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageWidth from "../../components/Width/PageWidth";
import PosdEnquiryDetail from "../page/PosdEnquiryDetail/PosdEnquiryDetail";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import Link from "next/link";
import Button from "@/components/Button/SubmitButton";

const posdEnquiryDetail = () => {
  const router = useRouter();
  const posdEnquiryData = useSelector(
    (state) => state.applicationData.posdEnquiryData
  );
  const ref = createRef();
  const { index } = router.query;
  try {
    return (
      <>
        <PageLayout mheight="100vh" height="120vh">
          <PageWidth full scale={"95%"} width="1500px" position="relative">
            <Pdf
              targetRef={ref}
              filename={
                posdEnquiryData[index - 1].name.split(" ").join("") +
                "_PosdEnquiry.pdf"
              }
              scale={0.8}>
              {({ toPdf }) => (
                <button
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                  }}
                  onClick={toPdf}>
                  <Button Text="Download PDF" width="fit-content" />
                </button>
              )}
            </Pdf>
            <div ref={ref}>
              <PosdEnquiryDetail posdEnquiryData={posdEnquiryData[index - 1]} />
            </div>
          </PageWidth>
        </PageLayout>
      </>
    );
  } catch {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login">
          Login to continue
        </Link>
      </>
    );
  }
};

export default posdEnquiryDetail;
