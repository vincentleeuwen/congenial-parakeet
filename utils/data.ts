import axios from 'axios';

export async function getAllData<T>(url: string, data: T[]): Promise<T[]> {
  const response = await axios.get(url);
  const {
    data: { next, results },
  } = response;

  const mergedData: T[] = [...data, ...results];

  if (next) {
    return await getAllData(next, mergedData);
  }

  return mergedData;
}