"use client";

import { useMaintenance } from "@/contexts/maintenance-context";
import { AlertTriangle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function MaintenanceBanner() {
  const { isMaintenanceMode, maintenanceMessage } = useMaintenance();
  const [isDismissed, setIsDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isMaintenanceMode || isDismissed) {
    return null;
  }

  return (
    <div className="bg-warning text-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              {maintenanceMessage}
            </p>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 rounded-md p-1 hover:bg-black/10 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
