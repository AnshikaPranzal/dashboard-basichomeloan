// import { API } from "../backend";

export const GETALLLEADS = () => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/LeadsSummary`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiI3MjM0Y2FhMS0xNGEyLTQ0OWUtOGE3ZS02ZjE0N2M1ZGRkODAiLCJzdWIiOiJlODBmYmYwMS03ZTc4LTQzNmMtYThlZi02NWVkYWZhZTczYTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiYzg1YTU5MzctYjFkZi00Nzg3LTkyNDItOGU1OWIyZWJiYjUwIiwiY29nbml0bzp1c2VybmFtZSI6ImU4MGZiZjAxLTdlNzgtNDM2Yy1hOGVmLTY1ZWRhZmFlNzNhMCIsImN1c3RvbTpSb2xlSWQiOiJmYTMyNzAwMi03ZjUwLTQ3ZDEtYTYwMC00MTFkYTJlMWJkNTMiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiZWUxMDAwNjEtNzBkYS00ODA3LTk4ZTctNGYyYmI2MDE0MDc4IiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI2OTg1OTk3ZS02ODVjLTQyZDQtYWI3ZS02YjdjNTcxYzg4MjUiLCJhdXRoX3RpbWUiOjE2MDAzNTEyMTUsImN1c3RvbTpFbnRpdHlUeXBlIjoiRHNhIiwicGhvbmVfbnVtYmVyIjoiKzkxMTk4MTk5MDM2NzYiLCJleHAiOjE2MDA0MzQwMTUsImlhdCI6MTYwMDM1MTIxNSwiZW1haWwiOiJrYWx5YW5AYmFzaWNob21lbG9hbi5jb20ifQ.in6YqfvVoSmHwbIoPFtuI-1FWZ7xsd872xkQHNcRtqpzti03Xl9cw1Vg472a_xv1RP1P4-Dxh7CIamI9VH2we6KB45BT8tqoC5p6y_klIoTb40ffqP7pQxf568onkQrknsYLSDmXajYthdhw7UOgvldCdC9ZR2XpEGzCdzGo1NKlCE51BCKbRTXjlOubfQZFViYuU_EDbZkBYpLeeX4YREgEb8ob-3hYGmFV33_GTv84QWosEWWacJNbNOHqMKyHyW79ITToiZnRvHJCceXz9IeqUJw78JWejR6GVS_bn6R5xEwgJ7jjqlia6Lw-Ga2Rsp-E2FA6CFptv93OyB710g`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiI3MjM0Y2FhMS0xNGEyLTQ0OWUtOGE3ZS02ZjE0N2M1ZGRkODAiLCJzdWIiOiJlODBmYmYwMS03ZTc4LTQzNmMtYThlZi02NWVkYWZhZTczYTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiYzg1YTU5MzctYjFkZi00Nzg3LTkyNDItOGU1OWIyZWJiYjUwIiwiY29nbml0bzp1c2VybmFtZSI6ImU4MGZiZjAxLTdlNzgtNDM2Yy1hOGVmLTY1ZWRhZmFlNzNhMCIsImN1c3RvbTpSb2xlSWQiOiJmYTMyNzAwMi03ZjUwLTQ3ZDEtYTYwMC00MTFkYTJlMWJkNTMiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiZWUxMDAwNjEtNzBkYS00ODA3LTk4ZTctNGYyYmI2MDE0MDc4IiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI2OTg1OTk3ZS02ODVjLTQyZDQtYWI3ZS02YjdjNTcxYzg4MjUiLCJhdXRoX3RpbWUiOjE2MDAzNTEyMTUsImN1c3RvbTpFbnRpdHlUeXBlIjoiRHNhIiwicGhvbmVfbnVtYmVyIjoiKzkxMTk4MTk5MDM2NzYiLCJleHAiOjE2MDA0MzQwMTUsImlhdCI6MTYwMDM1MTIxNSwiZW1haWwiOiJrYWx5YW5AYmFzaWNob21lbG9hbi5jb20ifQ.in6YqfvVoSmHwbIoPFtuI-1FWZ7xsd872xkQHNcRtqpzti03Xl9cw1Vg472a_xv1RP1P4-Dxh7CIamI9VH2we6KB45BT8tqoC5p6y_klIoTb40ffqP7pQxf568onkQrknsYLSDmXajYthdhw7UOgvldCdC9ZR2XpEGzCdzGo1NKlCE51BCKbRTXjlOubfQZFViYuU_EDbZkBYpLeeX4YREgEb8ob-3hYGmFV33_GTv84QWosEWWacJNbNOHqMKyHyW79ITToiZnRvHJCceXz9IeqUJw78JWejR6GVS_bn6R5xEwgJ7jjqlia6Lw-Ga2Rsp-E2FA6CFptv93OyB710g`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};
