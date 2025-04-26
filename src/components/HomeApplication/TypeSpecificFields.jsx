// 📦 src/components/HomeApplication/TypeSpecificFields.jsx
import React from "react";

import HomeFields from "./fields/HomeFields";
import CondoFields from "./fields/CondoFields";
import RentersFields from "./fields/RentersFields";
import FloodFields from "./fields/FloodFields";
import BuildersRiskFields from "./fields/BuildersRiskFields";
import PersonalLiabilityFields from "./fields/PersonalLiabilityFields";

const TypeSpecificFields = ({
  insuranceType,
  form,
  isNewPurchase,
  handleChange,
  handleFile,
}) => {
  if (!insuranceType) return null;

  const sharedProps = { form, handleChange, handleFile, isNewPurchase };

  const renderComponent = () => {
    switch (insuranceType) {
      case "Home":
        return <HomeFields {...sharedProps} />;
      case "Condo":
        return <CondoFields {...sharedProps} />;
      case "Renters":
        return <RentersFields {...sharedProps} />;
      case "Flood":
        return <FloodFields {...sharedProps} />;
      case "Builder's Risk":
        return <BuildersRiskFields {...sharedProps} />;
      case "Personal Liability":
        return <PersonalLiabilityFields {...sharedProps} />;
      default:
        return null;
    }
  };

  return <div className="pt-6">{renderComponent()}</div>;
};

export default TypeSpecificFields;
