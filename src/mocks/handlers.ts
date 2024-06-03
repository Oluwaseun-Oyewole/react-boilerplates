import { http, HttpResponse } from 'msw';
import { BASE_URL } from '../services/endpoints';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`${BASE_URL}postsed`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 1,
      userId: 1,
      titles: 'Lorem Hello World!!!',
    });
  }),
];
