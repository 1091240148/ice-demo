import { request } from '@/utils/request';

interface INumber {
  phone: string;
  pwd?: string;
  code?: string;
}

export default {
  state: {
    name: 'default',
    department: '',
    avatar: '',
    userid: null,
  },
  effects: (dispatch) => ({
    async login() {
      const res = await request({
        url: '/api/doLogin',
      });
      // console.log(res);
      if (res.status === 'SUCCESS') {
      }
    },
  }),

  reducers: {
    update(prevState: INumber, payload: INumber) {
      // console.log("prevState",prevState)
      // console.log("payload",payload)
      return { ...prevState, ...payload };
    },
  },
};
