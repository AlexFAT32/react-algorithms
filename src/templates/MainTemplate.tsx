import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Flex, Group, Skeleton, Text } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export type MainTemplateProps = React.PropsWithChildren<{
  auth?: React.ReactNode
  menu?: React.ReactNode
}>;

export const MainTemplate = ({ auth, children, menu }: MainTemplateProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="default"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex justify={'space-between'} w={'100%'}>
            <ColorSchemeToggle />
            {auth}
          </Flex>

        </Group>

      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Navbar</Text>
        </Group>
        {menu}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      {/*<AppShell.Aside p="md">Aside</AppShell.Aside>*/}
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
};
