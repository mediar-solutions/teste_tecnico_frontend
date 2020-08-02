import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import './FooterSelector.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        <Button className="btn">Home</Button>
        <Button className="btn">Conversion Funnel</Button>
        <Button className="btn">Store Heatmap</Button>
        <Button className="btn">Comparision & Purchasing Mission</Button>
        <Button className="btn">Conversion Matrix</Button>
        <Button className="btn">Three</Button>
        <Button className="btn">Basket Correlation Analysis</Button>
      </ButtonGroup>
    </div>
  );
}
