# @pascaljp/soracom

> A library to provide TypeScript / JavaScript API to access [Soracom APIs](https://developers.soracom.io/en/api/).
> Most of the code is auto generated from the openapi YAML file, so all APIs are supported.
> If there is any bug or if there is any API that is not supported by this library, please report the problem on [GitHub](https://github.com/pascaljp/soracom/issues).

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm i -S @pascaljp/soracom
```

## Usage example

```typescript
import * as Soracom from "@pascaljp/soracom";

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
```

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/@pascaljp/soracom.svg
[npm-url]: https://npmjs.org/package/@pascaljp/soracom
