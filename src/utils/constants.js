export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.654293",
    bl_lng: "25.514642",
    tr_lat: "42.793449",
    tr_lng: "43.185981",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "ba291ecfc6msh03d1df469c5a627p171af5jsnd90250bab36c",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const headers = {
  "x-rapidapi-key": "ba291ecfc6msh03d1df469c5a627p171af5jsnd90250bab36c",
  "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  "Content-Type": "application/json",
};
