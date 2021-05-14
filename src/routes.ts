import UserLayout from '@/layouts/UserLayout';
import Login from '@/pages/demo/Login';
import Register from '@/pages/demo/Register';
import BasicLayout from '@/layouts/BasicLayout';
import Solution from '@/pages/demo/Solution';
import Analysis from '@/pages/demo/Analysis';
import Monitor from '@/pages/demo/Monitor';
import Workplace from '@/pages/demo/Workplace';
import FormBasic from '@/pages/demo/FormBasic';
import FormTwo from '@/pages/demo/FormTwo';
import FormThree from '@/pages/demo/FormThree';
import FormFour from '@/pages/demo/FormFour';
import FormStep from '@/pages/demo/FormStep';
import FormClassified from '@/pages/demo/FormClassified';
import FormHierarchical from '@/pages/demo/FormHierarchical';
import FormGroup from '@/pages/demo/FormGroup';
import FlowGroup from '@/pages/demo/FlowGroup';
import BasicDetailPage from '@/pages/demo/BasicDetailPage';
import Advanced from '@/pages/demo/Advanced';
import BasicListPage from '@/pages/demo/BasicListPage';
import CardListPage from '@/pages/demo/CardListPage';
import FusionFilterTable from '@/pages/demo/FusionFilterTable';
import FusionMutilcolTable from '@/pages/demo/FusionMutilcolTable';
import FusionSinglecolTable from '@/pages/demo/FusionSinglecolTable';
import FusionExpandTable from '@/pages/demo/FusionExpandTable';
import FusionActionTable from '@/pages/demo/FusionActionTable';
import FusionMergecellTable from '@/pages/demo/FusionMergecellTable';
import FusionSingletreeTable from '@/pages/demo/FusionSingletreeTable';
import FusionDialogTable from '@/pages/demo/FusionDialogTable';
import TableListPage from '@/pages/demo/TableListPage';
import FeedbackFail from '@/pages/demo/FeedbackFail';
import FeedbackSuccess from '@/pages/demo/FeedbackSuccess';
import FeedbackForbidden from '@/pages/demo/FeedbackForbidden';
import FeedbackNotFound from '@/pages/demo/FeedbackNotFound';
import FeedbackServerError from '@/pages/demo/FeedbackServerError';
import Settings from '@/pages/demo/Settings';
import Person from '@/pages/demo/Person';


import Test from '@pages/Test';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/solution',
        component: Solution,
      },
      {
        path: '/dashboard/analysis',
        component: Analysis,
      },
      {
        path: '/dashboard/monitor',
        component: Monitor,
      },
      {
        path: '/dashboard/workplace',
        component: Workplace,
      },
      {
        path: '/form/basic',
        component: FormBasic,
      },
      {
        path: '/form/two',
        component: FormTwo,
      },
      {
        path: '/form/three',
        component: FormThree,
      },
      {
        path: '/form/four',
        component: FormFour,
      },
      {
        path: '/form/step',
        component: FormStep,
      },
      {
        path: '/form/classified',
        component: FormClassified,
      },
      {
        path: '/form/hierarchical',
        component: FormHierarchical,
      },
      {
        path: '/form/group',
        component: FormGroup,
      },
      {
        path: '/form/flow',
        component: FlowGroup,
      },
      {
        path: '/detail/basic',
        component: BasicDetailPage,
      },
      {
        path: '/detail/advanced',
        component: Advanced,
      },
      {
        path: '/list/basic',
        component: BasicListPage,
      },
      {
        path: '/list/card',
        component: CardListPage,
      },
      {
        path: '/list/table/filter',
        component: FusionFilterTable,
      },
      {
        path: '/list/table/mutilcol',
        component: FusionMutilcolTable,
      },
      {
        path: '/list/table/singlecol',
        component: FusionSinglecolTable,
      },
      {
        path: '/list/table/expand',
        component: FusionExpandTable,
      },
      {
        path: '/list/table/action',
        component: FusionActionTable,
      },
      {
        path: '/list/table/mergecell',
        component: FusionMergecellTable,
      },
      {
        path: '/list/table/singletree',
        component: FusionSingletreeTable,
      },
      {
        path: '/list/table/dialog',
        component: FusionDialogTable,
      },
      {
        path: '/list/table',
        component: TableListPage,
      },
      {
        path: '/feedback/fail',
        component: FeedbackFail,
      },
      {
        path: '/feedback/success',
        component: FeedbackSuccess,
      },
      {
        path: '/feedback/403',
        component: FeedbackForbidden,
      },
      {
        path: '/feedback/404',
        component: FeedbackNotFound,
      },
      {
        path: '/feedback/500',
        component: FeedbackServerError,
      },
      {
        path: '/settings',
        component: Settings,
      },
      {
        path: '/person',
        component: Person,
      },

      
      
      {
        path: '/test',
        component: Test,
      },



      {
        path: '/',
        redirect: '/dashboard/analysis', /* 一定要放在最后 */
      },
      
      
    ],
  },
  
  // {
  //   path: '/ssss',
  //   component: Analysis,
  // },
  // {
  //   path: '/',
  //   component: BasicLayout,
  //   children: [
  //     {
  //       path: '/aaa',
  //       exact: true,
  //       component:Test,
  //     },
  //   ],
  // },
];
export default routerConfig;
