import { Studio } from 'sanity'
import config from '../../sanity.config'

// Full-page Sanity Studio embedded at /studio/*
// No Layout wrapper — studio manages its own UI
export default function StudioPage() {
  return (
    <div style={{ height: '100vh' }}>
      <Studio config={config} />
    </div>
  )
}
