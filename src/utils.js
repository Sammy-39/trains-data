export const loginApiCall = async (userName, password) => {
  try {
    const res = await fetch("https://indian-railway.vercel.app/api/login", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${userName}:${password}`)
      },
      method: "POST"
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getTrainsApiCall = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      " https://indian-railway.vercel.app/api/trains?type=SF&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
