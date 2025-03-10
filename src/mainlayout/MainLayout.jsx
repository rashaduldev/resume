// components/layouts/MainLayout.js
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Analytics from "@/components/analytics/analytics";

const MainLayout = ({ children, session }) => {
  return (
    <>
      <Analytics />
      <Header session={session} />
      <StairTransition />
      <PageTransition>
        <div className="mb-10">{children}</div>
      </PageTransition>
    </>
  );
};

export default MainLayout;
