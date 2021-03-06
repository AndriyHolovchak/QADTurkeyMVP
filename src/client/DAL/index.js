const API_HOST = "http://46.101.99.97:8080/erp-qad"


export const createDocumentApi = (data) => {
  return fetch(`${API_HOST}/api/document`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      },
  }).then(res => res.json())
    .then(res => {
        if(res.errorCode) {
            return Promise.reject(res);
        }
        return res;
    }, err => {
        return Promise.reject('Something went wrong')
    })
}

export const updateDocumentApi = (data) => {
  return fetch(`${API_HOST}/api/document/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      },
  }).then(res => res.json())
    .then(res => {
        if(res.errorCode) {
            return Promise.reject(res);
        }
        return res;
    }, err => {
        return Promise.reject('Something went wrong')
    })
}

export const getDocumentsApi = () => {
  return fetch(`${API_HOST}/api/document?sort=updated,desc`).then(res => res.json())
    .then(res => {
        if(res.errorCode) {
            return Promise.reject(res);
        }
        return res;
    }, err => {
        return Promise.reject('Something went wrong')
    })
}

export const getDocumentByIdApi = (id) => {
  return fetch(`${API_HOST}/api/document/${id}`).then(res => res.json())
    .then(res => {
        if(res.errorCode) {
            return Promise.reject(res);
        }
        return res;
    }, err => {
        return Promise.reject('Something went wrong')
    })
}

export const deleteDocumentApi = (id) => {
  return fetch(`${API_HOST}/api/document/${id}`, {
      method: 'DELETE'
  }).then(res => {
      return res;
  }, err => {
      return Promise.reject('Something went wrong')
  })
}
