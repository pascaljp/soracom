import * as Soracom from "../";

async function main() {
  const configuration: Soracom.Configuration = await Soracom.GetSoracomConfiguration({
    email: process.env.SORACOM_EMAIL,
    password: process.env.SORACOM_PASSWORD,
  });

  try {
    const simApi = new Soracom.SimApi(configuration);
    const sims: Soracom.Sim[] = (await simApi.listSims()).data;
    console.log(sims);
  } catch (err) {
    console.error(err);
  }
}

main();
