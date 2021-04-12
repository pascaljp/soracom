all:
	make -C ts
	npx typescript ts/index.ts --declaration --emitDeclarationOnly --outDir types
	tsc ts/index.ts --outDir js

clean:
	make clean -C ts
	rm -r js types
