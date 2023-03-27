import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import VisitUsDetail from "../page/VisitUsApplicationDetails/VisitUsDetail"
import Button from "@/components/Button/SubmitButton"
import Pdf from "react-to-pdf"
import { createRef } from "react"
import Link from "next/link"

const visitUsApplicationDetail = () => {
  const router = useRouter()
  const visitUsData = useSelector((state) => state.applicationData.visitUsData)
  const ref = createRef()
  const { index } = router.query
  try {
    return (
      <>
        <PageLayout mheight="100vh" height="120vh">
          <Navbar />
          <div className="navSpace"></div>
          <PageWidth full scale={"95%"} width="1500px" position="relative">
            <Pdf
              targetRef={ref}
              filename={
                visitUsData[index - 1].name.split(" ").join("") +
                "_ProjectIdea.pdf"
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
              <VisitUsDetail VisitUsData={visitUsData[index - 1]} />
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

export default visitUsApplicationDetail
