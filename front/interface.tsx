export interface IInputFormProps {
  handleFormSubmit: (e: React.SyntheticEvent) => void;
  handleContentsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contents: string;
}

export interface IUserInfo {
  usr?: string;
  time?: string;
  msg?: string;
}
