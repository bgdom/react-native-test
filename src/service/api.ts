import { UserData, UserRegister } from "../models/useSliceData";

export async function saveUser(data: UserRegister): Promise<UserData> {
  const result = await fetch('http://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (result.status === 201)
    return await result.json()
  return Promise.reject('save error');
}