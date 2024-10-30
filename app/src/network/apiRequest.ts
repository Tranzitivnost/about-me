const PROJECT_ID = "about-me-6aeb1";
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

type Response<Field> = {
  name: string;
  fields: Field;
  createTime: Date;
  updateTime: Date;
};

function normalizeFields<T>(data): Response<T>[] {
  return data.map(item => {
    const transformedFields = {};

    Object.entries(item.fields).forEach(([key, value]) => {
      const valueType = Object.keys(value as any)[0];
      transformedFields[key] = (value as any)[valueType];
    });

    return {
      ...item,
      fields: transformedFields,
    };
  });
}

export async function apiRequest<FieldType>(
  url: string,
  options?: RequestInit,
): Promise<Response<FieldType>[]> {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  const data = await response.json();

  return normalizeFields<FieldType>(data.documents) as Response<FieldType>[];
}
