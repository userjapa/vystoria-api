
import dotenv from 'dotenv'

dotenv
  .config({
    silent: true,
    path: `.env.${process.env.NODE_ENV}`
  })