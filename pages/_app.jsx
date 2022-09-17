import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Progress } from '../components'
import { useProgressStore } from '../store'

function MyApp({ Component, pageProps }) {
  const setIsAntimating = useProgressStore((state) => state.setIsAnimating);
  const isAntimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAntimating(true);
    }
    const handleStop = () => {
      setIsAntimating(false);
    }
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  },[setIsAntimating])
  return (
    <>
      <Progress isAnimating={isAntimating} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
