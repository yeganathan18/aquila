/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

import { useMediaQuery } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useRouter } from 'next/router'

import Link from 'next/link'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
]

const Event = () => {
  const router = useRouter()
  const { slug } = router.query
  const md = useMediaQuery('(min-width:768px)')
  const sm = useMediaQuery('(min-width:425px)')
  // eslint-disable-next-line consistent-return
  const ImageLister = () => {
    if (md) {
      return (
        <>
          <ImageList sx={{ width: 1000 }} cols={3}>
            {itemData.map((item) => (
              // eslint-disable-next-line react/jsx-no-undef
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </>
      )
    }

    if (sm) {
      return (
        <>
          <ImageList sx={{ width: 500 }} cols={1}>
            {itemData.map((item) => (
              // eslint-disable-next-line react/jsx-no-undef
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </>
      )
    }
  }

  return (
    <>
      <div className='divide-y divide-gray-200 max-w-screen-lg mx-auto px-3'>
        <div className='pt-6 pb-6 space-y-2 md:space-y-5'>
          <p className='text-3xl leading-7 tracking-tight text-gray-600 sm:text-4xl md:text-3xl'>
            {slug}
          </p>
        </div>
        <div className='container py-6'>
          <div className='flex flex-wrap'>{ImageLister()}</div>
          <div className='pt-6 flex justify-center'>
            <Link href='/gallery'>
              <button
                className='inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 '>
                Back to Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
