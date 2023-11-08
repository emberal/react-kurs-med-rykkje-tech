export const fetchNowcast = async ({ lat, lon }) => {
  const url = `https://api.met.no/weatherapi/nowcast/2.0/complete?lat=${lat}&lon=${lon}`; // docs: https://api.met.no/weatherapi/documentation

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Could not fetch nowcast data:", error);
  }
};

export const locations = {
  Bergen: {
    lat: 60.3913,
    lon: 5.3221,
  },
};
