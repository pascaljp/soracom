all: ts
	tsc ts/genfiles/index.ts --outDir js

ts:
	make -C ts
