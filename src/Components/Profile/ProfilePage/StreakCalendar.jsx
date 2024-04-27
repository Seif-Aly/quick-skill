import React, { useState } from "react";
import { LinearGradient, RadialGradient } from "react-text-gradients";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Mock data for streaks and freezes
const streakData = {
  "2024-04-17": "streak",
  "2024-04-18": "streak",
  "2024-04-19": "freeze",
  "2024-04-20": "freeze",
};

const StreakCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDay = startOfWeek(startOfMonth(currentDate));
  const endDay = endOfWeek(endOfMonth(currentDate));
  const currentStreak = 4;
  const maxStreak = 18;

  const days = eachDayOfInterval({ start: startDay, end: endDay });

  const getStatusIcon = (day) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    if (streakData[formattedDate] === "streak") {
      return <img src="/fireCal.svg" className="streak-icon" />;
    } else if (streakData[formattedDate] === "freeze") {
      return <img src="/freeze.svg" className="freeze-icon" />;
    }
    return null;
  };

  const dayClassName = (day) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    let classes = "";
    if (!isSameMonth(day, currentDate)) {
      classes += " not-current-month";
    } else if (streakData[formattedDate]) {
      classes +=
        streakData[formattedDate] === "streak" ? " streak-day" : " freeze-day";
    }
    return classes;
  };

  const prevMonth = () => {
    setCurrentDate(addMonths(currentDate, -1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="streak-calendar-container">
      <h1 className="titleStreak">Your streak</h1>
      <div className="streak-calendar-header">
        <FaAngleLeft onClick={prevMonth} className="streak-calendar-nav" />
        <span className="streak-calendar-month">
          {format(currentDate, "MMMM yyyy")}
        </span>
        <FaAngleRight onClick={nextMonth} className="streak-calendar-nav" />
      </div>
      <div className="streak-calendar-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`streak-calendar-cell ${dayClassName(day)}`}
          >
            <span
              className={`streak-calendar-date ${
                isSameDay(day, new Date()) ? "today" : ""
              }`}
            >
              {format(day, "d")}
            </span>
            {getStatusIcon(day)}
          </div>
        ))}
      </div>
      <div className="streak-summary">
        <div className="current-streak">
          Current:{" "}
          <LinearGradient gradient={["to right", "#FF0000, #FFA310"]}>
            {currentStreak} days
          </LinearGradient>
          <span></span>
        </div>
        <div className="max-streak">
          Max:{" "}
          <LinearGradient gradient={["to right", "#FF0000, #FFA310"]}>
            {maxStreak} days
          </LinearGradient>
        </div>
      </div>
    </div>
  );
};

export default StreakCalendar;
