export interface ContactResource {
  _id: string;
  imageUrl: string;
  name: string;
  lastname: string;
  lastSeenAt: string;
}

export interface ContactCreationResource {
  imageUrl: string;
  name: string;
  lastname: string;
}

export interface FormState {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
