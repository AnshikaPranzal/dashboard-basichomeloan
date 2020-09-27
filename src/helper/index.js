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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNWIwYTA4ODktNTU4ZS00NTY0LWI3ZTUtMGU5NmE2NzRlNmNjIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExMjExNjksImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTIwMzk2OSwiaWF0IjoxNjAxMTIxMTY5LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.VBdjNEZVE-73q9U6zL0UvbxrhiO__8UwmVgv6NGGzpX1eAR7FtX90m2USa9xdTOFDfo69svTj0YauUe6ccj1XwpViwInMYmaINnfdOrEN9YUtp-L_DI5djTV67gho6Fb03nayKp-1fTaSkFTy-DegvH7x55NZHxLgE7Oge26IfOT36ZS-GzvW6tts5Aah1m6E2ZfXsJjFg9wFSwwaZeTahkzF2f5aPMaXIY-ZMMOwqxu7JG7M02SfJnLLjJ7GcSBya4RIFE6ykXQDs1-RwkKqNbB5IdLCCzUPwPhLE2y2NrKt9pStXJbRDcL5vC-6hPoU98hgRJemHiyecP2z5KIdw`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNWIwYTA4ODktNTU4ZS00NTY0LWI3ZTUtMGU5NmE2NzRlNmNjIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExMjExNjksImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTIwMzk2OSwiaWF0IjoxNjAxMTIxMTY5LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.VBdjNEZVE-73q9U6zL0UvbxrhiO__8UwmVgv6NGGzpX1eAR7FtX90m2USa9xdTOFDfo69svTj0YauUe6ccj1XwpViwInMYmaINnfdOrEN9YUtp-L_DI5djTV67gho6Fb03nayKp-1fTaSkFTy-DegvH7x55NZHxLgE7Oge26IfOT36ZS-GzvW6tts5Aah1m6E2ZfXsJjFg9wFSwwaZeTahkzF2f5aPMaXIY-ZMMOwqxu7JG7M02SfJnLLjJ7GcSBya4RIFE6ykXQDs1-RwkKqNbB5IdLCCzUPwPhLE2y2NrKt9pStXJbRDcL5vC-6hPoU98hgRJemHiyecP2z5KIdw`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNWIwYTA4ODktNTU4ZS00NTY0LWI3ZTUtMGU5NmE2NzRlNmNjIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExMjExNjksImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTIwMzk2OSwiaWF0IjoxNjAxMTIxMTY5LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.VBdjNEZVE-73q9U6zL0UvbxrhiO__8UwmVgv6NGGzpX1eAR7FtX90m2USa9xdTOFDfo69svTj0YauUe6ccj1XwpViwInMYmaINnfdOrEN9YUtp-L_DI5djTV67gho6Fb03nayKp-1fTaSkFTy-DegvH7x55NZHxLgE7Oge26IfOT36ZS-GzvW6tts5Aah1m6E2ZfXsJjFg9wFSwwaZeTahkzF2f5aPMaXIY-ZMMOwqxu7JG7M02SfJnLLjJ7GcSBya4RIFE6ykXQDs1-RwkKqNbB5IdLCCzUPwPhLE2y2NrKt9pStXJbRDcL5vC-6hPoU98hgRJemHiyecP2z5KIdw`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiJkOTQ2NjZkNi1hNzQyLTQ5NzMtODJlYi1hYzljMGFhMDhjZmYiLCJzdWIiOiJiYjg4ZDBjNi1lMGY2LTRlZTEtOGM0Ny1iNTJiNTUxMTRkMGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiMTEwOThkNjYtOWNkZi00ZjlhLWJkM2UtNDhjNDE2ODUzODZhIiwiY29nbml0bzp1c2VybmFtZSI6ImJiODhkMGM2LWUwZjYtNGVlMS04YzQ3LWI1MmI1NTExNGQwYSIsImN1c3RvbTpSb2xlSWQiOiJmOTExYjM4Yi0wY2ZiLTQyYmEtYWNkNS01MTE4ODZiMWZlN2YiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNWIwYTA4ODktNTU4ZS00NTY0LWI3ZTUtMGU5NmE2NzRlNmNjIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI0MTE0Y2VhYS03MmMwLTRkOGUtOTljNS0wMWM1MDYwMjBiNTEiLCJhdXRoX3RpbWUiOjE2MDExMjExNjksImN1c3RvbTpFbnRpdHlUeXBlIjoiQmFzaWMiLCJwaG9uZV9udW1iZXIiOiIrOTEwOTgxOTkwMzY3NiIsImV4cCI6MTYwMTIwMzk2OSwiaWF0IjoxNjAxMTIxMTY5LCJlbWFpbCI6ImFkbWluQGJhc2ljaG9tZWxvYW5zLmNvbSJ9.VBdjNEZVE-73q9U6zL0UvbxrhiO__8UwmVgv6NGGzpX1eAR7FtX90m2USa9xdTOFDfo69svTj0YauUe6ccj1XwpViwInMYmaINnfdOrEN9YUtp-L_DI5djTV67gho6Fb03nayKp-1fTaSkFTy-DegvH7x55NZHxLgE7Oge26IfOT36ZS-GzvW6tts5Aah1m6E2ZfXsJjFg9wFSwwaZeTahkzF2f5aPMaXIY-ZMMOwqxu7JG7M02SfJnLLjJ7GcSBya4RIFE6ykXQDs1-RwkKqNbB5IdLCCzUPwPhLE2y2NrKt9pStXJbRDcL5vC-6hPoU98hgRJemHiyecP2z5KIdw`,
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
