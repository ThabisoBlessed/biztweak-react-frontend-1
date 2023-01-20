import React, { useEffect, useState } from "react";
import { Calendar } from "../shared/Calendar";
import { INITIAL_EVENTS_UPCOMING } from "../shared/event-utils";
import { LMSMenu } from "./LMSMenu";

export const LMSCalendar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Give calendar some time to init
    setTimeout(() => {
      INITIAL_EVENTS_UPCOMING.sort(function compare(a: any, b: any) {
        var dateA = new Date(a.start);
        var dateB = new Date(b.start);
        console.log(dateA, dateB);

        return +dateA - +dateB;
      });
      console.log(INITIAL_EVENTS_UPCOMING);
      console.log(groupByDate(INITIAL_EVENTS_UPCOMING));

      setIsLoading(false);
    }, 1000);
  });

  const groupByDate = (data: any) => {
    var groups: any = {};

    data.forEach(function (val: any) {
      var date = val.start.split("T")[0];
      if (date in groups) {
        groups[date].push(val.sport);
      } else {
        groups[date] = new Array(val.sport);
      }
    });

    console.log(groups);
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
        />
      )}
    </div>
  );
};
