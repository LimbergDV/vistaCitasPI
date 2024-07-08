const token = import.meta.env.VITE_TOKEN;

//TODO para los métodos POST
export function useFetchPOST(url, formData) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch(url, options).then((res) => {
    console.log(res);
  });
}

//TODO para los métodos POST tabla CITAS(BLOB)
export function useFetchBLOB(url, formData) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  };

  const res = fetch(url, options);
  return res;
}
