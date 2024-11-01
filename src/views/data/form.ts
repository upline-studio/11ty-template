type Field = {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value?: string | number
  state?: 'invalid' | 'success'
  error?: string
  attrs?: Record<string, string>
};

export const registration: Field[] = [
  {
    type: 'text',
    label: 'Name',
    value: 'test name',
    attrs: { readonly: '' },
  },
  {
    type: 'email',
    label: 'Email',
    state: 'success',
    value: 'test@test.test',
  },
  {
    type: 'password',
    label: 'Password',
    attrs: { required: '' },
    state: 'invalid',
    error: 'empty field',
  },
  {
    type: 'password',
    label: 'Confirm Password',
    attrs: { required: '' },
  },
  {
    type: 'number',
    label: 'Age',
    attrs: { disabled: '' },
  },
  {
    type: 'text',
    label: 'Address',
  },
];
