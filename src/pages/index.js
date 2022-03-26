import { useEffect, useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react';
import Storyblok from '../services/storyblok'
import { useRouter } from 'next/router';
import Page from '../components/Page';

export default function Home() {
  const [stories, setStories] = useState([])
  const router = useRouter()

  useEffect(() => {
    Storyblok.get('cdn/stories', {
      starts_with: 'posts/'
    }).then((res) => {
      console.log('🚀 ~ res', res.data.stories);
      setStories(res.data.stories)
    });
  }, [])

  const handleBlogRedirect = (slug) => {
    return () => {
      router.push(`/blog/${slug}`)
    }
  }
  return (
    <Page>
      <Flex direction='column' width='100%' padding='5vh 20%' gridRowGap='5vh'>
        {!!stories.length && stories.map((story) => {
          return (
            <Flex
              as='button'
              direction='column'
              backgroundColor='blue.200'
              gridRowGap='15px'
              alignItems='center'
              borderRadius='5px'
              key={story.id}
              overflow='hidden'
              onClick={handleBlogRedirect(story.slug)}
            >
              <Image src={story.content.image} width='100%' height='auto' alt={story.name} />
              <Box
                as='h2'
                fontSize='1.5rem'
                fontWeight='bold'
              >
                {story.name}
              </Box>
              <Box marginBottom='15px'>
                {story.content.intro}
              </Box>
            </Flex>
          )
        })}
      </Flex>
    </Page>
  )
}
