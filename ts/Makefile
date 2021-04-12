all: soracom-api.en.yaml
	npx @openapitools/openapi-generator-cli generate -g typescript-axios -i soracom-api.en.yaml -o genfiles --additional-properties=modelPropertyNaming=camelCase,supportsES6=true,withInterfaces=true,typescriptThreePlus=true

soracom-api.en.yaml:
	curl https://raw.githubusercontent.com/soracom/soracom-cli/master/generators/assets/soracom-api.en.yaml -O

clean:
	rm soracom-api.en.yaml
	rm -r genfiles
