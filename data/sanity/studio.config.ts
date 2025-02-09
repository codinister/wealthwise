'use client'


import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";
import { structureTool } from "sanity/structure";


const projectId =  process.env.NEXT_PUBLIC_SANITY_CLIENT || ''
const config = defineConfig({
  dataset: 'production', 
  projectId,
  title: 'Wealth Wise', 
  basePath: '/adminpage', 
  schema: {
    types: schemaTypes
  },
  plugins: [structureTool()]
})

export default config