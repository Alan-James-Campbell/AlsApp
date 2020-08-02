import React, { useState } from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, Input, TextField } from '@material-ui/core';
import './BlogForm.css'

const BlogForm = ({ createNewBlogAction, client }: BlogFormProps) => {

    const [inputPrivate, updateInputPrivate] = useState(false)
    const [inputTitle, updateInputTitle] = useState('')
    const [inputBody, updateInputBody] = useState('')



    const handlePrivacyCheck = (e: any) => updateInputPrivate(e.target.checked)
    const handleTitleChange = (e: any) => updateInputTitle(e.target.value)
    const handleBodyChange = (e: any) => updateInputBody(e.target.value)
    
    const handleBlogSubmit = (e: any) => {
      e.preventDefault()
      
      const body = {
          title: inputTitle,
          body: inputBody,
          private: inputPrivate
      }

      createNewBlogAction(client, body)
    }

    return (
        <div>
            <br />
            <div>
                <h1>Create Blog</h1>
                <div id='blogFormContainer'>

                    <div className='OneEMBottomeMargin'>
                        <FormControl>
                            <InputLabel >Title</InputLabel>
                            <Input
                                value={inputTitle}
                                onChange={handleTitleChange}
                            />
                        </FormControl>
                    </div>

                    <div className='OneEMBottomeMargin'>
                        <FormControl fullWidth={true}>
                            <TextField
                                fullWidth={true}
                                label='Content'
                                multiline
                                rowsMax={10}
                                value={inputBody}
                                onChange={handleBodyChange}
                            />
                        </FormControl>
                    </div>

                    <div className='OneEMBottomeMargin'>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={inputPrivate}
                                        onChange={handlePrivacyCheck}
                                    />}
                                label='Private'
                                labelPlacement='end'
                            />
                        </FormControl>
                    </div>

                    <Button 
                      variant='contained' 
                      color='primary'
                      onClick={handleBlogSubmit}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}



export default BlogForm

interface BlogFormProps {
    createNewBlogAction: Function,
    client: object
}

