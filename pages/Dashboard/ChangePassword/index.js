import Settings from "../../page/Dashboard/Settings";
import PageLayout from "../../../components/PageLayout/PageLayout";
import PageWidth from "../../../components/Width/PageWidth";
import ChangePassword from "../../page/ChangePassword/Password";

const passwordChange = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <div
          style={{
            color: "white",
            fontSize: "50px",
            right: "5%",
            top: "0",
            zIndex: "10",
            position: "absolute",
            cursor: "pointer",
          }}
        >
          <Settings />
        </div>
        <div style={{ height: "100px" }}></div>

        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <ChangePassword />
        </PageWidth>
      </PageLayout>
    </>
  );
};

export default passwordChange;
