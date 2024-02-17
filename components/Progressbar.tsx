'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const Progressbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar height="4px" color="#C89B41" options={{ showSpinner: false }} showOnShallow />
    </>
  );
};

export default Progressbar