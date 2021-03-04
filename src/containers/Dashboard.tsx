import * as React from "react";
import LicenceDetails from "../components/dashboard/LicenceDetails";
import PurchaseTable from "../components/dashboard/PurchaseTable";
import UsageTable from "../components/dashboard/UsageTable";

const Dashboard = () => {
  return (
    <div>
      <LicenceDetails />
      <UsageTable />
      <PurchaseTable />
    </div>
  );
};

export default Dashboard;
