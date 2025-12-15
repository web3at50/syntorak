"use client";

import React, { createContext, useContext, useState } from "react";

interface MaintenanceContextType {
  isMaintenanceMode: boolean;
  maintenanceMessage: string;
}

const MaintenanceContext = createContext<MaintenanceContextType | undefined>(undefined);

// Toggle this to enable/disable maintenance mode
const MAINTENANCE_ENABLED = true;
const DEFAULT_MESSAGE = "Site under maintenance - content updates coming soon!";

export function MaintenanceProvider({ children }: { children: React.ReactNode }) {
  const [isMaintenanceMode] = useState<boolean>(MAINTENANCE_ENABLED);
  const [maintenanceMessage] = useState<string>(DEFAULT_MESSAGE);

  return (
    <MaintenanceContext.Provider value={{ isMaintenanceMode, maintenanceMessage }}>
      {children}
    </MaintenanceContext.Provider>
  );
}

export function useMaintenance() {
  const context = useContext(MaintenanceContext);
  if (context === undefined) {
    throw new Error("useMaintenance must be used within a MaintenanceProvider");
  }
  return context;
}
