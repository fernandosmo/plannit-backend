import jwt, { SignOptions } from "jsonwebtoken";
import config from "config";

// Sign Access or Refresh Token
export const signJwt = (
  payload: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options: SignOptions
) => {
  // usado o Buffer module do Node.js para decodificar a private key codificada para uma string ASCII
  const privateKey = Buffer.from(
    config.get<string>(keyName),
    "base64"
  ).toString("ascii");
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

// Verify Access or Refresh Token
export const verifyJwt = <T>(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | null => {
  try {
    // usado o Buffer module do Node.js para decodificar a public key codificada para uma string ASCII
    const publicKey = Buffer.from(
      config.get<string>(keyName),
      "base64"
    ).toString("ascii");
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (error) {
    return null;
  }
};
