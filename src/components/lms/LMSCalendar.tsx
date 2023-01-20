import React, { useEffect, useState } from "react";
import { Calendar } from "../shared/Calendar";
import { INITIAL_EVENTS_UPCOMING } from "../shared/event-utils";

export const LMSCalendar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initEvents: any[] = [];
  const [groupedEvents, setGroupedEvents] = useState(initEvents);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    // Give calendar some time to init
    setTimeout(() => {
      if (isInitLoad) {
        INITIAL_EVENTS_UPCOMING.sort(function compare(a: any, b: any) {
          var dateA = new Date(a.start);
          var dateB = new Date(b.start);
          return +dateA - +dateB;
        });
        setGroupedEvents(groupByDate(INITIAL_EVENTS_UPCOMING));
        setIsLoading(false);
      }
      setIsInitLoad(false);
    }, 1000);
  });

  const groupByDate = (data: any) => {
    var groups: any[] = [];
    data.forEach(function (val: any) {
      var date = val.start.split("T")[0];
      if (date in groups) {
        groups[date].push(val);
      } else {
        groups[date] = new Array(val);
      }
    });
    return groups;
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-center text-4xl h-[100vh]">Loading...</div>
      ) : (
        <Calendar
          menu={"lms"}
          INITIAL_EVENTS_UPCOMING={INITIAL_EVENTS_UPCOMING}
          groupedEvents={groupedEvents}
        />
      )}
    </div>
  );
};
