import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] =useState('')
  const [thumbnail, setThumbnail] =useState('')

  const modules = {
    toolbar: [
      [{'header':[1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'orderes'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']

    ]

  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className='form-error-message'>This is an error message</p>
        <form  className="form create-post-form">
          <input type="text" placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)}/>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
          <input type="file" onChange={e=> setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
          <button type='submit' className='btn primary'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost
