/* eslint-disable @typescript-eslint/no-unsafe-member-access -- copied from existing implementation */
/* eslint-disable @typescript-eslint/no-explicit-any -- copied from existing implementation */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- copied from existing implementation */
export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;

const isObject = (obj: unknown) => obj && typeof obj === 'object';

/*
    From https://github.com/guardian/cql/blob/11836f504937df264bf075700873af15bc0d8c90/lib/cql/src/utils/merge.ts
*/

export function mergeDeep<A extends object, B extends object>(
	obj1: A,
	obj2: B,
): A & B {
	return [obj1, obj2].reduce((prev, obj) => {
		Object.keys(obj).forEach((key) => {
			const pVal = (prev as any)[key];
			const oVal = (obj as any)[key];

			if (isObject(pVal) && isObject(oVal)) {
				(prev as any)[key] = mergeDeep(pVal, oVal);
			} else {
				(prev as any)[key] = oVal;
			}
		});

		return prev;
	}, {}) as A & B;
}
