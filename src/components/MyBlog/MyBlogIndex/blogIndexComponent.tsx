import React, {useEffect} from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { publicBlogInterface } from '../../../types/blog'

const BlogIndex = ({getAllPublicBlogs, isSessionActive, client, createNewBlog, publicBlogList}: BlogIndexProps) => {
  const body = {
    title: 'The Secret of Happiness',
    body: 'The Secret of happiness is not give a fuck',
    private: false,
  }

  useEffect(() => {
    if(isSessionActive){
      getAllPublicBlogs(client)
      // createNewBlog(client, body)
    }
  })

  return (
  	<div>
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
  createNewBlog: Function;
  isSessionActive: Boolean,
  client: Object,
  publicBlogList: publicBlogInterface[]
}
