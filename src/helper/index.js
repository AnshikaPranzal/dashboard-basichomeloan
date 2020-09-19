// import { API } from "../backend";

export const GETALLLEADS = () => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/LeadsSummary`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiI3MjM0Y2FhMS0xNGEyLTQ0OWUtOGE3ZS02ZjE0N2M1ZGRkODAiLCJzdWIiOiJlODBmYmYwMS03ZTc4LTQzNmMtYThlZi02NWVkYWZhZTczYTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiYzg1YTU5MzctYjFkZi00Nzg3LTkyNDItOGU1OWIyZWJiYjUwIiwiY29nbml0bzp1c2VybmFtZSI6ImU4MGZiZjAxLTdlNzgtNDM2Yy1hOGVmLTY1ZWRhZmFlNzNhMCIsImN1c3RvbTpSb2xlSWQiOiJmYTMyNzAwMi03ZjUwLTQ3ZDEtYTYwMC00MTFkYTJlMWJkNTMiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNjkwODEyNzctMmUxOS00MDVmLTgyYjQtOGM3MzYwZDM1YzlhIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI2OTg1OTk3ZS02ODVjLTQyZDQtYWI3ZS02YjdjNTcxYzg4MjUiLCJhdXRoX3RpbWUiOjE2MDA1MjI2ODAsImN1c3RvbTpFbnRpdHlUeXBlIjoiRHNhIiwicGhvbmVfbnVtYmVyIjoiKzkxMTk4MTk5MDM2NzYiLCJleHAiOjE2MDA2MDU0ODAsImlhdCI6MTYwMDUyMjY4MCwiZW1haWwiOiJrYWx5YW5AYmFzaWNob21lbG9hbi5jb20ifQ.qfCTNeZqrghF2c4u9UCvfoZqH8yDA7zbkJWWtUFXF_r2oPjwvxSdcCgQx7z43RdQZaq7lnEm4_Oi3gCqN2ZTspiP5bun-YzbrbkoeGYOKSxlZ5arNPyvmgBo4cQQva_xwVRqelzBCLK7huzXXbhTeCcfAiCCdC-8kwNch6H2FEAnP7H_xXRtjGaIfCfezvroYFbqs_QQlx2BNOU0ivTiG34AzjLJGU1c476l9kgujqt5DKPo3ZRkIqkvyiDQGpdnBGwzG0VWqVEKxvaTw1OLbXrzNWAclKvmYlQyyCz9DGNSRURWzKZzSUXZtCAf_n1RQKRUFENKjaSso0_5nTaUwA`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiI3MjM0Y2FhMS0xNGEyLTQ0OWUtOGE3ZS02ZjE0N2M1ZGRkODAiLCJzdWIiOiJlODBmYmYwMS03ZTc4LTQzNmMtYThlZi02NWVkYWZhZTczYTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiYzg1YTU5MzctYjFkZi00Nzg3LTkyNDItOGU1OWIyZWJiYjUwIiwiY29nbml0bzp1c2VybmFtZSI6ImU4MGZiZjAxLTdlNzgtNDM2Yy1hOGVmLTY1ZWRhZmFlNzNhMCIsImN1c3RvbTpSb2xlSWQiOiJmYTMyNzAwMi03ZjUwLTQ3ZDEtYTYwMC00MTFkYTJlMWJkNTMiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNjkwODEyNzctMmUxOS00MDVmLTgyYjQtOGM3MzYwZDM1YzlhIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI2OTg1OTk3ZS02ODVjLTQyZDQtYWI3ZS02YjdjNTcxYzg4MjUiLCJhdXRoX3RpbWUiOjE2MDA1MjI2ODAsImN1c3RvbTpFbnRpdHlUeXBlIjoiRHNhIiwicGhvbmVfbnVtYmVyIjoiKzkxMTk4MTk5MDM2NzYiLCJleHAiOjE2MDA2MDU0ODAsImlhdCI6MTYwMDUyMjY4MCwiZW1haWwiOiJrYWx5YW5AYmFzaWNob21lbG9hbi5jb20ifQ.qfCTNeZqrghF2c4u9UCvfoZqH8yDA7zbkJWWtUFXF_r2oPjwvxSdcCgQx7z43RdQZaq7lnEm4_Oi3gCqN2ZTspiP5bun-YzbrbkoeGYOKSxlZ5arNPyvmgBo4cQQva_xwVRqelzBCLK7huzXXbhTeCcfAiCCdC-8kwNch6H2FEAnP7H_xXRtjGaIfCfezvroYFbqs_QQlx2BNOU0ivTiG34AzjLJGU1c476l9kgujqt5DKPo3ZRkIqkvyiDQGpdnBGwzG0VWqVEKxvaTw1OLbXrzNWAclKvmYlQyyCz9DGNSRURWzKZzSUXZtCAf_n1RQKRUFENKjaSso0_5nTaUwA`,
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
        Authorization: `Bearer eyJraWQiOiI2bldxK2NyWm43OFRzWnNqV0ZXK25RRXY4c1dxc1JzK1BNQm5OMHJPQ01ZPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206RW1wSWQiOiI3MjM0Y2FhMS0xNGEyLTQ0OWUtOGE3ZS02ZjE0N2M1ZGRkODAiLCJzdWIiOiJlODBmYmYwMS03ZTc4LTQzNmMtYThlZi02NWVkYWZhZTczYTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpJc0FkbWluIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfNkV0TzhkN01aIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjdXN0b206VXNlcklkIjoiYzg1YTU5MzctYjFkZi00Nzg3LTkyNDItOGU1OWIyZWJiYjUwIiwiY29nbml0bzp1c2VybmFtZSI6ImU4MGZiZjAxLTdlNzgtNDM2Yy1hOGVmLTY1ZWRhZmFlNzNhMCIsImN1c3RvbTpSb2xlSWQiOiJmYTMyNzAwMi03ZjUwLTQ3ZDEtYTYwMC00MTFkYTJlMWJkNTMiLCJhdWQiOiIxc29kbG1sYjg5NmJwY2x0cmJqZWxzc25xMyIsImV2ZW50X2lkIjoiNjkwODEyNzctMmUxOS00MDVmLTgyYjQtOGM3MzYwZDM1YzlhIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206T3JnYW5pemF0aW9uSWQiOiI2OTg1OTk3ZS02ODVjLTQyZDQtYWI3ZS02YjdjNTcxYzg4MjUiLCJhdXRoX3RpbWUiOjE2MDA1MjI2ODAsImN1c3RvbTpFbnRpdHlUeXBlIjoiRHNhIiwicGhvbmVfbnVtYmVyIjoiKzkxMTk4MTk5MDM2NzYiLCJleHAiOjE2MDA2MDU0ODAsImlhdCI6MTYwMDUyMjY4MCwiZW1haWwiOiJrYWx5YW5AYmFzaWNob21lbG9hbi5jb20ifQ.qfCTNeZqrghF2c4u9UCvfoZqH8yDA7zbkJWWtUFXF_r2oPjwvxSdcCgQx7z43RdQZaq7lnEm4_Oi3gCqN2ZTspiP5bun-YzbrbkoeGYOKSxlZ5arNPyvmgBo4cQQva_xwVRqelzBCLK7huzXXbhTeCcfAiCCdC-8kwNch6H2FEAnP7H_xXRtjGaIfCfezvroYFbqs_QQlx2BNOU0ivTiG34AzjLJGU1c476l9kgujqt5DKPo3ZRkIqkvyiDQGpdnBGwzG0VWqVEKxvaTw1OLbXrzNWAclKvmYlQyyCz9DGNSRURWzKZzSUXZtCAf_n1RQKRUFENKjaSso0_5nTaUwA`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};
