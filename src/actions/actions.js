export const addFeature = newItem => {
    return { type: "ADD_FEATURE", payload: newItem };
  };
  
  export const removeFeature = (feature) => {
    return {type: "REMOVE_FEATURE", payload: feature}
    }