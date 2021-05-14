import { request as iceRequest } from 'ice';
import { AxiosRequestConfig } from 'axios';

interface IRequestData extends AxiosRequestConfig {
  url: string;
  backCheck?: boolean;
}

const request = (thatData: IRequestData) => {
  const { url, method, headers, params, data, responseType, backCheck = true } = thatData;

  console.log('backCheck', backCheck);

  let callBack = iceRequest(url, {
    method,
    headers,
    params,
    data,
    responseType,
  });
  console.log(callBack);
  // if(backCheck&&callBack.){
  //     callBack=
  // }
  return callBack;
};

export { request };
