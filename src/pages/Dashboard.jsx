import React from "react";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import GridItem from "../ui/GridItem";

const Dashboard = () => {
  return (
    <>
      <h2 className="pt-3 pl-4 text-xl font-semibold">Welcome, User</h2>

      <Grid>
        <GridItem colSpan={4}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={4}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={4}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={12} rowSpan={2}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={8} rowSpan={2}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={4} rowSpan={2}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={3} rowSpan={1}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={9} rowSpan={2}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>

        <GridItem colSpan={3} rowSpan={1}>
          <Card>balbvalbalbalbl</Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
