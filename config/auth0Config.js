import {auth} from "express-oauth2-jwt-bearer"
const baseurl = process.env.REACT_APP_DOMAIN
const jwtCheck = auth({
  audience: "http://localhost:4996",
  issuerBaseURL: `https://${baseurl}`,
  tokenSigningAlg: "RS256"
})

export default jwtCheck