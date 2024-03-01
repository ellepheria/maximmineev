export interface Admin {
	id?: string;
	password?: string;
}

export interface AdminSchema {
	authData?: Admin;
}
