import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:4996",
  issuerBaseURL: "https://dev-1l1xwyeleiwmn68i.us.auth0.com",
  tokenSigningAlg: "RS256"
})

export default jwtCheck