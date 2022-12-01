export interface User {
	name: string;
}

export function useUsers(): User[] {
	/* console.log(`jdjdj`);  */// eslint-disable-line

	return [{ name: "Javi" }, { name: "Isma" }];
}
