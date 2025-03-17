import DashSection from "../page/Dashboard/DashSection"
const dashboard = () => {
  try {
    return (
      <>
        <DashSection />
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

export default dashboard
