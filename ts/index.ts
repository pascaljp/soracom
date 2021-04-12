import * as Soracom from "./genfiles/index";

export async function GetSoracomConfiguration(auth: Soracom.AuthRequest, options?: any): Promise<Soracom.Configuration> {
  const authApi = new Soracom.AuthApi();
  const authResponse: Soracom.AuthResponse = (await authApi.auth(auth, options)).data;

  return new Soracom.Configuration({
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
}

export * from "./genfiles";
