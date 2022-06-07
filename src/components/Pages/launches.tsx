import * as React from 'react'
import LaunchList from './LaunchList/Index'
import LaunchProfile from './LaunchProfile/index'
import { PageLayout } from "../common";

export default function Launches(){
    const [id, setId] = React.useState(42)
    const handleIdChange = React.useCallback((newId: React.SetStateAction<number>) => {
      setId(newId)
    }, [])
  return (
    <PageLayout>
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </PageLayout>
  )
};
