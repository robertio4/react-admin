import { fetchUtils } from 'react-admin';

const httpClient = fetchUtils.fetchJson;
const apiUrl = 'https://reqres.in/api/';

const UsersProvider = () => {
  const handleGetList = async (resource, params) => {
    const { page, perPage } = params.pagination;

    const url = new URL(`${apiUrl}${resource}`);

    if (page && perPage) {
      url.searchParams.append('page', page);
      url.searchParams.append('per_page', perPage);
    }

    const response = await httpClient(url.href);
    return response.json;
  };

  const handleGetOne = async (resource, params) => {
    const { id } = params;

    const url = new URL(`${apiUrl}${resource}`);

    if (id) {
      url.searchParams.append('id', id);
    }

    const response = await httpClient(url.href);
    return response.json;
  };

  const handleUpdate = async (resource, params) => {
    const { id } = params;

    const url = new URL(`${apiUrl}${resource}`);

    if (id) {
      url.searchParams.append('id', id);
    }

    const response = await httpClient(url.href, {
      method: 'PATCH',
      body: JSON.stringify(params.data)
    });
    return { data: response.json };
  };

  const handleCreate = async (resource, params) => {
    const { data } = params;

    const url = new URL(`${apiUrl}${resource}`);

    const response = await httpClient(url.href, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return { data: response.json };
  };

  const handleDelete = async (resource, params) => {
    const { id } = params;

    const url = new URL(`${apiUrl}${resource}`);

    if (id) {
      url.searchParams.append('id', id);
    }

    await httpClient(url.href, {
      method: 'DELETE'
    });
    return { data: {} };
  };

  return {
    getList: (resource, params) => handleGetList(resource, params),
    getOne: (resource, params) => handleGetOne(resource, params),
    update: (resource, params) => handleUpdate(resource, params),
    create: (resource, params) => handleCreate(resource, params),
    delete: (resource, params) => handleDelete(resource, params)
  };
};

export default UsersProvider;
