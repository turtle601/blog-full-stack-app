import qs from 'qs';

export const buildLink = ({ username, tag, page }) => {
  const query = qs.stringify({ tag, page });
  return username ? `@${username}?${query}` : `/?${query}`;
};
