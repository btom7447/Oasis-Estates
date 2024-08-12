import React, { createContext, useState, useEffect, useContext } from "react";
import propertiesData from '../Datas/propertiesData.json';

// Create Context
export const PropertyContext = createContext();

// Custom Hook to use PropertyContext
export const usePropertyContext = () => {
  return useContext(PropertyContext);
};

// Context Provider Component
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    keyword: "",
    type: "",
    status: "",
    location: "",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
  });

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const filteredProperties = properties.filter(property => {
    return (
      (!searchCriteria.keyword || property.name.toLowerCase().includes(searchCriteria.keyword.toLowerCase())) &&
      (!searchCriteria.type || property.type === searchCriteria.type) &&
      (!searchCriteria.status || property.status === searchCriteria.status) &&
      (!searchCriteria.location || property.location === searchCriteria.location) &&
      (!searchCriteria.bedrooms || property.bedrooms === parseInt(searchCriteria.bedrooms)) &&
      (!searchCriteria.bathrooms || property.bathrooms === parseInt(searchCriteria.bathrooms)) &&
      (!searchCriteria.priceRange || property.price <= parseFloat(searchCriteria.priceRange)) && // Updated to handle single priceRange value
      (!searchCriteria.size || property.size === parseInt(searchCriteria.size))
    );
  });

  const uniqueTypes = [...new Set(properties.map(property => property.type))];
  const uniqueStatuses = [...new Set(properties.map(property => property.status))];
  const uniqueLocations = [...new Set(properties.map(property => property.location))];

  return (
    <PropertyContext.Provider value={{
      properties: filteredProperties,
      searchCriteria,
      setSearchCriteria,
      uniqueTypes,
      uniqueStatuses,
      uniqueLocations
    }}>
      {children}
    </PropertyContext.Provider>
  );
};
