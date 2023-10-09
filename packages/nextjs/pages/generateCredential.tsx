import React from 'react'
import { KeyDIDMethod, createAndSignCredentialJWT } from "@jpmorganchase/onyx-ssi-sdk";
import { privateKeyBufferFromString } from "../utils/convertions";
function generateCredential() {

const createVc = async () => {
  const didKey = new KeyDIDMethod();

  const issuerDidWithKeys = await didKey.generateFromPrivateKey(
    privateKeyBufferFromString("739b6ff017c0feae5d25ebcf5c88e4683a2b587748602c49d2ec5a49a2e3c2683dd84e0b19ffedafe1641cc35e6b7bb988c71ff841121512a65bb2352f644b8b")
  );

  const holderDidWithKeys = await didKey.generateFromPrivateKey(
    privateKeyBufferFromString("b00829d8d462b41eaf80ce170b29844110ffd95c3fd5d518e5c39e4723e38afb9a4f9a72bd38e11fc420d4bb0f1d0083acc68e3fe535b300714f1879f7e691d7")
  );

  const vcDidKey = (await didKey.create()).did;

  const credentialType = "PROOF_OF_NAME";

  const subjectData = {
    name: "Jessie Doe",
  };

  //vc id, expirationDate, credentialStatus, credentialSchema, etc
  const additionalParams = {
    id: vcDidKey,
  };

  console.log(
    `\nGenerating a signed verifiable Credential of type ${credentialType}\n`
  );

  const signedVc = await createAndSignCredentialJWT(
    issuerDidWithKeys,
    holderDidWithKeys.did,
    subjectData,
    [credentialType],
    additionalParams
  );

  console.log(signedVc);

  console.log("\nSaving signed VC JWT\n");
//   writeToFile(
//     path.resolve(VC_DIR_PATH, `${camelCase(credentialType)}.jwt`),
//     signedVc
//   );
};
  return (
    <button onClick={createVc}>generateCredential</button>
  )
}

export default generateCredential