import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Dot from "../../src/assets/images/dot.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));
const temp1 = (
  <div className="stepper-cont">
    Searched <q>Journal Entries</q> on Division module
    <p className="stepper-p">
      22:10 15/09/2020{" "}
      <span className="stepper-span">
        <img src={Dot} alt="dot"></img>
      </span>
      Web
    </p>
  </div>
);
const temp2 = (
  <div className="stepper-cont">
    Searched <q>Fingerprint record</q> on Division module{" "}
    <p className="stepper-p">
      22:10 15/09/2020{" "}
      <span className="stepper-span">
        <img src={Dot} alt="dot"></img>
      </span>
      Web
    </p>
  </div>
);
const temp3 = (
  <div className="stepper-cont">
    Searched <q>Journal Entries</q> on Division module
    <p className="stepper-p">
      22:10 15/09/2020{" "}
      <span className="stepper-span">
        <img src={Dot} alt="dot"></img>
      </span>
      Web
    </p>
  </div>
);
function getSteps() {
  return [temp1, temp2, temp3];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} style={{ padding: "0px", marginTop: "-20" }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        style={{ padding: "0px", margin: "0px" }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )}
    </div>
  );
}
