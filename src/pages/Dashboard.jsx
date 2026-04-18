import React from "react";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import GridItem from "../ui/GridItem";

const Dashboard = () => {
  return (
    <>
      <h1>Welcome, User</h1>

      <Grid>
        <GridItem colSpan={8}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={4}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={12} rowSpan={2}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={12}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
