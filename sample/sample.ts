import * as Soracom from "../";

async function main() {
  const authApi = new Soracom.AuthApi();
  const authResponse: Soracom.AuthResponse = (
    await authApi.auth({
      email: process.env.SORACOM_EMAIL,
      password: process.env.SORACOM_PASSWORD,
    })
  ).data;

  const auth = new Soracom.Configuration({
    apiKey: (name: string): string => {
      if (name == "X-Soracom-API-Key" && authResponse.apiKey) {
        return authResponse.apiKey;
      } else if (name == "X-Soracom-Token" && authResponse.token) {
        return authResponse.token;
      } else {
        return "";
      }
    },
  });

  try {
    const simApi = new Soracom.SimApi(auth);
    const sims: Soracom.Sim[] = (await simApi.listSims()).data;
    console.log(sims);
  } catch (err) {
    console.log(err);
  }
}

main();
