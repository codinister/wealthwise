import { NextStudio } from 'next-sanity/studio';
import config from '@/data/sanity/studio.config';

const AdminPage = () => {
  return <NextStudio config={config} />;
}

export default AdminPage
