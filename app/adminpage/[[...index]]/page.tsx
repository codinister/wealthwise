import { NextStudio } from 'next-sanity/studio';
import config from '@/data/sanity/studio.config';

const AdminPage = () => {
  return <div style={{marginTop: '10rem'}}> <NextStudio config={config} /> </div>
}

export default AdminPage
