"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="2px"
      color="#2299DD"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;
