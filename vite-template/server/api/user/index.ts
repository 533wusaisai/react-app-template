import { http } from '../../request';
/**
 * 登录
 */
export function login(data: any) {
  return http.get('../../../json/test.json', data);
}
