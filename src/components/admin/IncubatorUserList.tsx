import React, { useEffect, useState } from "react";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllUsers } from "../../services/admin/admin.service";
import { AdminMenu } from "./AdminMenu";
import { Users } from "./Users";
import { Mentors } from "./Mentors";
import { getAllMentors } from "../../services/admin/mentor.service";

export const IncubatorUserList = () => {
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (isInitLoad) {
      getMentors();
    }
    setIsInitLoad(false);
  });

  
  const getMentors = async () => {
    const mentorsResponse = await getAllMentors();
    if (mentorsResponse.data) {
      const courseResult = mentorsResponse.data.package.data;
      setMentors(courseResult)
    }
    console.log(mentors);
  }

  return (
    <div className="w-full">
      <Mentors mentors={mentors || []} />
    </div>
  );
};
