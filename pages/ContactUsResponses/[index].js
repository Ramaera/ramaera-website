import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageWidth from "../../components/Width/PageWidth";
import ContactUsDetail from "../page/ContactDetail/ContactUsDetail";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import Link from "next/link";
import Button from "../../components/Button/SubmitButton";

const projectApplicationDetail = () => {
  const router = useRouter();
  const contactUsData = useSelector(
    (state) => state.applicationData.contactUsData
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
                contactUsData[index - 1].name.split(" ").join("") +
                "_ContactUs.pdf"
              }
              scale={0.8}
            >
              {({ toPdf }) => (
                <button
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                  }}
                  onClick={toPdf}
                >
                  <Button Text="Download PDF" width="fit-content" />
                </button>
              )}
            </Pdf>
            <div ref={ref}>
              <ContactUsDetail ContactUsData={contactUsData[index - 1]} />
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
          href=" /Login"
        >
          Login to continue
        </Link>
      </>
    );
  }
};

export default projectApplicationDetail;
