export const delay = (time: number) => new Promise((resolve) => setTimeout(() => resolve(''), time));

interface IList {
  title: string;
  messageType: string;
  changeTime: string;
  createMan: string;
}

interface IGetList {
  page: number | string;
  pageNumber?: number | string;
}

type IState = IList[];

const messageTypeArr = [
  {
    label: '政策',
    value: '0',
  },
  {
    label: '通告',
    value: '1',
  },
  {
    label: '新闻',
    value: '2',
  },
  {
    label: '动态',
    value: '3',
  },
  {
    label: '要点',
    value: '4',
  },
];

export default {
  state: {
    list: [{ title: '示例标题', messageType: '2', changeTime: '2020-10-01 10:22:22', createMan: '张旭豪' }],
    messageTypeArr,
  },
  effects: (dispatch) => ({
    async getTask(): Promise<void> {
      const taskList = localStorage.getItem('taskList') || '[]';
      const list = JSON.parse(taskList);
      await delay(600);
      const data = await dispatch.list.get(list);
      return data.payload;
    },
    // async addTask(task: IList): Promise<void> {
    //   // fetch API to add task
    //   await delay(600);
    //   // update store
    //   dispatch.list.add([task]);
    // },
    // async removeTask(taskIndex: number): Promise<void> {
    //   // fetch API to remove task
    //   await delay(600);
    //   // update store
    //   dispatch.list.remove(taskIndex);
    // },
  }),
  reducers: {
    get(prevState, list) {
      //返回修改state树
      return {
        ...prevState,
        list,
      };
    },
    // add(prevState: IState, task: IState): IState {
    //   return [...prevState, ...task];
    // },
    // remove(prevState: IState, taskIndex: number): IState {
    //   const newState = [...prevState];
    //   newState.splice(taskIndex, 1);
    //   return newState;
    // },
  },
};
