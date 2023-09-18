"use client"
import React from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'

const Editor = () => {
    return (
        <CKEditor editor={ClassicEditor} />

    )
}

export default Editor