import { useCallback, useState } from 'react';
import { Button, Code, NumberInput, Stack, TextInput } from '@mantine/core';
import { kadaneAlg } from '@/utils/kadaneAlg';
import {GoogleLogin} from "@react-oauth/google";

export const KadanePage = () => {
  const [str, setStr] = useState('');
  const [n, setN] = useState<string | number>(1);
  const [code, setCode] = useState<Record<any, any>>({ subSet: {}, tempMap: {}, maxLength: 0 } );

  const handleClick = useCallback(() => {
    const res = kadaneAlg(str, Number(n));
    console.log('res', res);
    setCode(res);
  }, [str, n]);

  function tt(s: string, r: string){
    const rr = () => {
      console.log(s, r);
    }
    return rr();
  }

  console.log('TT: ', tt('aaa', 'bbb'));

  return (
    <Stack gap={20}>
      <div>
        <h1>Kadane's Algorithm</h1>
      </div>
      <div>
        Getting the maximum substring length with less or equal "<b>N</b>" unique characters
      </div>
      <Stack>
        <TextInput value={str} onChange={(event) => setStr(event.currentTarget.value)} />
        <NumberInput value={n} onChange={setN} />
        <Button onClick={handleClick}>Huiak</Button>
        <Code color="var(--mantine-color-blue-light)" p={20}>
          {JSON.stringify(Array.from(code.subSet), null, 2)}
        </Code>
        <h3>
          Maximum substring length: <b>{code.maxLength}</b>
        </h3>
      </Stack>

    </Stack>
  );
};
