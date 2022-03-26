import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Box, Flex, Image } from "@chakra-ui/react";
import Page from "../../components/Page";
import Storyblok from '../../services/storyblok';

export default function BlogPost() {
  const [post, setPost] = useState({})
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (slug) {
      Storyblok.get(`cdn/stories/posts/${slug}`).then((res) => {
        setPost(res.data.story)
      });
    }
  }, [slug])

  return (
    <Page>
      <Flex direction='column' width='100%' padding='5vh 20%' gridRowGap='5vh'>
        {!!post.id && (
          <>
            <Image
              src={post.content.image}
              width='100%'
              height='auto'
              alt={post.name}
            />
            <Box
              as='h2'
              fontSize='1.5rem'
              fontWeight='bold'
            >
              {post.name}
            </Box>
            <Box marginBottom='15px'>
              {post.content.long_text.content?.map((paragraph) => {
                return (
                  <p key={paragraph.content[0].text}>
                    {paragraph.content[0].text}
                  </p>
                )
              }
              )}
            </Box>
          </>
        )}
      </Flex>
    </Page>
  )
}