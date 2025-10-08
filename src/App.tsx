import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { DailyQuiz } from "./components/DailyQuiz";
import { AIChat } from "./components/AIChat";
import { Analytics } from "./components/Analytics";
import { LevelsXP } from "./components/LevelsXP";

export default function App() {
  const [activeSection, setActiveSection] =
    useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "quiz":
        return <DailyQuiz />;
      case "chat":
        return <AIChat />;
      case "analytics":
        return <Analytics />;
      case "levels":
        return <LevelsXP />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar Navigation */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}