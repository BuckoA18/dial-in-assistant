import React from "react";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import GridItem from "../ui/GridItem";

const Dashboard = () => {
  return (
    <>
      <h2 className="pt-3 pl-4 text-xl font-semibold">Welcome, User</h2>

      <Grid>
        <GridItem colSpan={12}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={6}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={6}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={8} rowSpan={2}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
