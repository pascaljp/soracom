all: ts
	tsc ts/genfiles/index.ts --outDir js
	npx typescript ts/genfiles/*.ts --declaration --emitDeclarationOnly --outDir types

ts:
	make -C ts
