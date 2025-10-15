import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Work + Life',
  
  projectId: 'oytjr20c',
  dataset: 'production',
  studioHost: 'work-life-studio',
  
  plugins: [
    structureTool(), 
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
})