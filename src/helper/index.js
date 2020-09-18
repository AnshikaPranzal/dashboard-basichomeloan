// import { API } from "../backend";

export const GETALLLEADS = () => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/LeadsSummary`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiI3MjM0Y2FhMS0xNGEyLTQ0OWUtOGE3ZS02ZjE0N2M1ZGRkODAiLCJzdWIiOiJlODBmYmYwMS03ZTc4LTQzNmMtYThlZi02NWVkYWZhZTczYTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiYzg1YTU5MzctYjFkZi00Nzg3LTkyNDItOGU1OWIyZWJiYjUwIiwiY29nbml0bzp1c2VybmFtZSI6ImU4MGZiZjAxLTdlNzgtNDM2Yy1hOGVmLTY1ZWRhZmFlNzNhMCIsImN1c3RvbTpSb2xlSWQiOiJmYTMyNzAwMi03ZjUwLTQ3ZDEtYTYwMC00MTFkYTJlMWJkNTMiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNWI1Yjc5OWEtMzI0My00NDZlLWEwYzEtMzAwOTU1OWRmZmUyIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI2OTg1OTk3ZS02ODVjLTQyZDQtYWI3ZS02YjdjNTcxYzg4MjUiLCJhdXRoX3RpbWUiOjE2MDA0MzUwNTMsImN1c3RvbTpFbnRpdHlUeXBlIjoiRHNhIiwicGhvbmVfbnVtYmVyIjoiKzkxMTk4MTk5MDM2NzYiLCJleHAiOjE2MDA1MTc4NTMsImlhdCI6MTYwMDQzNTA1MywiZW1haWwiOiJrYWx5YW5AYmFzaWNob21lbG9hbi5jb20ifQ.LxWIfLlsYqJ9wBmvLxWJfnUaO3KRLMHSPb1ZJFmba36fdpIAy4BwuojW1Y2jKkd_yFwDI0RhnVEpbEYzWSoug6CG3nwmCr4QrFBusuixIu2UAlJp4D_VMZTlLfOi9BDrQnlEXktH8KRBnJCl6yIxDjAJI9l6o-CHf-jeBLiacWA3n6F31jg0DAfd9YtP4ZwGcnPH3ZxQOT1_RKvZ-rj4sf5kwBNh0U4_kVTEhzgfCoWR4fBLcvy_TKe1g2zX8U5t5sG08ykoG9aDfMHSk8TMlK81Am10Al2KhUv2bYRnZ8WyExLSgI8B18aOz8JDgSVvtQif_r2ATiLgJtCaO5mWXQ`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiI3MjM0Y2FhMS0xNGEyLTQ0OWUtOGE3ZS02ZjE0N2M1ZGRkODAiLCJzdWIiOiJlODBmYmYwMS03ZTc4LTQzNmMtYThlZi02NWVkYWZhZTczYTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiYzg1YTU5MzctYjFkZi00Nzg3LTkyNDItOGU1OWIyZWJiYjUwIiwiY29nbml0bzp1c2VybmFtZSI6ImU4MGZiZjAxLTdlNzgtNDM2Yy1hOGVmLTY1ZWRhZmFlNzNhMCIsImN1c3RvbTpSb2xlSWQiOiJmYTMyNzAwMi03ZjUwLTQ3ZDEtYTYwMC00MTFkYTJlMWJkNTMiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNWI1Yjc5OWEtMzI0My00NDZlLWEwYzEtMzAwOTU1OWRmZmUyIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI2OTg1OTk3ZS02ODVjLTQyZDQtYWI3ZS02YjdjNTcxYzg4MjUiLCJhdXRoX3RpbWUiOjE2MDA0MzUwNTMsImN1c3RvbTpFbnRpdHlUeXBlIjoiRHNhIiwicGhvbmVfbnVtYmVyIjoiKzkxMTk4MTk5MDM2NzYiLCJleHAiOjE2MDA1MTc4NTMsImlhdCI6MTYwMDQzNTA1MywiZW1haWwiOiJrYWx5YW5AYmFzaWNob21lbG9hbi5jb20ifQ.LxWIfLlsYqJ9wBmvLxWJfnUaO3KRLMHSPb1ZJFmba36fdpIAy4BwuojW1Y2jKkd_yFwDI0RhnVEpbEYzWSoug6CG3nwmCr4QrFBusuixIu2UAlJp4D_VMZTlLfOi9BDrQnlEXktH8KRBnJCl6yIxDjAJI9l6o-CHf-jeBLiacWA3n6F31jg0DAfd9YtP4ZwGcnPH3ZxQOT1_RKvZ-rj4sf5kwBNh0U4_kVTEhzgfCoWR4fBLcvy_TKe1g2zX8U5t5sG08ykoG9aDfMHSk8TMlK81Am10Al2KhUv2bYRnZ8WyExLSgI8B18aOz8JDgSVvtQif_r2ATiLgJtCaO5mWXQ`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};
