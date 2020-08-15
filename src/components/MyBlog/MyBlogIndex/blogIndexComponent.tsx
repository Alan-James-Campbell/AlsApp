import React, {useEffect, useState} from 'react'
import BlogForm from '../../BlogForm'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { publicBlogInterface } from '../../../types/blog'

const BlogIndex = ({getAllPublicBlogs, isSessionActive, client, publicBlogList}: BlogIndexProps) => {

  const [hasFetchedBlogs, updateHasFetchedBlogs] = useState(false)

  useEffect(() => {
    if(isSessionActive&&!hasFetchedBlogs){
      getAllPublicBlogs(client)
    }
  })

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
