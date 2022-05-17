import * as React from 'react'
import LaunchList from './LaunchList/Index'
import LaunchProfile from './LaunchProfile'

const Launches = () => {
  const [id, setId] = React.useState(42)
  const handleIdChange = React.useCallback((newId: React.SetStateAction<number>) => {
    setId(newId)
  }, [])
  return (
    <div className='App'>
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
}

export default Launches
