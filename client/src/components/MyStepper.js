import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ActionTypes } from "@mui/base";
import { MyContext } from "../pages/Signin";

const steps = [
  "Présentation",
  "Choix de l'adhésion",
  "Adhérents",
  "Certificat médical",
  "Paiement",
  "Récapitulatif",
];
const links = [
  "/signin/presentation",
  "/signin/choix",
  "/signin/infos",
  "/signin/certif",
  "/signin/pay",
  "/signin/recap",
];

export default function MyStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { stepCompleted, setStepCompleted } = React.useContext(MyContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setStepCompleted(false);
    // if (activeStep == 4) {
    //   const ok = "OK";
    //   fetch("http://localhost:5000/auth/create", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(ok),
    //   }).then(() => {
    //     console.log("Inscription finalisée");
    //   });
    // }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      {/* Afficher le stepper */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/* Gérer les boutons en dessous du Stepper (Next, Previous, Retour au début) */}
      {activeStep === steps.length - 1 ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button onClick={handleReset}>Retour au début</Button>
            </Link>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Link
              to={activeStep === 0 ? links[activeStep] : links[activeStep - 1]}
              style={{ textDecoration: "none", color: "#F1511B" }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Etape précédente
              </Button>
            </Link>
            <Box sx={{ flex: "1 1 auto" }} />
            {stepCompleted ? (
              <Link
                to={links[activeStep + 1]}
                style={{ textDecoration: "none" }}
              >
                <Button onClick={handleNext}>Suite</Button>
              </Link>
            ) : (
              <Button disabled>Suite</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </div>
  );
}
