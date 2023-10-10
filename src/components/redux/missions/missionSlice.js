import { createAsyncThunk } from "@reduxjs/toolkit";

const DISPLAY_MISSIONS = "space_travelers/missions/DISPLAY_MISSIONS";
const JOIN_MISSION = "space_travelers/missions/JOIN_MISSION";
const LEAVE_MISSION = "space_travelers/missions/LEAVE_MISSION";
const URL = "https://api.spacexdata.com/v3/missions";

export const displayMissions = createAsyncThunk(DISPLAY_MISSIONS, async () => {
  const result = [];
  const response = await fetch(URL);
  const data = await response.json();
  data.forEach((element) => {
    result.push({
      id: element.mission_id,
      name: element.mission_name,
      description: element.description,
      joined: false,
    });
  });
  return result;
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});
