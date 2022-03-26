import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

export default function Page({ children }) {
  return (
    <Flex direction='column' width='100%' minH='100vh'>
      <Flex
        direction='row'
        height='10vh'
        backgroundColor='blue.200'
        alignItems='center'
        padding='0px 20px'
      >
        <Link href='/'>Home</Link>
      </Flex>
      {children}
    </Flex>
  )
}