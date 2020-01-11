import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://reqres.in/api/';
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const url = new URL(`${apiUrl}${resource}`);

    if (page && perPage) {
      url.searchParams.append('page', page);
      url.searchParams.append('per_page', perPage);
    }

    return httpClient(url.href).then(({ json }) => {
      return json;
    });
  }
};
