interface User{
  email: string;
  name: string;
}

export async function saveUser(data: User) {
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