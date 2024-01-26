import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import ApplicantsDetails from "./applicantsDetails"
import { useSelector } from "react-redux"
import Button from "@/components/Button/SubmitButton"
import { useRouter } from "next/router"
import Pdf from "react-to-pdf"
import { createRef } from "react"
import Link from "next/link"

const applicantDetail = () => {
  const router = useRouter()
  const applicantdata = useSelector((state) => state.applicationData.appData)
  const ref = createRef()
  const { index } = router.query
  try {
    return (
      <>
        <PageLayout mheight="100vh" height="120vh">
          <PageWidth full scale={"95%"} width="1500px" position="relative">
            <Pdf
              targetRef={ref}
              filename={
                applicantdata[index - 1].name.split(" ").join("") +
                "_DistributionChannel.pdf"
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
              <ApplicantsDetails AppData={applicantdata[index - 1]} />
            </div>
          </PageWidth>
        </PageLayout>
      </>
    )
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
    )
  }
}
export default applicantDetail
