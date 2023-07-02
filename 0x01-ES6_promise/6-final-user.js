import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const arr = [];
  const response = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  response.forEach((res) => {
    arr.push({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : res.reason.toString(),
    });
  });
  return arr;
}
