import React from 'react';
import MonthSelector from './MonthSelector';
import DaySelector from './DaySelector';

interface DateSelectorProps {
  initialDay: number;
  initialMonth: number;
  initialYear: number;
  secondDay: number;
  secondMonth: number;
  secondYear: number;
  setInitialDay: (day: number) => void;
  setInitialMonth: (month: number) => void;
  setInitialYear: (year: number) => void;
  setSecondDay: (day: number) => void;
  setSecondMonth: (month: number) => void;
  setSecondYear: (year: number) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  initialDay, initialMonth, initialYear, secondDay, secondMonth, secondYear,
  setInitialDay, setInitialMonth, setInitialYear, setSecondDay, setSecondMonth, setSecondYear
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-textSecondary">
        <span className="text-sm mr-1 font-medium">De:</span>
        <DaySelector selectedDay={initialDay} onDayChange={setInitialDay} />
        <MonthSelector 
          selectedMonth={initialMonth}
          onMonthChange={setInitialMonth}
        />
        <select 
          className="bg-muted text-textSecondary rounded px-2 py-1 text-sm"
          value={initialYear}
          onChange={(e) => setInitialYear(+e.target.value)}
        >
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>
      </div>

      <div className="flex items-center gap-2 text-textSecondary">
        <span className="text-sm font-medium">Até:</span>
        <DaySelector selectedDay={secondDay} onDayChange={setSecondDay} />
        <MonthSelector 
          selectedMonth={secondMonth}
          onMonthChange={setSecondMonth}
        />
        <select 
          className="bg-muted text-textSecondary rounded px-2 py-1 text-sm"
          value={secondYear}
          onChange={(e) => setSecondYear(+e.target.value)}
        >
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>
      </div>
    </div>
  );
};

export default DateSelector;
