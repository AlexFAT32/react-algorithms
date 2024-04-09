import { ReactNode } from 'react';
import { HomePage } from '@/pages/Home.page';
import { KadanePage } from '@/pages/Kadane.page';


export type LinkType = {
  label: string;
  url: string;
  component?: ReactNode;
  icon?: ReactNode
}

export const links: LinkType[] = [
  {
    label: 'Home',
    url: '/',
    component: <HomePage />,
  },
  {
    label: 'Kadane\'s Algorithm',
    url: '/kadane',
    component: <KadanePage />,
  },
]
