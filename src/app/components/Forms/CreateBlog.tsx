"use client"
import { Field, Form, Formik, FormikFormProps } from 'formik'
import React, { useState } from 'react'
import { Blog } from '@prisma/client'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


type BlogType = Omit<Blog, "id">

const CreateBlog = () => {

    const [rawContent, setRawContent] = useState<string>('');


    const initialValues: Omit<BlogType, "RawContent"> = {
        description: '',
        ImageURL: '',
        title: '',
    };

    return (
        <div className='text-black'>
            <Formik
                initialValues={initialValues}
                validate={(values) => {
                    const errors: any = {};

                    if (!values.title) {
                        errors.title = 'required'
                    }
                    return errors
                }}
                onSubmit={async (values, actions) => {

                    try {
                        const response = await fetch("/api/blogs", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                ...values,
                                RawContent: rawContent
                            })
                        })
                        console.log('response', response)
                        const data = await response.json();
                        console.log('data', data)
                    } catch (error) {
                        console.log('error', error)
                    } finally {
                        actions.setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col gap-4'>
                        <Field type="text" name="title" className="border-2 py-2" placeholder="Başlık" />
                        <Field type="text" name="ImageURL" className="border-2 py-2" placeholder="resim" />
                        <Field type="text" name="description" className="border-2 py-2" placeholder="açıklama" />

                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e, d) => { setRawContent(d.data.get()) }}

                        />

                        <button type='submit' disabled={isSubmitting} className='bg-green-300 p-3 rounded-md'>
                            {isSubmitting ? "Ekleniyor..." : "Ekle"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateBlog