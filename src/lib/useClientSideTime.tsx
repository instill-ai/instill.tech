"use client";

import { Nullable } from "@/types/instill";
import * as React from "react";

export function useClientSideTime(time: Nullable<string>) {
  const [clientSideTime, setClientSideTime] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    if (!time) {
      return;
    }

    setClientSideTime(new Date(time).toLocaleDateString());
  }, [time]);

  return clientSideTime;
}
