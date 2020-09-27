// import { API } from "../backend";
// const token = localStorage.getItem("userToken");

export const GETALLLEADS = () => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/LeadsSummary`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMTU0OGNlYWMtNTk4Yi00NTJmLThmMDctNWQ0N2U2ODAwZDMxIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExOTQ1MjUsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTI3NzMyNSwiaWF0IjoxNjAxMTk0NTI1LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.UQPiTTNUqt9tq0i5bdMf5xvzXhLD3SPpHJ94c4Mv0oiiTUWhPgGNUI7cG2pVXaXT2MZVRv52vaonrjvb9KGUDU7q-O4oUD2P75YwKlFFbTovpviOUdD3-rmgZAOUevWJiJZkbINgDFj2AzkHwcPsdNPSu8xv8EiYdMTYK1KzQF2C9ej8raV5zKSQeaF5Z84C98K4O4ltt5T_r2Hc3Ii4P7wVqqVouHBcySBfRETvQoBiMG_oqFzZJhivdl-iasMGTxUtu_xUzzp7F-HFNas_Rv9j4ZVHszLVt9pv8HtekEMs5DwoDYgRp21JZS6j_qGjW6auyeaewHwHlhrP7RV9VA`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMTU0OGNlYWMtNTk4Yi00NTJmLThmMDctNWQ0N2U2ODAwZDMxIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExOTQ1MjUsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTI3NzMyNSwiaWF0IjoxNjAxMTk0NTI1LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.UQPiTTNUqt9tq0i5bdMf5xvzXhLD3SPpHJ94c4Mv0oiiTUWhPgGNUI7cG2pVXaXT2MZVRv52vaonrjvb9KGUDU7q-O4oUD2P75YwKlFFbTovpviOUdD3-rmgZAOUevWJiJZkbINgDFj2AzkHwcPsdNPSu8xv8EiYdMTYK1KzQF2C9ej8raV5zKSQeaF5Z84C98K4O4ltt5T_r2Hc3Ii4P7wVqqVouHBcySBfRETvQoBiMG_oqFzZJhivdl-iasMGTxUtu_xUzzp7F-HFNas_Rv9j4ZVHszLVt9pv8HtekEMs5DwoDYgRp21JZS6j_qGjW6auyeaewHwHlhrP7RV9VA`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMTU0OGNlYWMtNTk4Yi00NTJmLThmMDctNWQ0N2U2ODAwZDMxIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExOTQ1MjUsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTI3NzMyNSwiaWF0IjoxNjAxMTk0NTI1LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.UQPiTTNUqt9tq0i5bdMf5xvzXhLD3SPpHJ94c4Mv0oiiTUWhPgGNUI7cG2pVXaXT2MZVRv52vaonrjvb9KGUDU7q-O4oUD2P75YwKlFFbTovpviOUdD3-rmgZAOUevWJiJZkbINgDFj2AzkHwcPsdNPSu8xv8EiYdMTYK1KzQF2C9ej8raV5zKSQeaF5Z84C98K4O4ltt5T_r2Hc3Ii4P7wVqqVouHBcySBfRETvQoBiMG_oqFzZJhivdl-iasMGTxUtu_xUzzp7F-HFNas_Rv9j4ZVHszLVt9pv8HtekEMs5DwoDYgRp21JZS6j_qGjW6auyeaewHwHlhrP7RV9VA`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiMTU0OGNlYWMtNTk4Yi00NTJmLThmMDctNWQ0N2U2ODAwZDMxIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExOTQ1MjUsImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTI3NzMyNSwiaWF0IjoxNjAxMTk0NTI1LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.UQPiTTNUqt9tq0i5bdMf5xvzXhLD3SPpHJ94c4Mv0oiiTUWhPgGNUI7cG2pVXaXT2MZVRv52vaonrjvb9KGUDU7q-O4oUD2P75YwKlFFbTovpviOUdD3-rmgZAOUevWJiJZkbINgDFj2AzkHwcPsdNPSu8xv8EiYdMTYK1KzQF2C9ej8raV5zKSQeaF5Z84C98K4O4ltt5T_r2Hc3Ii4P7wVqqVouHBcySBfRETvQoBiMG_oqFzZJhivdl-iasMGTxUtu_xUzzp7F-HFNas_Rv9j4ZVHszLVt9pv8HtekEMs5DwoDYgRp21JZS6j_qGjW6auyeaewHwHlhrP7RV9VA`,
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
