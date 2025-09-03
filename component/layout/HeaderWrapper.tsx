"use client";

import { useState } from "react";
import { Header } from "./Header";

export function HeaderWrapper() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <Header currentPage={currentPage} onNavigate={handleNavigate} />
  );
}
