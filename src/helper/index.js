// import { API } from "../backend";
// const token = localStorage.getItem("userToken");

export const GETALLLEADS = () => {
  const ev = encodeURIComponent({
    PageNumber: 1,
    PageSize: 1000,
  })
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/LeadsSummary/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMjVkYjVhMjQtZmE0Yy00NjEzLTgxOTQtYjFhMTc3NjgxYjUwIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDEyNzE1NjQsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTM1NDM2NCwiaWF0IjoxNjAxMjcxNTY0LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.fZEEgO484RLaokrwqSPCBLfiPuGp7WvDrn8-nFKhby_rlTYEK3Yr8IndhiiCo-D1U9FYjG-hY-iGhMT3FfUmDURRjrZO2GVdEIvdpeg7Sq3RYD55AUzkTgyzErbmuuF1Q1XfcYsk85Au0s2TJAF8mP_YzE9xe3moJr1vV4kibAnmHP_cR_RFp7zJa4eEz7YFLSWGZSAHXzTJHUr0Jj_hKueLi_LZDNCTpoTzIjYxPMxzo9l-r53IUePqenFp1TUAF8P1jg8EB1iT4u-uIcUiUSk4WUEQkulPUM3T3SvaLKIrSncz4GM4r4FewcFsxgh0jPtxEDUCm6UGWx_XbN8MCw`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

// import { API } from "../backend";

export const GETAPPLICATION = (id) => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/${id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMjVkYjVhMjQtZmE0Yy00NjEzLTgxOTQtYjFhMTc3NjgxYjUwIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDEyNzE1NjQsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTM1NDM2NCwiaWF0IjoxNjAxMjcxNTY0LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.fZEEgO484RLaokrwqSPCBLfiPuGp7WvDrn8-nFKhby_rlTYEK3Yr8IndhiiCo-D1U9FYjG-hY-iGhMT3FfUmDURRjrZO2GVdEIvdpeg7Sq3RYD55AUzkTgyzErbmuuF1Q1XfcYsk85Au0s2TJAF8mP_YzE9xe3moJr1vV4kibAnmHP_cR_RFp7zJa4eEz7YFLSWGZSAHXzTJHUr0Jj_hKueLi_LZDNCTpoTzIjYxPMxzo9l-r53IUePqenFp1TUAF8P1jg8EB1iT4u-uIcUiUSk4WUEQkulPUM3T3SvaLKIrSncz4GM4r4FewcFsxgh0jPtxEDUCm6UGWx_XbN8MCw`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

export const getDocConfig = () => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/DocConfig/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMjVkYjVhMjQtZmE0Yy00NjEzLTgxOTQtYjFhMTc3NjgxYjUwIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDEyNzE1NjQsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTM1NDM2NCwiaWF0IjoxNjAxMjcxNTY0LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.fZEEgO484RLaokrwqSPCBLfiPuGp7WvDrn8-nFKhby_rlTYEK3Yr8IndhiiCo-D1U9FYjG-hY-iGhMT3FfUmDURRjrZO2GVdEIvdpeg7Sq3RYD55AUzkTgyzErbmuuF1Q1XfcYsk85Au0s2TJAF8mP_YzE9xe3moJr1vV4kibAnmHP_cR_RFp7zJa4eEz7YFLSWGZSAHXzTJHUr0Jj_hKueLi_LZDNCTpoTzIjYxPMxzo9l-r53IUePqenFp1TUAF8P1jg8EB1iT4u-uIcUiUSk4WUEQkulPUM3T3SvaLKIrSncz4GM4r4FewcFsxgh0jPtxEDUCm6UGWx_XbN8MCw`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

export const approveOSV = (applicationId, application) => {
  console.log(application);
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Application/Activity/${applicationId}/OSV`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMjVkYjVhMjQtZmE0Yy00NjEzLTgxOTQtYjFhMTc3NjgxYjUwIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDEyNzE1NjQsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTM1NDM2NCwiaWF0IjoxNjAxMjcxNTY0LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.fZEEgO484RLaokrwqSPCBLfiPuGp7WvDrn8-nFKhby_rlTYEK3Yr8IndhiiCo-D1U9FYjG-hY-iGhMT3FfUmDURRjrZO2GVdEIvdpeg7Sq3RYD55AUzkTgyzErbmuuF1Q1XfcYsk85Au0s2TJAF8mP_YzE9xe3moJr1vV4kibAnmHP_cR_RFp7zJa4eEz7YFLSWGZSAHXzTJHUr0Jj_hKueLi_LZDNCTpoTzIjYxPMxzo9l-r53IUePqenFp1TUAF8P1jg8EB1iT4u-uIcUiUSk4WUEQkulPUM3T3SvaLKIrSncz4GM4r4FewcFsxgh0jPtxEDUCm6UGWx_XbN8MCw`,
      },
      body: JSON.stringify(application),
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

export const addItem = (id, next) => {
  let user = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
  }

  user = JSON.parse(localStorage.getItem("user"));
  // localStorage.setItem("cart",JSON.stringify(cart))
  next();
};

export const removeItem = (id) => {
  let user = {};
  if (typeof window !== undefined) {
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
    var id = localStorage.getItem("id");
    var accepted = localStorage.getItem("Accepted");
    var notaccepted = localStorage.getItem("NotAccepted");
  }
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: id,
      accepted: "true",
      notaccepted: "true",
    })
  );
  // localStorage.setItem("cart",JSON.stringify(cart))
  return user;
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
};

export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("user");
    next();
  }
};
