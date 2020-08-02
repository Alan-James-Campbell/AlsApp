import React, {useEffect, useState} from 'react'
import BlogForm from '../../BlogForm'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { publicBlogInterface } from '../../../types/blog'

const BlogIndex = ({getAllPublicBlogs, isSessionActive, client, publicBlogList}: BlogIndexProps) => {
  const body = {
    title: 'The Secret of Happiness',
    body: 'The Secret of happiness is not give a fuck',
    private: false,
  }

  const [hasFetchedBlogs, updateHasFetchedBlogs] = useState(false)

  useEffect(() => {
    if(isSessionActive&&!hasFetchedBlogs){
      getAllPublicBlogs(client)
      updateHasFetchedBlogs(true)
    }
    return () => updateHasFetchedBlogs(false)
  }, [])

  return (
  	<div>
      <BlogForm/>
      {(publicBlogList.length > 0)&&(
        publicBlogList.map((blog, key)=> {
          const { title, body } = blog
          return (
            <List key={key}>
              <ListItem>
                <ListItemText primary={title} secondary={body}/>
              </ListItem>
            </List>
          )
        })
      )}
    </div>
  )
}

export default BlogIndex

interface BlogIndexProps {
  getAllPublicBlogs: Function;
  isSessionActive: Boolean,
  client: Object,
  publicBlogList: publicBlogInterface[]
}
