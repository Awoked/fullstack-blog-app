"use client"
import { Field, Form, Formik, FormikFormProps } from 'formik'
import React from 'react'
import { Blog } from '@prisma/client'


type BlogType = Omit<Blog, "id">

const CreateBlog = () => {

    const initialValues: BlogType = {
        description: '',
        ImageURL: '',
        title: '',
    };

    return (
        <div>
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
                            body: JSON.stringify(values)
                        })
                        const data = await response.json();
                    } catch (error) {

                    } finally {
                        actions.setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='grid grid-cols-2'>
                        <Field type="text" name="title" className="border-2" placeholder="Başlık" />
                        <Field type="text" name="ImageURL" className="border-2" placeholder="resim" />
                        <Field type="text" name="description" className="border-2" placeholder="açıklama" />
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