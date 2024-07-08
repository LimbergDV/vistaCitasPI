const token = import.meta.env.VITE_TOKEN;

const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

//Fetch para GET'S
export function fetchData(url, options) {
  const promise = fetch(url, options)
    .then((response) => response.json())
    .then((json) => json);

  return getSuspender(promise);
}

//Fetch para uso GENERAL
export function fetchDataG(url, formData) {

    const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    };
    
    const promise = fetch(url, options)
      .then((response) => response.json())
      .then((json) => json);
  
    return getSuspender(promise);
}

//Fetch para blob get
export function fetchDataBLOB(url, formData) {

    const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: formData,
    };
    
    const promise = fetch(url, options)
      .then((response) => response.json())
      .then((json) => json);
  
    return getSuspender(promise);
}
